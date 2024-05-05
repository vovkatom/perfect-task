import css from '../Logo/Logo.module.css';

const Logo = () => {
  return (
    <>
      <div className={css.logo}>
        <div className={css.logoIcon}>
          <svg>
            <use xlinkHref="icon.svg#icon-logo2"></use>
          </svg>
        </div>

        <p className={css.logoTitle}>Perfect Task</p>
      </div>
    </>
  );
};

export default Logo;

// href="../../../../src/assets/img/icon.svg#icon-logo2"
