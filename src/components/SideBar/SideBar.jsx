import css from './SideBar.module.css';
import Logo from './Logo/Logo';
import CreateNewBoard from './CreateNewBoard/CreateNewBoard';
import NeedHelp from './NeedHelp/NeedHelp';
import LogOut from './LogOut/LogOut';

const SideBar = () => {
  return (
    <div className={`${css.container} ${css.sidebar}`}>
      <Logo />
      <h3 className={css.myBoardsTitle}>My boards</h3>
      <CreateNewBoard />
      <NeedHelp />
      <LogOut />
    </div>
  );
};

export default SideBar;
