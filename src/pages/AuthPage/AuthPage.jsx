import { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
// import Container from '../../components/Container/Container';
import LoginForm from '../../components/LoginForm/LoginForm';
import css from './AuthPage.module.css';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import {
  selectAuthLoading,
  selectAuthError,
  selectIsLogin,
} from '../../redux/auth/auth-selectors';

import Loader from '../../components/Loader/Loader';

const AuthPage = () => {
  const isLoading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);
  const isLogin = useSelector(selectIsLogin);

  const { id } = useParams();
  const [register, setRegister] = useState(id === 'register');
  const inputClassName = clsx(css.authInput, css.authControl);
  const buttonClassName = clsx(css.authButton, css.authControl);
  const Form = register ? RegisterForm : LoginForm;

  if (isLogin) {
    return <Navigate to="/home" />;
  }

  return isLoading ? (
    <Loader />
  ) : (
    <>
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
          />
        </div>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};

export default AuthPage;
