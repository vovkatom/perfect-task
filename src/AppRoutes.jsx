import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { RegisterForm } from './components/RegisterForm/RegisterForm';

const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
const AuthPage = lazy(() => import('./pages/AuthPage/AuthPage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ScreensPage = lazy(() => import('./pages/ScreensPage/ScreensPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<WelcomePage />} />
        {/* <Route path="auth/:id" element={<AuthPage />} /> */}
        <Route path="auth" element={<AuthPage />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="home" element={<HomePage />} />
        <Route path="home/:boardName" element={<ScreensPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
