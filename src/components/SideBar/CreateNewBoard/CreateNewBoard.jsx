import css from '../CreateNewBoard/CreateNewBoard.module.css';
//import {} from '../../../../src/assets/img/icon.svg';

const CreateNewBoard = () => {
  return (
    <button className={css.button} type="button">
      <p className={css.buttonTitle}>Create a new board</p>
      <svg
        className={css.buttonIcon}
        viewBox="0 0 40 36"
        width="40"
        height="36"
      >
        <use href="../../../../src/assets/img/icon.svg#icon-plus"></use>
      </svg>
    </button>
  );
};

export default CreateNewBoard;
