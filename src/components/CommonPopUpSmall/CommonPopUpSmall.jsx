import css from './CommonPopUpSmall.module.css';
import { nanoid } from 'nanoid';

const CommonPopUpSmall = ({
  children,
  onClick,
  listClassName,
  itemClassName,
}) => {
  const activeTheme = document.body.className;

  return (
    <div className={css.background}>
      <div className={css.popUpBox}>
        <ul className={`${css.themeList} ${listClassName}`}>
          {children?.map((item) => (
            <li key={nanoid()} className={itemClassName}>
              <button
                className={`${css.popUpBtn} ${
                  activeTheme === item.toLowerCase() ? css.activeButton : ''
                }`}
                onClick={() => onClick(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommonPopUpSmall;
