import css from './RegistrationForm.module.css';
// import { useDispatch } from 'react-redux';

// Компонент RegisterForm відповідає за форму реєстрації нового користувача
export const RegisterForm = () => {
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
          className={css.registerForm}
          autoComplete="off"
        >
          <div className={css.authMenu}>
            <button className={css.authMenuButton}> Registration </button>
            <button className={css.authMenuButton}> Log In </button>
          </div>
          <div className={css.registerInputWrap}>
            <input
              className={css.registerInput}
              type="text"
              name="name"
              placeholder="Enter your name"
              pattern="^[^\d]+$"
              required
            />

            <input
              className={css.registerInput}
              type="email"
              name="email"
              placeholder="Enter your email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required
            />

            <input
              className={css.registerInput}
              type="password"
              name="password"
              placeholder="Create a password"
              pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
              title="The password must contain only Latin letters (both upper and lower case), numbers and other symbols"
              required
            />
          </div>
          <button className={css.registerButton} type="submit">
            Register Now
          </button>
        </form>
      </div>
      ;
    </>
  );
};
