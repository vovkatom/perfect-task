import { useSelector } from 'react-redux';
import { selectAuthError } from '../../redux/auth/auth-selectors';

import Auth from '../../components/Auth/Auth';
import { selectIsLoading } from '../../redux/userBoard/userBoard-selectors';
import Loader from '../../components/Loader/Loader';
import { useDispatch } from 'react-redux';
import { googleLog } from '../../redux/auth/auth-operations';

const AuthPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectAuthError);
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const accessToken = urlParams.get('token');

  const dispatch = useDispatch();

  if (accessToken) {
    dispatch(googleLog(accessToken));
  }

  return (
    <>
      {isLoading && <Loader />}
      <Auth />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};

export default AuthPage;
