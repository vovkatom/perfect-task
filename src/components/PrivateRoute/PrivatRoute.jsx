// import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
// import { getIsLoggedIn } from 'redux/selector/selectors';

const PrivateRoute = ({ redirectPath = '/' }) => {
  // const isLoggedIn = useSelector(getIsLoggedIn);
  const isLoggedIn = false;
  if (isLoggedIn === false) {
    return <Navigate to={redirectPath} />;
  }
  return <Outlet />;
};

export default PrivateRoute;
