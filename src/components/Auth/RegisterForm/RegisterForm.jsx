import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PasswordField from '../../PasswordField/PasswordField';
import InputError from '../../InputError/InputError';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../../redux/auth/auth-operations';
import { Notify } from 'notiflix';
import Loader from '../../Loader/Loader';
import { selectAuthLoading } from '../../../redux/auth/auth-selectors';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  name: yup.string().required(),
});

// Компонент RegisterForm відповідає за форму реєстрації нового користувача
const RegisterForm = ({ formClassName, inputClassName, buttonClassName }) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectAuthLoading);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSignup = async data => {
    const resp = await dispatch(signup(data));

    if (resp.type === 'auth/signup/fulfilled') {
      return Notify.success('Welcome!');
    }

    if (resp.payload === 'Email in use') {
      return Notify.warning(
        'This email is already in use. Please try using a different email address.'
      );
    }

    if (resp.error) {
      console.log(resp.payload.error.message);
      return Notify.failure(
        'Oops... Something went wrong. Please,ry again later!'
      );
    }

    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleSignup)}
        className={formClassName}
        autoComplete='off'
      >
        <input
          className={inputClassName}
          {...register('name')}
          type='text'
          placeholder='Enter your name'
        />
        <InputError message={errors.name?.message} />
        <input
          className={inputClassName}
          type='email'
          placeholder='Enter your email'
          // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          {...register('email')}
        />
        <InputError message={errors.email?.message} />
        <PasswordField
          className={inputClassName}
          register={register}
          placeholder='Create a password'
        />
        <InputError message={errors.password?.message} />
        <button className={buttonClassName} type='submit'>
          {loading ? <Loader /> : 'Register Now'}
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
