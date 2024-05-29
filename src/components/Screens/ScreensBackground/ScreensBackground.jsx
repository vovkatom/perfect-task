import { useEffect, useState, useRef } from 'react';
import css from './ScreensBackground.module.css';
import { requestBoardById } from '../../../api/boards-api';
import { useSelector } from 'react-redux';
import { selectCurrentBoard } from '../../../redux/userBoard/userBoard-selectors';
import Loader from '../../Loader/Loader';

const ScreensBackground = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const currentBoard = useSelector(selectCurrentBoard);
  const backgroundRef = useRef(null);

  useEffect(() => {
    const fetchCurrentBoardById = async () => {
      if (!currentBoard) {
        return;
      }

      const { id } = currentBoard;

      try {
        setIsLoading(true);
        const { data } = await requestBoardById(id);

        if (backgroundRef.current) {
          const setScreenBackground = (property, url) => {
            backgroundRef.current.style.setProperty(property, `url(${url})`);
          };

          const backgroundProperties = [
            ['--bg-mobile-1x', data.backgroundURL.mobile_1x],
            ['--bg-mobile-2x', data.backgroundURL.mobile_2x],
            ['--bg-tablet-1x', data.backgroundURL.tablet_1x],
            ['--bg-tablet-2x', data.backgroundURL.tablet_2x],
            ['--bg-desktop-1x', data.backgroundURL.desktop_1x],
            ['--bg-desktop-2x', data.backgroundURL.desktop_2x],
          ];

          backgroundProperties.forEach(([property, url]) =>
            setScreenBackground(property, url)
          );
        }
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
    <div ref={backgroundRef} className={css.screenBackground}>
      <div className={css.screenMainContainer}>
        {isLoading && <Loader centered />}
        {error && <p>{error}</p>}
        {children}
      </div>
    </div>
  );
};

export default ScreensBackground;
