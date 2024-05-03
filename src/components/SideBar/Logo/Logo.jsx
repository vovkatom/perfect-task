import css from '../Logo/Logo.module.css';
//import logo from '../../../../src/assets/img/icon.svg';

const Logo = () => {
  return (
    <div className={css.logo}>
      <svg className={css.logoIcon} viewBox="0 0 32 32" width="32" height="32">
        <use href="../../../../src/assets/img/icon.svg#icon-logo"></use>
      </svg>
      <p className={css.logoTitle}>Perfect Task</p>
    </div>
  );
};

export default Logo;
