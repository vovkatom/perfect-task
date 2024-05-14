import css from './Button.module.css';
import Icon from '../../components/Icon/Icon';

const Button = ({ onClick, title, type }) => {
  return (
    <button
      type={type}
      className={type === 'button' ? css.button : css.buttonSubmit}
      onClick={onClick}
    >
      <Icon className={css.icon} id="icon-plus" width="28" height="28" />
      <p className={css.title}>{title}</p>
    </button>
  );
};

export default Button;
