import { useState } from 'react';

import css from './IconsSelector.module.css';
import Icon from '../../../../Icon/Icon';

const IconsSelector = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconClick = (selectedIcon) => {
    setSelectedIcon(selectedIcon);
  };

  return (
    <ul className={css.iconSet}>
      <li
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
      </li>
    </ul>
  );
};

export default IconsSelector;
