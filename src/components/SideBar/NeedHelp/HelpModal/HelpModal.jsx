import { useState } from 'react';
import css from './help-modal.module.css';
import clsx from 'clsx';

const HelpModal = ({ isOpen, onClose, formClassName }) => {
  const [formData, setFormData] = useState({ email: '', comments: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ваш код для обработки отправки формы...
  };

  if (!isOpen) return null;

  const inputClassName = clsx(css.modalInput, css.modalControl);
  const textareaClassName = clsx(css.modalInput, css.modalControlText);
  const buttonClassName = clsx(css.authButton, css.modalControl);

  return (
    <div className={css.background}>
      <div className={css.modalBox}>
        <span className={css.close} onClick={onClose}>
          &times;
        </span>

        <h2>Need Help</h2>
        <form onSubmit={handleSubmit} className={formClassName}>
          <div>
            <input
              className={inputClassName}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              required
            />
          </div>
          <div>
            <textarea
              className={textareaClassName}
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              rows="4"
              placeholder="Comment"
              required
            />
          </div>
          <button className={buttonClassName} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default HelpModal;
