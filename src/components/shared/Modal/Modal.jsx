import css from '../Modal/Modal.module.css';

const Modal = ({ active, setActive, children }) => {
  const changeActive = () => {
    setActive((active) => !active);
  };

  return (
    <div
      className={active ? css.modalActive : css.modal}
      onClick={changeActive}
    >
      <div
        className={active ? css.modalContentActive : css.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
