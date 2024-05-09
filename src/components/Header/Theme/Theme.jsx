import Icon from '../../Icon/Icon';
// import CommonPopUpSmall from '../../CommonPopUpSmall/CommonPopUpSmall';
import css from './Theme.module.css';
// import { useState } from 'react';

const Theme = () => {
  //   const [isPopUpOpen, setIsSidebarOpen] = useState(false);

  //   const togglePopUp = () => {
  //     setIsSidebarOpen(!isPopUpOpen);
  //   };
  return (
    <>
      <button className={css.themeBox} type="button">
        Theme
        <Icon
          id="chevron-down"
          className={css.themeIcon}
          width="10"
          height="7"
        />
      </button>
      {/* <CommonPopUpSmall onClick={togglePopUp} /> */}
    </>
  );
};

export default Theme;
