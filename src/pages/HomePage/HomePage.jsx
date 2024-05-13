import { useState } from 'react';
import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import ScreensPage from '../ScreensPage/ScreensPage';
import css from './HomePage.module.css';
import { useEffect } from 'react';
import { useRef } from 'react';

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const body = document.querySelector('body');
    console.dir(body);
    if (body.clientWidth >= 1440) {
      setIsSidebarOpen(true);
      return;
    }
    const handleMouseDown = (e) => {
      if (!sidebarRef.current.contains(e.target)) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      {isSidebarOpen && <SideBar ref={sidebarRef} />}
      <div className={css.background}>
        <Container className="home-page">
          <ScreensPage />
        </Container>
      </div>
    </>
  );
};

export default HomePage;
