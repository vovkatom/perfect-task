import css from './modal-page.module.css';

const ModalPage = ({ isOpen, onClose, title, children }) => {
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

export default ModalPage;
