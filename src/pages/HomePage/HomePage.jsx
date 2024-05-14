import { useEffect, useState } from 'react';
import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import ScreensPage from '../ScreensPage/ScreensPage';
import css from './HomePage.module.css';
// import { useEffect } from 'react';
// import { useRef } from 'react';

const HomePage = () => {
  // const sidebarRef = useRef();
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const body = document.querySelector('body');
  const viewPortWidth = Number(body.clientWidth);
  console.log(viewPortWidth);
  useEffect(() => {
    if (viewPortWidth >= 1440) {
      setIsSideBarOpen(true);
      return;
    }
  }, [viewPortWidth]);

  const openSidebar = () => {
    setIsSideBarOpen(true);
  };

  return (
    <>
      <div className={css.background}>
        <Header openSidebar={openSidebar} />
        {isSideBarOpen && (
          <SideBar
            isSideBarOpen={isSideBarOpen}
            viewPortWidth={viewPortWidth}
          />
        )}
        <Container className="home-page">
          <ScreensPage />
        </Container>
      </div>
    </>
  );
};

export default HomePage;
