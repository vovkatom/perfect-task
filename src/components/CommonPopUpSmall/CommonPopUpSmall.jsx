import css from './CommonPopUpSmall.module.css';
import { nanoid } from 'nanoid';

const CommonPopUpSmall = ({ children, onClick }) => {
  return (
    <div className={css.background}>
      <div className={css.popUpBox}>
        <ul className={css.list}>
          {children?.map((item, index) => (
            <li key={index} id={nanoid()}>
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
