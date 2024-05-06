import css from '../LogOut/LogOut.module.css';

const LogOut = () =>
{
    const handleLogout = () => {
        // Функція
      };
return (
    <div>
        <div className={css.icon_logout} width='32' height="32">
        <svg>
        <use href="icon.svg#icon-login"></use>
        </svg>
        </div>
<button className={css.btn_logout} onClick={handleLogout}>
    Log Out
</button>
    </div>
);
};

export default LogOut;