import Icon from '../../Icon/Icon';
import css from '../Logo/Logo.module.css';

const Logo = () => {
  return (
    <>
      <div className={css.logo}>
        <Icon className={css.logoIcon} id="icon-logo2" width="32" height="32" />
        <p className={css.logoTitle}>Perfect Task</p>
      </div>
    </>
  );
};

export default Logo;
