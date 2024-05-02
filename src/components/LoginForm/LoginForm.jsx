import css from './loginform.module.css';
// import { useDispatch } from 'react-redux';

// Компонент LoginForm відповідає за форму авторизації нового користувача
export const LoginForm = () => {
  //   const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    //   const form = event.currentTarget;
  };
  return (
    <>
      <div className={css.background}>
        <form
          onSubmit={handleSubmit}
          className={css.loginForm}
          autoComplete="off"
        >
          <div className={css.authMenu}>
            <button className={`${css.authMenuButton} ${css.regButton}`}>
              Registration
            </button>
            <button className={css.authMenuButton}>Log In</button>
          </div>
          <div className={css.loginInputWrap}>
            <input
              className={css.loginInput}
              type="email"
              name="email"
              placeholder="Enter your email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required
            />

            <input
              className={css.loginInput}
              type="password"
              name="password"
              placeholder="Confirm a password"
              pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
              title="The password must contain only Latin letters (both upper and lower case), numbers and other symbols"
              required
            />
          </div>
          <button className={css.loginButton} type="submit">
            Log In Now
          </button>
        </form>
      </div>
      ;
    </>
  );
};
