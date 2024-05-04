import { useState } from 'react';
import { useParams } from 'react-router-dom';
// import Container from '../../components/Container/Container';
import LoginForm from '../../components/LoginForm/LoginForm';
import css from './AuthPage.module.css';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import clsx from 'clsx';

const AuthPage = () => {
  const { id } = useParams();
  const [register, setRegister] = useState(id === 'register');
  const inputClassName = clsx(css.authInput, css.authControl);
  const buttonClassName = clsx(css.authButton, css.authControl);
  const Form = register ? RegisterForm : LoginForm;
  return (
    <div className={css.background}>
      <div className={css.mainBox}>
        <div className={css.authMenu}>
          <button
            className={clsx(
              css.authMenuButton,
              register && css.selectedAuthMenuButton
            )}
            onClick={() => {
              setRegister(true);
            }}
          >
            Registration
          </button>
          <button
            className={clsx(
              css.authMenuButton,
              !register && css.selectedAuthMenuButton
            )}
            onClick={() => {
              setRegister(false);
            }}
          >
            Log In
          </button>
        </div>
        <Form
          inputClassName={inputClassName}
          buttonClassName={buttonClassName}
          formClassName={css.authForm}
          errorClassName={css.errorText}
        />
      </div>
    </div>
  );
};

export default AuthPage;
