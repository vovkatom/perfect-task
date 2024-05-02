import { useState } from 'react';
import { useParams } from 'react-router-dom';
// import Container from '../../components/Container/Container';
import LoginForm from '../../components/LoginForm/LoginForm';
import css from './AuthPage.module.css';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import clsx from 'clsx';

const AuthPage = () => {
  const { id } = useParams();
  const [register, setRegister] = useState(id === 'register');
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
        {register ? <RegisterForm /> : <LoginForm />}
      </div>
    </div>
  );
};

export default AuthPage;
