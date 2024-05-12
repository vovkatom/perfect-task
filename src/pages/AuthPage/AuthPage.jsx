import { useSelector } from 'react-redux';
import {
  selectAuthError,
} from '../../redux/auth/auth-selectors';

import Auth from '../../components/Auth/Auth';

const AuthPage = () => {
  const error = useSelector(selectAuthError);

  return (
    
    <>
      <Auth />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};

export default AuthPage;
