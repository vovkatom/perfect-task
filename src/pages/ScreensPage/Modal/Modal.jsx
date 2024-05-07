import React, { useEffect } from 'react';
import css from './Modal.module.css';
//import svg
import { createPortal } from 'react-dom';
import { useUserData } from 'hooks/useUserData';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, openModal }) => {
  const { userTheme } = useUserData();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        openModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [openModal]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      openModal();
    }
  };

  return createPortal(
    <div
      className={css.backdrop}
      onClick={handleBackdropClick}
      data-theme={userTheme}
    >
      <div className={css.modal}>
        <button
          type="button"
          className={css.closeIcon}
          onClick={() => openModal()}
        >
          <svg className={css.icon}>
            <use href={#} />
          </svg>
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;