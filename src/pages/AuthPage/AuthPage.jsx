import { useSelector } from 'react-redux';
import { selectAuthError } from '../../redux/auth/auth-selectors';

import Auth from '../../components/Auth/Auth';
import { selectIsLoading } from '../../redux/userBoard/userBoard-selectors';
import Loader from '../../components/Loader/Loader';

const AuthPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectAuthError);

  return (
    <>
      {isLoading && <Loader />}
      <Auth />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};

export default AuthPage;
