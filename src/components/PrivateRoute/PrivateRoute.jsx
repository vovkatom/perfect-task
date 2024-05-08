import { Navigate, Outlet } from 'react-router-dom';
import { selectIsLogin, selectToken } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';

const PrivateRoute = () => {
  const isLogin = useSelector(selectIsLogin);
  const token = useSelector(selectToken);

  if (!isLogin && token) {
    return <Loader />;
  }

  if (!isLogin && !token) {
    return <Navigate to="/welcome" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
