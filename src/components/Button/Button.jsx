import css from './Button.module.css';
import Icon from '../../components/Icon/Icon';

const Button = ({ onClick, title, type }) => {
  return (
    <button
      type={type}
      className={
        title === 'Add another column'
          ? css.buttonAddColumn
          : css.buttonAddCommon
      }
      onClick={onClick}
    >
      <div
        className={
          title === 'Add another column'
            ? css.columnPlusButton
            : css.commonPlusButton
        }
      >
        <Icon
          className={
            title === 'Add another column' ? css.columnIcon : css.commonIcon
          }
          id="icon-plus"
          width="14"
          height="14"
        />
      </div>
      <p
        className={
          title === 'Add another column' ? css.columnTitle : css.commonTitle
        }
      >
        {title}
      </p>
    </button>
  );
};

export default Button;
