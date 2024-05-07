import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './components/SharedLayout/SharedLayout';
import AuthPage from './pages/AuthPage/AuthPage';

// import PublicRoute from './components/PublicRoute/PublicRoute';
// import PrivateRoute from './components/PrivateRoute/PrivatRoute';

const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ScreensPage = lazy(() => import('./pages/ScreensPage/ScreensPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {/* <Route element={<PublicRoute />}> */}
        <Route index element={<WelcomePage />} />
        {/* </Route> */}
        <Route path="auth/:id" element={<AuthPage />} />
        {/* <Route element={<PrivateRoute />}> */}
        <Route path="home" element={<HomePage />} />
        {/* </Route> */}
        <Route path="home/:boardName" element={<ScreensPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
