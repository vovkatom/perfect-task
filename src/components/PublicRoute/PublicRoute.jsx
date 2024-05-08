import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import {
  selectIsLogin,
  selectAccessToken,
} from '../../redux/auth/auth-selectors';
import Loader from '../Loader/Loader';

const PublicRoute = () => {
  const isLogin = useSelector(selectIsLogin);
  const token = useSelector(selectAccessToken);

  if (!isLogin && token) {
    return <Loader />;
  }

  if (isLogin) {
    return <Navigate to="/home" />;
  }

  return <Outlet />;
};

export default PublicRoute;
