import Button from '../../../../shared/Button/Button';
import css from './ModalContent.module.css';

const ModalContent = ({ closeModal }) => {
  return (
    <form className={css.form}>
      <input className={css.input} placeholder="Title" required="true"></input>
      <Button
        className={css.submitButton}
        type="submit"
        onClick={closeModal}
        title="Add"
      />
    </form>
  );
};

export default ModalContent;
