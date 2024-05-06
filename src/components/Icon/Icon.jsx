import sprite from '../../assets/img/icon.svg';

const Icon = ({ id, className }) => {
  const route = sprite + '#' + id;
  return (
    <>
      <svg className={className}>
        <use href={route.toString()}></use>
      </svg>
    </>
  );
};

export default Icon;
