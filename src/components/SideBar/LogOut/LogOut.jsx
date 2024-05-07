import css from '../LogOut/LogOut.module.css';
import { ReactComponent as LogOutIcon } from './logout-icon.svg';

const LogOut = () => {
  const handleLogout = () => {
    // Функція
  };
  return (
    <div>
      {/* <div className={css.icon_logout} width="32" height="32">
        <svg>
          <use href="icon.svg#icon-login"></use>
        </svg>
      </div> */}
      <button className={css.btn_logout} onClick={handleLogout}>
        <LogOutIcon />
        Log Out
      </button>
    </div>
  );
};

export default LogOut;
