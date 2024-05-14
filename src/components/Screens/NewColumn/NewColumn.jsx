import css from './NewColumn.module.css';
import Icon from '../../Icon/Icon';
//import { useDispatch } from 'react-redux';

const NewColumn = ({ activeBoard }) => {
  //const dispatch = useDispatch();
  return (
    <div className={css.boardContainer}>
      <p>New column</p>
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
    </div>
  );
};

export default NewColumn;
