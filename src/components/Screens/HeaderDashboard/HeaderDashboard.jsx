import Icon from '../../Icon/Icon';
import css from './HeaderDashboard.module.css';

const HeaderDashboard = ({ boardTitle }) => {
  return (
    <div className={css.headerDashboardContainer}>
      {boardTitle && <h2 className={css.boardTitle}>{boardTitle}</h2>}
      <p className={css.filterTitle}>
        <Icon
          id="icon-filter"
          width="16"
          height="16"
          className={css.filterIcon}
        />
        Filters
      </p>
    </div>
  );
};

export default HeaderDashboard;
