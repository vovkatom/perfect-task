import css from '../CreateNewBoard/CreateNewBoard.module.css';

const CreateNewBoard = () => {
  return (
    <button className={css.button} type="button">
      <p className={css.buttonTitle}>Create a new board</p>
      <div className={css.buttonIcon}>
        <p className={css.buttonPlus}>+</p>
      </div>

      {/* <svg className={css.buttonIcon} viewBox="0 0 32 32">
        <path d="M16 11.333v9.333"></path>
        <path d="M11.333 16h9.333"></path>
      </svg> */}
    </button>
  );
};

export default CreateNewBoard;
