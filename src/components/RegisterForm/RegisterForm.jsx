import toast, { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { saveToken } from '../../lib/session/token';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  name: yup.string().required(),
});

// Компонент RegisterForm відповідає за форму реєстрації нового користувача
const RegisterForm = ({
  formClassName,
  inputClassName,
  buttonClassName,
  errorClassName,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmitHandler = async (data) => {
    try {
      const resp = await registerUser(data);
      if (resp.token) {
        saveToken(resp.token);
        navigate('/home');
      }
      if (resp.message) {
        toast(resp.message, { type: 'error' });
        return;
      }
    } catch (err) {
      console.log(err);
      toast(err, { type: 'error' });
    }

    reset();
  };

  return (
    <>
      <Toaster />
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className={formClassName}
        autoComplete="off"
      >
        <input
          className={inputClassName}
          {...register('name')}
          type="text"
          placeholder="Enter your name"
        />
        <p className={errorClassName}>{errors.name?.message}</p>
        <input
          className={inputClassName}
          type="email"
          placeholder="Enter your email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          {...register('email')}
        />
        <p className={errorClassName}>{errors.email?.message}</p>
        <input
          className={inputClassName}
          {...register('password')}
          type="password"
          placeholder="Create a password"
          pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
        />
        <p className={errorClassName}>{errors.password?.message}</p>
        <button className={buttonClassName} type="submit">
          Register Now
        </button>
      </form>
    </>
  );
};

const registerUser = async (data) => {
  const resp = await fetch(
    'https://perfect-task-back.onrender.com/api/users/signup',
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return await resp.json();
};

export default RegisterForm;
