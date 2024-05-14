import css from './GoogleButton.module.css';
import Icon from '../../Icon/Icon';

const GoogleButton = () => {
  return (
    <>
      <a
        className={css.googleBtn}
        href="https://perfect-task-back.onrender.com/api/users/google"
        aria-label="Registration by using Google"
      >
        <Icon id="google" className={css.googleIcon} width="20" height="20" />
      </a>
    </>
  );
};

export default GoogleButton;
