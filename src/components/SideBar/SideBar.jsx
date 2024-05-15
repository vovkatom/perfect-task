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
import { useRef } from 'react';

const SideBar = ({ viewPortWidth, isOpen }) => {
  const sidebarRef = useRef();

  const allBoards = useSelector(selectBoards);
  const { items, isLoading, error } = allBoards;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBoards());
  }, [dispatch, isOpen]);

  useEffect(() => {
    const handleMouseDown = (e) => {
      if (!sidebarRef.current.contains(e.target)) {
        isOpen(false);
      }
    };
    if (isOpen && !viewPortWidth) {
      document.addEventListener('mousedown', handleMouseDown);
    } else {
      document.removeEventListener('mousedown', handleMouseDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [isOpen, viewPortWidth]);

  return (
    <div className={`${!viewPortWidth ? css.background : css.noBackground}`}>
      <div ref={sidebarRef} className={`${css.container} ${css.sidebar}`}>
        <div className={css.upperPart}>
          <Logo />
          <h3 className={css.myBoardsTitle}>My boards</h3>
          <CreateNewBoard />
          {error && <p>{error}</p>}
          {isLoading && <Loader />}
          {items?.length === 0 ? '' : <BoardsList />}
        </div>
        <div className={css.bottomPart}>
          <NeedHelp />
          <LogOut />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
