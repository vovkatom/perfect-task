import { useSelector } from 'react-redux';
import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import ScreensPage from '../ScreensPage/ScreensPage';
import css from './HomePage.module.css';
import { selectIsLogin } from '../../redux/auth/auth-selectors';

const HomePage = () => {
  const isLogin = useSelector(selectIsLogin);

  return (
    <>
      {isLogin && (
        <div className={css.background}>
          <Header />
          <SideBar />
          <Container className="home-page">
            <ScreensPage />
          </Container>
        </div>
      )}
    </>
  );
};

export default HomePage;
