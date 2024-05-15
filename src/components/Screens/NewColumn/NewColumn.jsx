import css from './NewColumn.module.css';
import Icon from '../../Icon/Icon';
//import { useDispatch } from 'react-redux';

const NewColumn = ({ activeBoard }) => {
  if (!activeBoard || !activeBoard.columns) {
    return null; // Повертаємо null, якщо activeBoard або activeBoard.columns не існує
  }
  //const dispatch = useDispatch();
  //const { columns } = activeBoard;
  //console.log(columns);
  const items = activeBoard.columns.map(({ title }) => {
    return (
      <li key={title} className={css.item}>
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

  console.log(items);

  return <ul className={css.boardContainer}>{items}</ul>;
};

export default NewColumn;
