import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import css from './AuthPage.module.css';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import {
  selectAuthLoading,
  selectAuthError,
} from '../../redux/auth/auth-selectors';

import Loader from '../../components/Loader/Loader';

const AuthPage = () => {
  const isLoading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);

  const { id } = useParams();
  const [register, setRegister] = useState(id === 'register');
  const inputClassName = clsx(css.authInput, css.authControl);
  const buttonClassName = clsx(css.authButton, css.authControl);
  const Form = register ? RegisterForm : LoginForm;

  return isLoading ? (
    <Loader />
  ) : (
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
          </div>
          <Form
            inputClassName={inputClassName}
            buttonClassName={buttonClassName}
            formClassName={css.authForm}
          />
        </div>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};

export default AuthPage;
