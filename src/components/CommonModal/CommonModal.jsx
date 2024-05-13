import css from './CommonModal.module.css';
import Icon from '../Icon/Icon';

const CommonModal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className={css.background}>
      <div className={css.modalPageBox}>
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
