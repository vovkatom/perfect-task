//import { useState } from 'react';

import css from './NewColumn.module.css';
import Icon from '../../Icon/Icon';
// import Button from '../../../shared/Button/Button';
// import CommonModal from '../../CommonModal/CommonModal';
//import NewCardForm from '../NewCardForm/NewCardForm';
import CreateNewCardButton from './CreateNewCardButton/CreateNewCardButton';
//import { useDispatch } from 'react-redux';

const NewColumn = ({ columns }) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  if (!columns) {
    return null; // Повертаємо null, якщо activeBoard або activeBoard.columns не існує
  }

  // const handleOpenModal = () => {
  //   setIsModalOpen(!isModalOpen);
  // };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };
  //const dispatch = useDispatch();

  const items = columns.map(({ title, _id }) => {
    return (
      <li key={_id} className={css.item}>
        <p>{title}</p>
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
            //onClick={() => dispatch(deleteColumn(_id))}
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
      </li>
    );
  });

  return (
    <>
      <ul className={css.boardContainer}>{items}</ul>
      <CreateNewCardButton />
    </>
  );
};

export default NewColumn;
