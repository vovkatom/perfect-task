import Icon from '../../Icon/Icon';
import css from '../LogOut/LogOut.module.css';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/auth/auth-operations';

const LogOut = () => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(logout());
  console.log(onLogout);
  return (
    <div>
      <button className={css.btn_logout} onClick={onLogout} type="button">
        <Icon id="logout" width="32" height="32" className="" />
        Log Out
      </button>
    </div>
  );
};

export default LogOut;
