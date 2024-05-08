import sprite from '../../assets/img/icon.svg';

const Icon = ({ id, className, width, height }) => {
  return (
    <>
      <svg className={className} width={width} height={height}>
        <use href={`${sprite}#${id}`}></use>
      </svg>
    </>
  );
};

export default Icon;
