import { yupResolver } from '@hookform/resolvers/yup';
import css from './EditProfile.module.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import PasswordField from '../PasswordField/PasswordField';
// import toast, { Toaster } from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
// import { getToken } from '../../lib/session/token';
import InputError from '../InputError/InputError';
// import { useSelector } from 'react-redux';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  name: yup.string().required(),
});

const EditProfileForm = ({ user }) => {
  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: user,
    resolver: yupResolver(schema),
  });

  return (
    <form
      className={css.profileForm} // onSubmit= { handleSubmit(updateProfile) }
    >
      <Toaster />
      <div className={css.avatar}>
        <img src={user?.avatarURL} alt="" />
        <div className={css.buttonIconProfile}>
          <p className={css.buttonPlusProfile}>+</p>
        </div>
      </div>
      <input className={css.inputClassName} {...register('name')} />
      <InputError message={errors.name?.message} />
      <input className={css.inputClassName} {...register('email')} />
      <InputError message={errors.email?.message} />
      <PasswordField
        className={css.inputClassName}
        register={register}
        placeholder="Edit a password"
      />
      <InputError message={errors.password?.message} />
      <button className={css.buttonSend} type="submit">
        Send
      </button>
    </form>
  );
};

// const updateProfile = async (data) => {
//   try {
//     const result = await fetch(
//       'https://perfect-task-back.onrender.com/api/users/update',
//       {
//         method: 'PATCH',
//         body: JSON.stringify(data),
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${getToken()}`,
//         },
//       }
//     );
//     const resp = await result.json();
//     if (resp?.message) {
//       toast(resp.message, { type: 'error' });
//     } else {
//       toast('Profile updated', { type: 'success' });
//     }
//   } catch (err) {
//     toast(err, { type: 'error' });
//   }
// };

export default EditProfileForm;
