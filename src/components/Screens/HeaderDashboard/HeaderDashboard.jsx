import css from './HeaderDashboard.module.css';

const HeaderDashboard = ({ currentBoard }) => {
  return (
    <>
      <p className={css.boardTitle}>{currentBoard.title}</p>
    </>
  );
};

export default HeaderDashboard;
