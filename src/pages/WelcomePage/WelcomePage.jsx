import css from './WelcomePage.module.css';

const WelcomePage = () => {
  return (
    <div className={css.container}>
      <h1>Task Pro</h1>
      <p>
        Supercharge your productivity and take control of your tasks with Task
        Pro - Don't wait, start achieving your goals now!
      </p>
      <button type="button">Registration</button>
      <button type="button">Log In</button>
    </div>
  );
};

export default WelcomePage;
