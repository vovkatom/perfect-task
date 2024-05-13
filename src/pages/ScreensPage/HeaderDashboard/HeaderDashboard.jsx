const HeaderDashboard = ({ currentBoard }) => {
  //   console.log(board);
  //   const { title } = board;
  console.log(currentBoard.title);
  return (
    <>
      <h3>{currentBoard.title}</h3>
    </>
  );
};

export default HeaderDashboard;
