import { useState } from 'react';
import css from '../CreateNewBoard/CreateNewBoard.module.css';
import CreateBoardForm from './CreateBoardForm/CreateBoardForm';
import CommonModal from '../../CommonModal/CommonModal';
import Icon from '../../Icon/Icon';

const CreateNewBoard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button className={css.button} type="button" onClick={handleOpenModal}>
        <p className={css.buttonTitle}>Create a new board</p>
        <div className={css.buttonPlus}>
          {/* <p className={css.buttonPlus}>+</p> */}
          <Icon
            id="icon-plus"
            className={css.iconPlus}
            width="20"
            height="20"
          />
        </div>
      </button>
      <CommonModal isOpen={isModalOpen} onClose={handleCloseModal}>
        <CreateBoardForm closeModal={handleCloseModal} />
      </CommonModal>
    </>
  );
};

//EXAMPLE of calling Backend with Authorization token.

// const createBoard = async (board) => {
//   const result = await fetch(
//     'https://perfect-task-back.onrender.com/api/boards/',
//     {
//       method: 'POST',
//       body: JSON.stringify(board),
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${getToken()}`,
//       },
//     }
//   );
//   return await result.json();
// };

export default CreateNewBoard;
