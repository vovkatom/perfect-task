// import toast, { Toaster } from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// import { saveToken } from '../../lib/session/token';
// import { useNavigate } from 'react-router-dom';
import PasswordField from '../PasswordField/PasswordField';
import InputError from '../InputError/InputError';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
// import { saveUserData } from '../../lib/session/user';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

// Компонент LoginForm відповідає за форму авторизації нового користувача
const LoginForm = ({ formClassName, inputClassName, buttonClassName }) => {
  const dispatch = useDispatch();

  const handleLogin = (data) => {
    dispatch(login(data));
  };

  const {
    register,
    handleSubmit,
    formState: { errors }, // reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // const navigate = useNavigate();

  // const onSubmitHandler = async (data) => {
  //   try {
  //     const resp = await loginUser(data);
  //     if (resp.token) {
  //       saveToken(resp.token);
  //       saveUserData(resp.user);
  //       navigate('/home');
  //     }
  //     if (resp.message) {
  //       toast(resp.message, { type: 'error' });
  //       return;
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     toast(err, { type: 'error' });
  //   }

  //   reset();
  // };

  return (
    <>
      <Toaster />
      <form
        onSubmit={handleSubmit(handleLogin)}
        className={formClassName}
        autoComplete="off"
      >
        <input
          className={inputClassName}
          type="email"
          placeholder="Enter your email"
          // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
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
          Log In Now
        </button>
      </form>
    </>
  );
};

// const loginUser = async (data) => {
//   const resp = await fetch(
//     'https://perfect-task-back.onrender.com/api/users/signin',
//     {
//       method: 'POST',
//       body: JSON.stringify(data),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     }
//   );
//   return await resp.json();
// };

export default LoginForm;
