// import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
// import { getIsLoggedIn } from 'redux/selector/selectors';

const PublicRoute = ({ redirectPath = 'home' }) => {
  // const isLoggedIn = useSelector(getIsLoggedIn);
  const isLoggedIn = false;
  if (isLoggedIn) {
    return <Navigate to={redirectPath} />;
  }

  return <Outlet />;
};

export default PublicRoute;
