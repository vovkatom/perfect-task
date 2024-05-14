import { useEffect } from 'react';
import css from './SideBar.module.css';
import Logo from './Logo/Logo';
import CreateNewBoard from './CreateNewBoard/CreateNewBoard';
import NeedHelp from './NeedHelp/NeedHelp';
import LogOut from './LogOut/LogOut';
import BoardsList from './BoardsList/BoardsList';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoards } from '../../redux/userBoard/userBoard-selectors';
import { fetchBoards } from '../../redux/userBoard/userBoard-operations';
import Loader from '../Loader/Loader';
import { useRef, useState } from 'react';

const SideBar = ({ isSideBarOpen, viewPortWidth }) => {
  const allBoards = useSelector(selectBoards);
  const { items, isLoading, error } = allBoards;
  const dispatch = useDispatch();

  const sidebarRef = useRef();
  // const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchBoards());
    setIsOpen(isSideBarOpen);

    if (viewPortWidth >= 1440) {
      return;
    }

    const handleMouseDown = (e) => {
      if (!sidebarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isSideBarOpen) {
      document.addEventListener('mousedown', handleMouseDown);
    } else {
      document.removeEventListener('mousedown', handleMouseDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [dispatch, isSideBarOpen, viewPortWidth]);

  // useEffect(() => {

  // }, [viewPortWidth]);

  // useEffect(() => {

  //   console.dir(body);
  //   if (body.clientWidth >= 1440) {
  //     setIsSideBarOpen(true);
  //     return;
  //   }
  //   const handleMouseDown = (e) => {
  //     if (!sidebarRef.current.contains(e.target)) {
  //       setIsSideBarOpen(false);
  //     }
  //   };
  //   if (isSideBarOpen) {
  //     document.addEventListener('mousedown', handleMouseDown);
  //   } else {
  //     document.removeEventListener('mousedown', handleMouseDown);
  //   }
  //   return () => {
  //     document.removeEventListener('mousedown', handleMouseDown);
  //   };
  // }, []);

  return (
    <div className={css.backdrop}>
      <div
        ref={sidebarRef}
        className={`${css.container} ${css.sidebar} ${
          viewPortWidth >= 1440 ? css.fixed : ''
        }`}
      >
        <div>
          <Logo />
          <h3 className={css.myBoardsTitle}>My boards</h3>
          <CreateNewBoard />
          {error && <p>{error}</p>}
          {isLoading && <Loader />}
          {items?.length === 0 ? '' : <BoardsList />}
        </div>
        <div>
          <NeedHelp />
          <LogOut />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
