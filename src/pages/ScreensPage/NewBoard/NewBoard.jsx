//import icons
import css from './NewBoard.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
//import redux

import min1x from '../../../imgs/min/min1x.jpg';

const NewBoard = ({ openModal }) => {
  const [icons, setIcons] = useState('project');
  const [background, setBackground] = useState('no-background');
  const [title, setTitle] = useState(null);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const getTitle = (event) => {
    setTitle(event.target.value);
  };

  const closeModal = (event) => {
    openModal();
  };

  const getIcon = (event) => {
    setIcons(event.currentTarget.dataset.source);
    console.log(icons);
  };

  const getBack = (event) => {
    console.log(event.currentTarget.dataset.source);
    setBackground(event.currentTarget.dataset.source);
  };

  const newBoardObject = {
    title: title,
    icon: icons,
    background: background,
  };

  const newBoardFunc = () => {
    dispatch(addBoard(newBoardObject));
    closeModal();
    navigate(`${title}`);
  };

  return (
    <div className={css.divCard}>
      <h2 className={css.textNew}>New board</h2>
      <input
        className={css.titleInput}
        type="text"
        placeholder="Title"
        onChange={getTitle}
      />
      <h3 className={css.textIcons}>Icons</h3>
      <ul className={css.listIcons}>
        <li>
          <input
            type="radio"
            data-source="some"
            name="buttons"
            className={css.inputLi}
            onClick={getIcon}
          />
          <Icon
            id={'some'}
            className={icons === 'some' ? css.Icons : css.serIcons}
          ></Icon>
        </li>
      </ul>

      <h3 className={css.textBackground}>Background</h3>
      <ul className={css.listColorIcons}>
        <li
          className={
            background === 'background' ? css.listItemActive : css.listItem
          }
        >
          <input
            type="radio"
            name="backs"
            data-source="min1x"
            className={css.inputBack}
            onClick={getBack}
          />
          <img src={min1x} alt="noback" className={css.img_min1x} />
        </li>
      </ul>

      <button className={css.mainButton} onClick={newBoardFunc}>
        <div className={css.plusBtnZaglushka}>
          <Icon id={'plus'} className={css.plusIcon}></Icon>
        </div>
        Create
      </button>
    </div>
  );
};

export default NewBoard;
