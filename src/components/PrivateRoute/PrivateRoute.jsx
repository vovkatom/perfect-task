import { Navigate, Outlet } from 'react-router-dom';
import {
  selectIsLogin,
  selectAccessToken,
} from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const isLogin = useSelector(selectIsLogin);
  const token = useSelector(selectAccessToken);

  if (!isLogin && !token) {
    return <Navigate to='/welcome' />;
  }
  return <Outlet />;
};

export default PrivateRoute;
