import css from './CommonColumn.module.css';
import CreateNewBoardButton from './CreateNewCardButton/CreateNewCardButton';

const CommonColumn = () => {
  return (
    <div className={css.columnMainBox}>
      <CreateNewBoardButton />
    </div>
  );
};

export default CommonColumn;
