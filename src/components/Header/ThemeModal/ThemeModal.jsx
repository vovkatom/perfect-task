import { useEffect } from 'react';
import CommonPopUpSmall from '../../CommonPopUpSmall/CommonPopUpSmall';

const ThemeModal = ({ onClick }) => {
  useEffect(() => {
    const list = document.querySelector('.themeChangeList');

    list.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(e.currentTarget);
    });

    // const items = document.querySelectorAll('.themeChangeItem');
    // console.dir(items[1]);
  }, []);

  return (
    <CommonPopUpSmall
      onClick={onClick}
      listClassName="themeChangeList"
      itemClassName="themeChangeItem"
    >
      {['Light', 'Dark', 'Violet']}
    </CommonPopUpSmall>
  );
};

export default ThemeModal;
