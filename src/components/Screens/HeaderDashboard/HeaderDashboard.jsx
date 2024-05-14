import css from './HeaderDashboard.module.css';

const HeaderDashboard = ({ currentBoard }) => {
  console.log(currentBoard.title);
  return (
    <>
      <p className={css.boardTitle}>{currentBoard.title}</p>
    </>
  );
};

export default HeaderDashboard;
