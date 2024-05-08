import css from './BurgerMenu.module.css';
import Icon from '../../Icon/Icon';

const BurgerMenu = () => {
  return (
    <>
      <button className={css.burgerButton} type="button">
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
