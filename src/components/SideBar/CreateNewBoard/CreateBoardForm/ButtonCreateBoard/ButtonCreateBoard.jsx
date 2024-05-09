import css from '../ButtonCreateBoard/ButtonCreateBoard.module.css';
import Icon from '../../../../Icon/Icon';

const ButtonCreateBoard = () => {
  return (
    <button type="submit" className={css.buttonCreate}>
      <Icon className={css.icon} id="icon-plus" width="28" height="28" />
      <p className={css.textButton}>Create</p>
    </button>
  );
};

export default ButtonCreateBoard;
