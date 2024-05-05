import css from './CommonModal.module.css';

const CommonModal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

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

export default CommonModal;
