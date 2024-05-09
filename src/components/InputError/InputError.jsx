import clsx from 'clsx';
import css from './InputError.module.css';

const InputError = ({ message }) => {
  return <p className={clsx(message ? css.text : css.hide)}>{message}</p>;
};

export default InputError;
