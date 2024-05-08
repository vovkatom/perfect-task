import { useState } from 'react';
import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import ScreensPage from '../ScreensPage/ScreensPage';
import css from './HomePage.module.css';

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <div className={css.background}>
        <Header toggleSidebar={toggleSidebar} />
        {isSidebarOpen && <SideBar />}
        <Container className="home-page">
          <ScreensPage />
        </Container>
      </div>
    </>
  );
};

export default HomePage;
