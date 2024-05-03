import { useState, useMemo, useId } from 'react';
import { nanoid } from 'nanoid';

// import { useDispatch } from 'react-redux';
const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};
// Компонент RegisterForm відповідає за форму реєстрації нового користувача
const RegisterForm = ({
  onSubmit,
  formClassName,
  inputClassName,
  buttonClassname,
}) => {
  const [state, setState] = useState({ ...INITIAL_STATE });
  const handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    const newValue = type === 'checkbox' ? checked : value;

    setState({
      ...state,
      [name]: newValue,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ ...state });
    reset();
  };

  const reset = () => {
    setState({ ...INITIAL_STATE });
  };

  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  console.log(passwordId);

  const { name, email, password } = state;

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={formClassName}
        autoComplete="off"
      >
        <input
          className={inputClassName}
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          id={nameId}
          placeholder="Enter your name"
          pattern="^[^\d]+$"
          required
        />

        <input
          className={inputClassName}
          value={email}
          onChange={handleChange}
          type="email"
          name="email"
          id={emailId}
          placeholder="Enter your email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          required
        />

        <input
          className={inputClassName}
          value={password}
          onChange={handleChange}
          type="password"
          name="password"
          id={passwordId}
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
export default RegisterForm;
