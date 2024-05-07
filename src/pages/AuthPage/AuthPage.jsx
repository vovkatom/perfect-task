import { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
// import Container from '../../components/Container/Container';
import LoginForm from '../../components/LoginForm/LoginForm';
import css from './AuthPage.module.css';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import clsx from 'clsx';

import { signup } from '../../redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectAuthLoading,
  selectAuthError,
  selectIsLogin,
} from '../../redux/auth/auth-selectors';

const AuthPage = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);
  const IsLogin = useSelector(selectIsLogin);

  const dispatch = useDispatch();

  const handleSignup = (data) => {
    dispatch(signup(data));
  };

  if (IsLogin) {
    return <Navigate to="/home" />;
  }

  const { id } = useParams();
  const [register, setRegister] = useState(id === 'register');
  const inputClassName = clsx(css.authInput, css.authControl);
  const buttonClassName = clsx(css.authButton, css.authControl);
  const Form = register ? RegisterForm : LoginForm;

  return (
    <>
      {authLoading && <p>Loading...</p>}
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
            onSubmit={handleSignup}
            inputClassName={inputClassName}
            buttonClassName={buttonClassName}
            formClassName={css.authForm}
          />
        </div>
      </div>
      {authError && <p style={{ color: 'red' }}>{authError}</p>}
    </>
  );
};

export default AuthPage;
