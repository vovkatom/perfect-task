import { useState } from 'react';
import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import ScreensPage from '../ScreensPage/ScreensPage';
import css from './HomePage.module.css';
import { useDispatch } from 'react-redux';
import { googleLog } from '../../redux/auth/auth-operations';

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const accessToken = urlParams.get('token');

  const dispatch = useDispatch();

  if (accessToken) {
    dispatch(googleLog(accessToken));
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
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
