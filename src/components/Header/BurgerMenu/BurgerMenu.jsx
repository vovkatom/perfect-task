import css from './BurgerMenu.module.css';
import Icon from '../../Icon/Icon';

const BurgerMenu = ({ onClick }) => {
  return (
    <>
      <button className={css.burgerButton} type="button" onClick={onClick}>
        <Icon
          id="icon-menu"
          className={css.burgerIcon}
          width="24"
          height="24"
        />
      </button>
    </>
  );
};

export default BurgerMenu;
