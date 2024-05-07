import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import AppRoutes from './AppRoutes';
import { current } from './redux/auth/auth-operations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <>
      <AppRoutes />
    </>
  );
};

export default App;
