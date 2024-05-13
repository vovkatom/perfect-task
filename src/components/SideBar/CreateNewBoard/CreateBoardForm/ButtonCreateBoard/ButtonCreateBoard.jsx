import css from '../ButtonCreateBoard/ButtonCreateBoard.module.css';
import Icon from '../../../../Icon/Icon';

const ButtonCreateBoard = () => {
  return (
    <button type="submit" className={css.buttonCreate}>
      <div className={css.buttonPlus}>
        <Icon id="icon-plus" className={css.iconPlus} width="14" height="14" />
      </div>
      <p className={css.textButton}>Create</p>
    </button>
  );
};

export default ButtonCreateBoard;
