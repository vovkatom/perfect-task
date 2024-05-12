import Icon from '../../Icon/Icon';

import css from './ThemeHeaderButton.module.css';

const ThemeHeaderButton = ({ onClick }) => {
  return (
    <>
      <button className={css.themeBtn} type="button" onClick={onClick}>
        Theme
        <Icon
          id="chevron-down"
          className={css.themeIcon}
          width="10"
          height="7"
        />
      </button>
    </>
  );
};

export default ThemeHeaderButton;
