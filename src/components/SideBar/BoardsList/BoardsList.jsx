import css from './BoardsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoards } from '../../../redux/userBoard/userBoard-selectors';
import Icon from '../../Icon/Icon';
import { deleteBoard } from '../../../redux/userBoard/userBoard-operations';
import { updateBoardById } from '../../../redux/userBoard/userBoard-operations';

const BoardsList = () => {
  const boards = useSelector(selectBoards);

  const boardsList = boards.map(({ title, icon, _id }) => {
    return (
      <li key={title} className={css.boardContainer}>
        <div className={css.box1}>
          <Icon className={css.icon} id={icon} width="18" height="18" />
          <p>{title}</p>
        </div>
        <div>
          <button
            type="button"
            className={css.updateButton}
            onClick={() => dispatch(updateBoardById(_id))}
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
      </li>
    );
  });

  const dispatch = useDispatch();

  return <ul>{boardsList}</ul>;
};

export default BoardsList;
