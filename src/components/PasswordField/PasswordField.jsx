import clsx from 'clsx';
import { ReactComponent as Eye } from './eye.svg';
import css from './PasswordField.module.css';
import { useState } from 'react';

const PasswordField = ({ placeholder, register, className }) => {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <>
      <div className={clsx(className, css.container)}>
        <input
          type={hidePassword ? 'password' : 'text'}
          {...register('password')}
          placeholder={placeholder}
        />
        <Eye
          className={css.icon}
          onClick={() => setHidePassword(!hidePassword)}
        />
      </div>
    </>
  );
};

export default PasswordField;
