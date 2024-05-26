import { useEffect } from 'react';
import CommonPopUpSmall from '../../CommonPopUpSmall/CommonPopUpSmall';
import { onChangeTheme } from '../../../js/theme-changer';

const ThemeModal = ({ onClick }) => {
  useEffect(() => {
    onChangeTheme();
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
