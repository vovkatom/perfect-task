import { useDispatch } from 'react-redux';
import { Suspense, useEffect } from 'react';
import { current } from './redux/auth/auth-operations';
import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import PublicRoute from './components/PublicRoute/PublicRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { useSelector } from 'react-redux';
import { selectIsLogin } from './redux/auth/auth-selectors';
import Loader from './components/Loader/Loader';
import { getTheme } from './js/theme-changer';

const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
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
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          index
          element={
            isLogin ? <Navigate to="/home" /> : <Navigate to="/welcome" />
          }
        />
        <Route element={<PublicRoute />}>
          <Route path="welcome" element={<WelcomePage />} />
          <Route path="auth" element={<AuthPageGoogle />} />
          <Route path="auth/:id" element={<AuthPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="home" element={<HomePage />} />
          <Route path="home/:boardName" element={<ScreensPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
