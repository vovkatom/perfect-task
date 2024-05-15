// import { useState } from 'react';

import css from './BoardsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoards } from '../../../redux/userBoard/userBoard-selectors';
import Icon from '../../Icon/Icon';
import { deleteBoard } from '../../../redux/userBoard/userBoard-operations';
import { selectBoard } from '../../../redux/userBoard/userBoard-slice';
//import { NavLink } from 'react-router-dom';
// import { updateBoardById } from '../../../redux/userBoard/userBoard-operations';
// import CommonModal from '../../CommonModal/CommonModal';
// import UpdateBoardForm from './UpdateBoardForm/UpdateBoardForm';

const BoardsList = () => {
  const boards = useSelector(selectBoards);
  const dispatch = useDispatch();

  const handleBoardClick = (board) => {
    dispatch(selectBoard(board)); // Dispatch action with the board object
  };
  //const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleOpenModal = () => {
  //   setIsModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };

  const boardsList = boards.map(({ title, icon, _id }) => {
    const board = { id: _id, title: title };
    return (
      <div key={title} className={css.buttonBox}>
        <button
          className={css.mainButton}
          to={`home/${_id}`}
          onClick={() => handleBoardClick(board)}
        >
          <Icon className={css.icon} id={icon} width="18" height="18" />
          <p>{title}</p>
        </button>
        <div>
          <button
            type="button"
            className={css.updateButton}
            // onClick={handleOpenModal}
            // onClick={() => dispatch(updateBoardById(_id))}
          >
            <Icon
              className={css.icon}
              id="icon-pencil-01"
              width="16"
              height="16"
            />
          </button>
          <button
            type="button"
            className={css.deleteButton}
            onClick={() => dispatch(deleteBoard(_id))}
          >
            <Icon
              className={css.icon}
              id="icon-trash-04"
              width="16"
              height="16"
            />
          </button>
        </div>
        {/* {isModalOpen ? (
          <CommonModal isOpen={isModalOpen} onClose={handleCloseModal}>
            <UpdateBoardForm
              closeModal={handleCloseModal}
              title={title}
              icon={icon}
              id={_id}
            />
          </CommonModal>
        ) : (
          ''
        )} */}
      </div>
    );
  });

  return (
    <div className={css.buttonsMainContainer}>
      <ul className={css.boardButtonsList}>{boardsList}</ul>
    </div>
  );
};

export default BoardsList;
