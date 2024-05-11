import { useState } from 'react';
import css from '../BackgroundSet/BackgroundSet.module.css';
//import { requestBgImages } from '../../../../../api/boards-api';
//import imagesBG from './bg.json';

const BackgroundSet = ({ register, bgImages }) => {
  const [selectedBg, setSelectedBg] = useState(null);
  //const [bgImages, setBgImages] = useState('');

  console.log(Object.keys(bgImages));

  const handleBgClick = (selectedBg) => {
    setSelectedBg(selectedBg);
    console.log(selectedBg);
  };

  const imagesBG = Object.entries(bgImages).map(([key, value]) => (
    <li
      key={key}
      className={css.bgItem}
      onClick={() => handleBgClick(key)}
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

// const sortable = resources.map((item, index) => {
//   const filenameWithExtension = item.secure_url.substring(
//     item.secure_url.lastIndexOf('/') + 1
//   );

//   const filenameWithoutExtension = filenameWithExtension
//     .split('.')
//     .slice(0, -1)
//     .join('.');
//   return [filenameWithoutExtension, item.secure_url];
// });

// sortable.sort(([filename1], [filename2]) => {
//   return filename1.localeCompare(filename2);
// });
