import { useState } from 'react';

import css from './IconsSelector.module.css';
import Icon from '../../../../Icon/Icon';

const IconsSelector = ({ register }) => {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconClick = (iconId) => {
    setSelectedIcon(iconId);
  };

  const iconsList = [
    { iconId: 'icon-Project' },
    { iconId: 'icon-star-04' },
    { iconId: 'icon-loading-03' },
    { iconId: 'icon-puzzle-piece-02' },
    { iconId: 'icon-container' },
    { iconId: 'icon-lightning-02' },
    { iconId: 'icon-colors' },
    { iconId: 'icon-hexagon-01' },
  ];

  const icons = iconsList.map(({ iconId }) => (
    <li
      key={iconId}
      className={css.iconContainer}
      onClick={() => handleIconClick({ iconId })}
      {...register('icon')}
    >
      <Icon
        className={selectedIcon === iconId ? css.iconSelected : css.icon}
        id={iconId}
        width="18"
        height="18"
      />
    </li>
  ));

  return (
    <>
      <ul className={css.iconSet}>{icons}</ul>
    </>
  );
};

export default IconsSelector;

{
  /* <li
        className={css.iconContainer}
        onClick={() => handleIconClick('icon-Project')}
      >
        <Icon
          className={
            selectedIcon === 'icon-Project' ? css.iconSelected : css.icon
          }
          id="icon-Project"
          width="18"
          height="18"
        />
      </li>
      <li
        className={css.iconContainer}
        onClick={() => handleIconClick('icon-star-04')}
      >
        <Icon
          className={
            selectedIcon === 'icon-star-04' ? css.iconSelected : css.icon
          }
          id="icon-star-04"
          width="18"
          height="18"
        />
      </li>
      <li
        className={css.iconContainer}
        onClick={() => handleIconClick('icon-loading-03')}
      >
        <Icon
          className={
            selectedIcon === 'icon-loading-03' ? css.iconSelected : css.icon
          }
          id="icon-loading-03"
          width="18"
          height="18"
        />
      </li>
      <li
        className={css.iconContainer}
        onClick={() => handleIconClick('icon-puzzle-piece-02')}
      >
        <Icon
          className={
            selectedIcon === 'icon-puzzle-piece-02'
              ? css.iconSelected
              : css.icon
          }
          id="icon-puzzle-piece-02"
          width="18"
          height="18"
        />
      </li>
      <li
        className={css.iconContainer}
        onClick={() => handleIconClick('icon-container')}
      >
        <Icon
          className={
            selectedIcon === 'icon-container' ? css.iconSelected : css.icon
          }
          id="icon-container"
          width="18"
          height="18"
        />
      </li>
      <li
        className={css.iconContainer}
        onClick={() => handleIconClick('icon-lightning-02')}
      >
        <Icon
          className={
            selectedIcon === 'icon-lightning-02' ? css.iconSelected : css.icon
          }
          id="icon-lightning-02"
          width="18"
          height="18"
        />
      </li>
      <li
        className={css.iconContainer}
        onClick={() => handleIconClick('icon-colors')}
      >
        <Icon
          className={
            selectedIcon === 'icon-colors' ? css.iconSelected : css.icon
          }
          id="icon-colors"
          width="18"
          height="18"
        />
      </li>
      <li
        className={css.iconContainer}
        onClick={() => handleIconClick('icon-hexagon-01')}
      >
        <Icon
          className={
            selectedIcon === 'icon-hexagon-01' ? css.iconSelected : css.icon
          }
          id="icon-hexagon-01"
          width="18"
          height="18"
        />
      </li> */
}
