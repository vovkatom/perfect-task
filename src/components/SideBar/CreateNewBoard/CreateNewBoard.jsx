import css from '../CreateNewBoard/CreateNewBoard.module.css';

const CreateNewBoard = () => {
  return (
    <button className={css.button} type="button">
      <p className={css.buttonTitle}>Create a new board</p>
      <svg className={css.buttonIcon}>
        <use href="../../../../src/assets/img/icon.svg#icon-plus">+</use>
      </svg>
    </button>
  );
};

export default CreateNewBoard;
