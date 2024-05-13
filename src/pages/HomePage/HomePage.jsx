import { useState } from 'react';
import { useSelector } from 'react-redux';
import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import ScreensPage from '../ScreensPage/ScreensPage';
import css from './HomePage.module.css';
import { selectIsLoading } from '../../redux/userBoard/userBoard-selectors';
import Loader from '../../components/Loader/Loader';

const HomePage = () => {
  const isLoading = useSelector(selectIsLoading);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      {isLoading && <Loader />}
      <Header toggleSidebar={toggleSidebar} />
      <div className={css.background}>
        {isSidebarOpen && <SideBar />}
        <Container className="home-page">
          <ScreensPage />
        </Container>
      </div>
    </>
  );
};

export default HomePage;
