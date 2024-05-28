import css from './HomePage.module.css';
import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import ScreensPage from '../ScreensPage/ScreensPage';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { selectCurrentBoard } from '../../redux/userBoard/userBoard-selectors';
// import HomeEmptyBoard from '../../components/Home/HomeEmptyBoard';

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const currentBoard = useSelector(selectCurrentBoard);
  console.log(Boolean(Object.keys(currentBoard).length));

  const viewPortWidth = useMediaQuery({ minWidth: 1440 });

  useEffect(() => {
    setIsSidebarOpen(viewPortWidth);
  }, [viewPortWidth]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={css.homePageContainer}>
      <Header toggleSidebar={toggleSidebar} />
      {isSidebarOpen && (
        <SideBar viewPortWidth={viewPortWidth} isOpen={toggleSidebar} />
      )}
      {/* {Object.keys(currentBoard).length ? <ScreensPage /> : <HomeEmptyBoard />} */}
      <ScreensPage />
    </div>
  );
};
export default HomePage;
