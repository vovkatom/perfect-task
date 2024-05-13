import css from './CommonPopUpSmall.module.css';
import { nanoid } from 'nanoid';

const CommonPopUpSmall = ({
  children,
  onClick,
  listClassName,
  itemClassName,
}) => {
  return (
    <div className={css.background}>
      <div className={css.popUpBox}>
        <ul className={`${css.themeList} ${listClassName}`}>
          {children?.map((item, index) => (
            <li key={index} id={nanoid()} className={itemClassName}>
              <button className={css.popUpBtn} onClick={() => onClick(item)}>
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
