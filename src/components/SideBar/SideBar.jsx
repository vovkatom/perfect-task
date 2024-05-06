// import css from '../SideBar/SideBar.module.css';
import css from './SideBar.module.css';
import Logo from './Logo/Logo';
import CreateNewBoard from './CreateNewBoard/CreateNewBoard';
import NeedHelp from './NeedHelp/NeedHelp';

const SideBar = () => {
  return (
    <div className={css.container}>
      <Logo />
      <h3 className={css.myBoardsTitle}>My boards</h3>
      <CreateNewBoard />
      <NeedHelp />
    </div>
  );
};

export default SideBar;
