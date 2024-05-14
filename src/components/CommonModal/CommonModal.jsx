import css from './CommonModal.module.css';
import Icon from '../Icon/Icon';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const CommonModal = ({ isOpen, onClose, title, children }) => {
  const modalRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const handleMouseDown = (e) => {
      if (!modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    if (isModalOpen) {
      document.addEventListener('mousedown', handleMouseDown);
    } else {
      document.removeEventListener('mousedown', handleMouseDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [isModalOpen, onClose]);

  if (!isModalOpen) return null;

  return (
    <div className={css.background}>
      <div ref={modalRef} className={css.modalPageBox}>
        <button className={css.closeButton} onClick={onClose}>
          <Icon
            id="icon-x-close"
            className={css.closeIcon}
            width="18"
            height="18"
          />
        </button>
        <h2>{title}</h2>

        <div className={css.content}>{children}</div>
      </div>
    </div>
  );
};

export default CommonModal;
