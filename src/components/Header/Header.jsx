import BurgerMenu from './BurgerMenu/BurgerMenu';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.headerContainer}>
      <BurgerMenu />
      <div className={css.customBox}>
        <div className={css.themeBox}>
          <label htmlFor="theme" className={css.label}>
            Theme
          </label>
          <select className={css.select} id="theme" type="select">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="violet">Violet</option>
          </select>
        </div>

        <div className={css.user}>
          <p className={css.userName}>Ivetta</p>
          <div className={css.avatar}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
