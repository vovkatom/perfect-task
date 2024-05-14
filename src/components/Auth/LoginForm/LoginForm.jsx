import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PasswordField from '../../PasswordField/PasswordField';
import InputError from '../../InputError/InputError';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../redux/auth/auth-operations';
import { Notify } from 'notiflix';
import Loader from '../../Loader/Loader';
import { selectAuthLoading } from '../../../redux/auth/auth-selectors';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const LoginForm = ({ formClassName, inputClassName, buttonClassName }) => {
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

  const handleLogin = async (data) => {
    const resp = await dispatch(login(data));

    if (resp.type === 'auth/login/fulfilled') {
      Notify.success('Welcome back!');
    }

    if (resp.error) {
      Notify.failure(
        'Invalid email, or password, or something went wrong. Try again, please.'
      );
    }

    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className={formClassName}
        autoComplete="off"
      >
        <input
          className={inputClassName}
          type="email"
          placeholder="Enter your email"
          {...register('email')}
        />
        <InputError message={errors.email?.message} />
        <PasswordField
          className={inputClassName}
          register={register}
          placeholder="Enter a password"
        />
        <InputError message={errors.password?.message} />
        <button className={buttonClassName} type="submit">
          {loading ? <Loader /> : 'Log In Now'}
        </button>
      </form>
    </>
  );
};

export default LoginForm;
