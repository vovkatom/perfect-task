import { useSelector } from 'react-redux';
import {
  selectAuthLoading,
  selectAuthError,
} from '../../redux/auth/auth-selectors';

import Loader from '../../components/Loader/Loader';
import Auth from '../../components/Auth/Auth';

const AuthPage = () => {
  const isLoading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Auth />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};

export default AuthPage;
