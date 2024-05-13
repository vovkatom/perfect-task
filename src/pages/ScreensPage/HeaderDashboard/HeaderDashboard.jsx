
import css from '../../ScreensPage/HeaderDashboard';


const HeaderDashboard = ({ boardName }) => {
  return (
    <div className={css.headerDashSection}>
      <h3 className={css.titleDashboard}>{boardName}</h3>
    </div>

  );
};

export default HeaderDashboard;
