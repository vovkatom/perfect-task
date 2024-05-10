import { useState } from 'react';
import css from '../BackgroundSet/BackgroundSet.module.css';
//import { requestBgImages } from '../../../../../api/boards-api';
//import imagesBG from './bg.json';

const BackgroundSet = ({ register, bgImages }) => {
  const [selectedBg, setSelectedBg] = useState(null);
  //const [bgImages, setBgImages] = useState('');

  console.log(bgImages);

  const handleBgClick = (selectedBg) => {
    setSelectedBg(selectedBg);
  };

  const imagesBG = Object.entries(bgImages).map(([key, value], idx) => (
    <li
      key={idx}
      className={css.bgItem}
      onClick={() => handleBgClick(value)}
      {...register('bgImage')}
    >
      <img
        className={selectedBg === key ? css.imageSelected : css.image}
        src={value}
        alt={value}
      />
    </li>
  ));
  return <ul className={css.list}>{imagesBG}</ul>;
};

export default BackgroundSet;
