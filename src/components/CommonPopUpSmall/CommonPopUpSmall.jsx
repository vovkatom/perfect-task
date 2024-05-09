import css from './CommonPopUpSmall.module.css';
import { nanoid } from 'nanoid';

const CommonPopUpSmall = ({ children, onClick }) => {
  return (
    <div className={css.background}>
      <div className={css.modalPageBox}>
        <ul>
          {children.map((item, index) => (
            <li key={index} id={nanoid()}>
              <button onClick={() => onClick(item)}>{item}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommonPopUpSmall;

// const CommonPopUpSmall = ({ items, onClose }) => {
//   return (
//     <div className={css.background}>
//       <div className={css.modalPageBox}>
//         <ul>
//           {items.map((item, index) => (
//             <li key={index} id={nanoid()}>
//               <button onClick={onClose}>{item}</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };
