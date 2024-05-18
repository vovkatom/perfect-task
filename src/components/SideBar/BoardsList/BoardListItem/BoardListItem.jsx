import css from './BoardListItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteBoard } from '../../../../redux/userBoard/userBoard-operations';
import Icon from '../../../Icon/Icon';

const BoardListItem = ({ id, title, icon, handleBoardClick }) => {
  const dispatch = useDispatch();

  const board = { id, title };
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
};

export default BoardListItem;
