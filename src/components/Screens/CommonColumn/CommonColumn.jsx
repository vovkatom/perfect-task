import css from './CommonColumn.module.css';
import CreateNewBoardButton from './CreateNewCardButton/CreateNewCardButton';

const CommonColumn = () => {
  return (
    <div className={css.columnMainBox}>
      CommonColumn
      <CreateNewBoardButton />
    </div>
  );
};

export default CommonColumn;
