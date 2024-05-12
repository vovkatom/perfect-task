import css from './ModalEditProfile.module.css';

const ModalEditProfile = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className={css.background}>
      <div className={css.modalPageBox}>
        <span className={css.close} onClick={onClose}>
          &times;
        </span>
        <h2 className={css.editProfileTitle}>{title}</h2>

        <div className={css.content}>{children}</div>
      </div>
    </div>
  );
};

export default ModalEditProfile;
