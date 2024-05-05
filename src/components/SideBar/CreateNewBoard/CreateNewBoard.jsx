import { useState } from 'react';
import Modal from '../../shared/Modal/Modal';
import css from '../CreateNewBoard/CreateNewBoard.module.css';
import ModalContent from './ModalContent/ModalContent';

const CreateNewBoard = () => {
  const [modalActive, setModalActive] = useState(false);

  const changeModalState = () => {
    setModalActive((modalActive) => !modalActive);
  };
  return (
    <>
      <button className={css.button} type="button" onClick={changeModalState}>
        <p className={css.buttonTitle}>Create a new board</p>
        <div className={css.buttonIcon}>
          <p className={css.buttonPlus}>+</p>
        </div>
      </button>
      {modalActive && (
        <Modal active={modalActive} setActive={setModalActive}>
          <ModalContent />
        </Modal>
      )}
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
