import { useDispatch } from 'react-redux';
import { Suspense, useEffect } from 'react';
import { current } from './redux/auth/auth-operations';
import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './components/Layout/Layout';
import { Toaster } from 'react-hot-toast';

import PublicRoute from './components/PublicRoute/PublicRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { useSelector } from 'react-redux';
import { selectIsLogin } from './redux/auth/auth-selectors';
import Loader from './components/Loader/Loader';
import { getTheme } from './js/theme-changer';
import Welcome from './components/Welcome/Welcome';

// const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
const AuthPage = lazy(() => import('./pages/AuthPage/AuthPage'));
const AuthPageGoogle = lazy(() => import('./pages/AuthPage/AuthPageGoogle'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ScreensPage = lazy(() => import('./pages/ScreensPage/ScreensPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const AppRoutes = () => {
  const isLogin = useSelector(selectIsLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
    getTheme();
  }, [dispatch]);

  return (
    <>
      <Layout>
        {isLogin ? (
          <Loader centered />
        ) : (
          <Suspense fallback={<Loader centered />}>
            <Routes>
              <Route
                index
                element={
                  isLogin ? <Navigate to='/home' /> : <Navigate to='/welcome' />
                }
              />
              <Route element={<PublicRoute />}>
                <Route path='welcome' element={<Welcome />} />
                <Route path='auth' element={<AuthPageGoogle />} />
                <Route path='auth/:id' element={<AuthPage />} />
              </Route>
              <Route element={<PrivateRoute />}>
                <Route path='home' element={<HomePage />} />
                <Route path='home/:boardName' element={<ScreensPage />} />
              </Route>
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        )}
      </Layout>
      <Toaster position='top-center' reverseOrder={false} />
    </>
  );
};

export default AppRoutes;
