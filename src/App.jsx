import { useDispatch } from 'react-redux';
import { Suspense, useEffect } from 'react';
import { current } from './redux/auth/auth-operations';
import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import AuthPage from './pages/AuthPage/AuthPage';
import { lazy } from 'react';

import PublicRoute from './components/PublicRoute/PublicRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { useSelector } from 'react-redux';
import { selectIsLogin } from './redux/auth/auth-selectors';
import Loader from './components/Loader/Loader';

const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ScreensPage = lazy(() => import('./pages/ScreensPage/ScreensPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const AppRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  const isLogin = useSelector(selectIsLogin);
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              isLogin ? <Navigate to="/home" /> : <Navigate to="/welcome" />
            }
          />
          <Route element={<PublicRoute />}>
            <Route path="welcome" element={<WelcomePage />} />
            <Route path="auth/:id" element={<AuthPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="home" element={<HomePage />} />
            <Route path="home/:boardName" element={<ScreensPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
