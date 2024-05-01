import Container from '../../components/Container/Container';
import css from './WelcomePage.module.css';

const WelcomePage = () => {
  return (
    <div className={css.background}>
      <Container className="welcome-page">
        <div className={css.mainBox}>
          <div className={css.logoBox}>
            <img
              src=""
              className={css.logoAvatar}
              alt="Task Pro avatar"
              width="124"
              height="124"
            />
            <h1 className={css.header}>Task Pro</h1>
          </div>
          <p className={css.paragraph}>
            Supercharge your productivity and take control of your tasks with
            Task Pro - Don&apos;t wait, start achieving your goals now!
          </p>
          <button className={css.registrationBtn} type="button">
            Registration
          </button>
          <button className={css.loginBtn} type="button">
            Log In
          </button>
        </div>
      </Container>
    </div>
  );
};

export default WelcomePage;
