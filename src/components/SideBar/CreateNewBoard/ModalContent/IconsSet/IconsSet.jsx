import css from '../IconsSet/IconsSet.module.css';
import Icon from '../../../../Icon/Icon';

const IconsSet = () => {
  return (
    <ul className={css.iconSet}>
      <li className={css.iconContainer}>
        <Icon className={css.icon} id="icon-Project" width="18" height="18" />
      </li>
      <li className={css.iconContainer}>
        <Icon className={css.icon} id="icon-star-04" width="18" height="18" />
      </li>
      <li className={css.iconContainer}>
        <Icon
          className={css.icon}
          id="icon-loading-03"
          width="18"
          height="18"
        />
      </li>
      <li className={css.iconContainer}>
        <Icon
          className={css.icon}
          id="icon-puzzle-piece-02"
          width="18"
          height="18"
        />
      </li>
      <li className={css.iconContainer}>
        <Icon className={css.icon} id="icon-container" width="18" height="18" />
      </li>
      <li className={css.iconContainer}>
        <Icon
          className={css.icon}
          id="icon-lightning-02"
          width="18"
          height="18"
        />
      </li>
      <li className={css.iconContainer}>
        <Icon className={css.icon} id="icon-colors" width="18" height="18" />
      </li>
      <li className={css.iconContainer}>
        <Icon
          className={css.icon}
          id="icon-hexagon-01"
          width="18"
          height="18"
        />
      </li>
    </ul>
  );
};

export default IconsSet;
