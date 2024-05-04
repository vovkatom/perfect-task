import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import SideBar from '../../components/Sidebar/SideBar';
import ScreensPage from '../ScreensPage/ScreensPage';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.background}>
      <Header />
      <SideBar />
      <Container className="home-page">
        <ScreensPage />
      </Container>
    </div>
  );
};

export default HomePage;
