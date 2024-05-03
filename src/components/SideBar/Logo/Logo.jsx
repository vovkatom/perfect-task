import css from '../Logo/Logo.module.css';

const Logo = () => {
  return (
    <div className={css.logo}>
      <svg className={css.logoIcon} viewBox="0 0 32 32" width="32" height="32">
        <use href="../../../../src/assets/img/icon.svg#icon-logo2"></use>
      </svg>

      <p className={css.logoTitle}>Perfect Task</p>
    </div>
  );
};

export default Logo;
