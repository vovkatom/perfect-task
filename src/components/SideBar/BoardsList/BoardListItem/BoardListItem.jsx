import css from './BoardListItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteBoard } from '../../../../redux/userBoard/userBoard-operations';
import Icon from '../../../Icon/Icon';
import CommonModal from '../../../CommonModal/CommonModal';
import UpdateBoardForm from '../../../UpdateBoardForm/UpdateBoardForm';

const BoardListItem = ({
  id,
  title,
  icon,
  handleBoardClick,
  handleOpenModal,
  handleCloseModal,
  isModalOpen,
}) => {
  const dispatch = useDispatch();

  const board = { id, title };
  console.log('first', board);
  return (
    <div className={css.buttonBox}>
      <button
        className={css.mainButton}
        onClick={() => handleBoardClick(board)}
      >
        <Icon className={css.icon} id={icon} width="18" height="18" />
        {title}
      </button>
      <div className={css.helperButton}>
        <button
          type="button"
          className={css.updateButton}
          onClick={handleOpenModal}
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
          onClick={() => dispatch(deleteBoard(id))}
        >
          <Icon
            className={css.icon}
            id="icon-trash-04"
            width="16"
            height="16"
          />
        </button>
      </div>
      {isModalOpen && (
        <CommonModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title="Edit board"
        >
          <UpdateBoardForm
            closeModal={handleCloseModal}
            id={id}
            title={title}
          />
        </CommonModal>
      )}
    </div>
  );
};

export default BoardListItem;
