import { useEffect, forwardRef } from 'react';
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

const SideBar = forwardRef((_, ref) => {
  const allBoards = useSelector(selectBoards);
  const { items, isLoading, error } = allBoards;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBoards());
  }, [dispatch]);

  return (
    <div ref={ref} className={`${css.container} ${css.sidebar}`}>
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
  );
});

SideBar.displayName = 'SideBar';

export default SideBar;
