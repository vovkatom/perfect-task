import { useState } from 'react';
import css from '../BackgroundSet/BackgroundSet.module.css';
import imagesBG from './bg.json';

const BackgroundSet = ({register}) => {
  const [selectedBg, setSelectedBg] = useState(null);

  const handleBgClick = (selectedBg) => {
    setSelectedBg(selectedBg);
  };

  const bgImages = imagesBG.map(({ src, name }) => (
    <li
      key={name}
      className={css.bgItem}
      onClick={() => handleBgClick({ name })}
      {...register('bgImage')}
    >
      <img className={css.image} src={src} alt={name} />
    </li>
  ));
  return <ul className={css.list}>{bgImages}</ul>;
};

export default BackgroundSet;
