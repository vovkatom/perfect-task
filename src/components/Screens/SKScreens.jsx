import css from './SKScreens.module.css';
import { useSelector } from 'react-redux';
import { selectCurrentBoard } from '../../redux/userBoard/userBoard-selectors';
import HeaderDashboard from './HeaderDashboard/HeaderDashboard';
import ScreensBackground from './ScreensBackground/ScreensBackground';
import AddAnotherColumn from './AddAnotherColumn/AddAnotherColumn';
import CommonColumn from './CommonColumn/CommonColumn';

const SKScreens = () => {
  const currentBoard = useSelector(selectCurrentBoard);

  return (
    <>
      <div className={css.screenPageContainer}>
        <ScreensBackground>
          <HeaderDashboard boardTitle={currentBoard.title} />
          <div className={css.screensContentBox}>
            <CommonColumn />
            <AddAnotherColumn />
          </div>
        </ScreensBackground>
      </div>
    </>
  );
};

export default SKScreens;
