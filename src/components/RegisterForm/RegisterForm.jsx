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
      <form
        onSubmit={handleSubmit}
        className={css.registerForm}
        autoComplete="off"
      >
        <input
          className={`${css.registerInput} ${css.control}`}
          type="text"
          name="name"
          placeholder="Enter your name"
          pattern="^[^\d]+$"
          required
        />

        <input
          className={`${css.registerInput} ${css.control}`}
          type="email"
          name="email"
          placeholder="Enter your email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          required
        />

        <input
          className={`${css.registerInput} ${css.control}`}
          type="password"
          name="password"
          placeholder="Create a password"
          pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
          title="The password must contain only Latin letters (both upper and lower case), numbers and other symbols"
          required
        />
        <button
          className={`${css.registerButton} ${css.control}`}
          type="submit"
        >
          Register Now
        </button>
      </form>
    </>
  );
};
