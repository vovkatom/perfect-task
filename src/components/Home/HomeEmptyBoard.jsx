import css from './HomeEmptyBoard.module.css';

const HomeEmptyBoard = () => {
  return (
    <p>
      Before starting your project, it is essential
      <button type="button" className={css.buttonCreate} onClick={'openModal'}>
        <span>to create a board </span>
      </button>
      to visualize and track all the necessary tasks and milestones. This board
      serves as a powerful tool to organize the workflow and ensure effective
      collaboration among team members.
    </p>
  );
};

export default HomeEmptyBoard;
