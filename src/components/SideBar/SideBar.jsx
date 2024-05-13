import { useState, useEffect } from 'react';
import css from './SideBar.module.css';
import Logo from './Logo/Logo';
import CreateNewBoard from './CreateNewBoard/CreateNewBoard';
import NeedHelp from './NeedHelp/NeedHelp';
import LogOut from './LogOut/LogOut';
import BoardsList from './BoardsList/BoardsList';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import { selectBoards } from '../../redux/userBoard/userBoard-selectors';
import { fetchBoards } from '../../redux/userBoard/userBoard-operations';
import Loader from '../Loader/Loader';

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const allBoards = useSelector(selectBoards);
  const { items, isLoading, error } = allBoards;
  const dispatch = useDispatch();
  const sidebarRef = useRef(null);

  useEffect(() => {
    dispatch(fetchBoards());
  }, [dispatch]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log('clicked outside sidebar');
      console.log(sidebarRef.current);
      // Check if click occurred outside the sidebar
      if (!sidebarRef.current.contains(event.target)) {
        // Close the sidebar here
        console.log(event.target);
        setIsSidebarOpen(!isSidebarOpen);
      }
    };
    // Add event listener to document to handle clicks outside the sidebar
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // Remove event listener when component unmounts
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsSidebarOpen, isSidebarOpen]);

  return (
    <div ref={sidebarRef} className={`${css.container} ${css.sidebar}`}>
      <Logo />
      <h3 className={css.myBoardsTitle}>My boards</h3>
      <CreateNewBoard />
      {error && <p>{error}</p>}
      {isLoading && <Loader />}
      {items?.length === 0 ? '' : <BoardsList />}
      <NeedHelp />
      <LogOut />
    </div>
  );
};

export default SideBar;
