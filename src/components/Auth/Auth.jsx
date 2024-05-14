import css from './Auth.module.css';
import clsx from 'clsx';
import { useState } from 'react';
import { useParams } from 'react-router';
import RegisterForm from './RegisterForm/RegisterForm';
import LoginForm from './LoginForm/LoginForm';
import { Link } from 'react-router-dom';
import GoogleButton from './GoogleButton/GoogleButton';

const Auth = () => {
  const { id } = useParams();
  const [register, setRegister] = useState(id === 'register');
  const inputClassName = clsx(css.authInput, css.authControl);
  const buttonClassName = clsx(css.authButton, css.authControl);
  const Form = register ? RegisterForm : LoginForm;

  return (
    <>
      <div className={css.background}>
        <div className={css.mainBox}>
          <div className={css.authMenu}>
            <Link to="/auth/register">
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
            </Link>
            <Link to="/auth/login">
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
            </Link>
            <GoogleButton />
          </div>
          <Form
            inputClassName={inputClassName}
            buttonClassName={buttonClassName}
            formClassName={css.authForm}
          />
        </div>
      </div>
    </>
  );
};

export default Auth;
