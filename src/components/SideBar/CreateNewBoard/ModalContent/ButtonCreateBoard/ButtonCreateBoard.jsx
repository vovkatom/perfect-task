import css from '../ButtonCreateBoard/ButtonCreateBoard.module.css';

const ButtonCreateBoard = () => {
  return (
    <button type="submit" className={css.buttonCreate}>
      <svg width="28" height="28"></svg>
      <p>Create</p>
    </button>
  );
};

export default ButtonCreateBoard;
