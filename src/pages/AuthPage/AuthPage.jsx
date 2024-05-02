import Container from '../../components/Container/Container';
import LoginForm from '../../components/LoginForm/LoginForm';
import css from './AuthPage.module.css';

const AuthPage = () => {
  return (
    <div className={css.background}>
      <Container className="auth-page">
        <div className={css.mainBox}>
          <button className={css.registrationBtn} type="button">
            Registration
          </button>
          <button className={css.loginBtn} type="button">
            Log In
          </button>
        </div>
        <LoginForm />
      </Container>
    </div>
  );
};

export default AuthPage;
