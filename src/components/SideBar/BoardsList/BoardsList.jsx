// import { useState } from 'react';

import css from './BoardsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoards } from '../../../redux/userBoard/userBoard-selectors';
import { selectBoard } from '../../../redux/userBoard/userBoard-slice';
import BoardListItem from './BoardListItem/BoardListItem';

const BoardsList = () => {
  const boards = useSelector(selectBoards);
  const dispatch = useDispatch();

  const handleBoardClick = (board) => {
    dispatch(selectBoard(board));
  };
  //const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleOpenModal = () => {
  //   setIsModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <div className={css.buttonsMainContainer}>
      {Boolean(boards.length) && (
        <ul className={css.boardButtonsList}>
          {boards.map(({ title, icon, _id: id }) => (
            <BoardListItem
              key={title}
              id={id}
              title={title}
              icon={icon}
              handleBoardClick={handleBoardClick}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default BoardsList;
