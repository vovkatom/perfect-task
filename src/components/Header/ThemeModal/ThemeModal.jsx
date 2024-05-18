import { useEffect, useState } from 'react';
import CommonPopUpSmall from '../../CommonPopUpSmall/CommonPopUpSmall';
import { onChangeTheme } from '../../../js/theme-changer';
import css from './ThemeModal.module.css'; 

const ThemeModal = ({ onClick }) => {
  const [selectedTheme, setSelectedTheme] = useState(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setSelectedTheme(storedTheme);
      onChangeTheme(storedTheme);
    } else {
      setSelectedTheme('Light');
      onChangeTheme('Light');
      localStorage.setItem('theme', 'Light');
    }
  }, []);

  const handleThemeChange = theme => {
    setSelectedTheme(theme);
    onChangeTheme(theme);
    localStorage.setItem('theme', theme);
  };

  return (
    <CommonPopUpSmall
      onClick={onClick}
      listClassName='themeChangeList'
      itemClassName='themeChangeItem'
    >
      {['Light', 'Dark', 'Violet'].map((theme, index) => (
        <div
          key={index}
          className={`themeChangeItem ${selectedTheme === theme ? css.currentThema : ''}`} 
          onClick={() => handleThemeChange(theme)}
        >
          {theme}
        </div>
      ))}
    </CommonPopUpSmall>
  );
};

export default ThemeModal;
