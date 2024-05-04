// import { useState } from 'react';
import css from './modal-page.module.css';
// import clsx from 'clsx';

const ModalPage = ({ isOpen, onClose, title, children }) => {
  //   const [formData, setFormData] = useState({ email: '', comments: '' });

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData((prevData) => ({ ...prevData, [name]: value }));
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //   };

  if (!isOpen) return null;

  //   const inputClassName = clsx(css.modalInput, css.modalControl);
  //   const textareaClassName = clsx(css.modalInput, css.modalControlText);
  //   const buttonClassName = clsx(css.authButton, css.modalControl);

  return (
    <div className={css.background}>
      <div className={css.modalPageBox}>
        <span className={css.close} onClick={onClose}>
          &times;
        </span>
        <h2>{title}</h2>

        <div className={css.content}>{children}</div>
      </div>
    </div>
  );
};

export default ModalPage;
