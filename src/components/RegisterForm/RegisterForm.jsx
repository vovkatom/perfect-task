// import { useDispatch } from 'react-redux';

// Компонент RegisterForm відповідає за форму реєстрації нового користувача
export const RegisterForm = ({
  formClassName,
  inputClassName,
  buttonClassname,
}) => {
  //   const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    //   const form = event.currentTarget;
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={formClassName}
        autoComplete="off"
      >
        <input
          className={inputClassName}
          type="text"
          name="name"
          placeholder="Enter your name"
          pattern="^[^\d]+$"
          required
        />

        <input
          className={inputClassName}
          type="email"
          name="email"
          placeholder="Enter your email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          required
        />

        <input
          className={inputClassName}
          type="password"
          name="password"
          placeholder="Create a password"
          pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
          title="The password must contain only Latin letters (both upper and lower case), numbers and other symbols"
          required
        />
        <button className={buttonClassname} type="submit">
          Register Now
        </button>
      </form>
    </>
  );
};
