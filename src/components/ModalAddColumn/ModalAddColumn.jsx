import css from './ModalAddColumn.module.css';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/userBoard/userBoard-operations';
import { Icon } from '../Icon/Icon';
import CommonButton from '../CommonButton/CommonButton';

const ModalAddColumn = ({ closeModal }) => {
  //  const { _id: shownBoardId } = useShownBoard();react-redux

  const dispatch = useDispatch();
  const handlerTitleColumn = (evt) => {
    evt.preventDefault();
    const inputValue = evt.target.title.value.trim();
    if (inputValue !== '') {
      const newColumn = {
        title: inputValue,
        // board: shownBoardId,
      };
      dispatch(addColumn(newColumn));

      closeModal();
      return;
    }

    return;
  };
  return (
    <div className={css.container}>
      <p className={css.addColumn_title}>Add column</p>
      <form onSubmit={handlerTitleColumn}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className={css.addColumn_input}
          autoFocus
        />
        <CommonButton type="submit" className={css.addColumn_btn}>
          <span className={css.iconWrap}>
            <Icon id={'icon-plus'} className={css.icon} />
          </span>
          Add
        </CommonButton>
      </form>
    </div>
  );
};

export default ModalAddColumn;
