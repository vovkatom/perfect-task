import { useEffect } from 'react';
import css from './ScreensBackground.module.css';
import { requestBoardById } from '../../../api/boards-api';
import { useState } from 'react';
import { selectCurrentBoard } from '../../../redux/userBoard/userBoard-selectors';
import Loader from '../../Loader/Loader';
import { useSelector } from 'react-redux';

const ScreensBackground = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const currentBoard = useSelector(selectCurrentBoard);

  useEffect(() => {
    const fetchCurrentBoardById = async () => {
      if (!currentBoard) {
        return;
      }

      const { id } = currentBoard;

      try {
        setIsLoading(true);
        const { data } = await requestBoardById(id);

        console.log(data);

        const root = document.documentElement;
        root.style.setProperty(
          '--bg-mobile-1x',
          `url(${data.backgroundURL.mobile_1x})`
        );
        root.style.setProperty(
          '--bg-mobile-2x',
          `url(${data.backgroundURL.mobile_2x})`
        );
        root.style.setProperty(
          '--bg-tablet-1x',
          `url(${data.backgroundURL.tablet_1x})`
        );
        root.style.setProperty(
          '--bg-tablet-2x',
          `url(${data.backgroundURL.tablet_2x})`
        );
        root.style.setProperty(
          '--bg-desktop-1x',
          `url(${data.backgroundURL.desktop_1x})`
        );
        root.style.setProperty(
          '--bg-desktop-2x',
          `url(${data.backgroundURL.desktop_2x})`
        );
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
        setError(null);
      }
    };
    fetchCurrentBoardById();
  }, [currentBoard]);

  return (
    <>
      <div className={css.background}>
        <div className={`container ${css.screenMainContainer}`}>
          {isLoading && <Loader centered />}
          {error && <p>{error}</p>}
          {children}
        </div>
      </div>
    </>
  );
};

export default ScreensBackground;
