import { useState } from 'react';
import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import ScreensPage from '../ScreensPage/ScreensPage';
import css from './HomePage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { googleLog } from '../../redux/auth/auth-operations';
import { selectIsLoading } from '../../redux/userBoard/userBoard-selectors';
import Loader from '../../components/Loader/Loader';

const HomePage = () => {
  const isLoading = useSelector(selectIsLoading);
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
