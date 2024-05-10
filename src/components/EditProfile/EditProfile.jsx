import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import css from './EditProfile.module.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import PasswordField from '../PasswordField/PasswordField';
import { Toaster } from 'react-hot-toast';
import InputError from '../InputError/InputError';
import sprite from '../../assets/img/icon.svg';
import { updateProfile } from '../../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';


const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  name: yup.string().required(),
});

const EditProfileForm = ({ user }) => {
  const dispatch = useDispatch();
  const [avatarFile, setAvatarFile] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: user,
    resolver: yupResolver(schema),
  });

  const handleAvatarChange = e => {
    const file = e.target.files[0];
    setAvatarFile(file);
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('avatarURL', avatarFile);
    formData.append('name', data.name);
    formData.append('email', data.email);
    // formData.append('password', data.password);

    await dispatch(updateProfile(formData));

    history.go(0);
  };

  return (
    <form className={css.profileForm} onSubmit={handleSubmit(onSubmit)}>
      <Toaster />
      <div className={css.avatar}>
        <img
          src={avatarFile ? URL.createObjectURL(avatarFile) : user.avatarURL}
          alt='avatar'
        />

        <div className={css.buttonIconProfile}>
          <label htmlFor='avatarInput'>
            <svg width='24' height='24' className={css.plusIcon}>
              <use xlinkHref={`${sprite}#icon-plus`} />
            </svg>
          </label>
          <input
            id='avatarInput'
            type='file'
            accept='image/*'
            onChange={handleAvatarChange}
            style={{ display: 'none' }}
          />
        </div>
      </div>
      <input className={css.inputClassName} {...register('name')} />
      <InputError message={errors.name?.message} />
      <input className={css.inputClassName} {...register('email')} />
      <InputError message={errors.email?.message} />
      <PasswordField
        className={css.inputClassName}
        register={register}
        placeholder='passworld'
      />
      <InputError message={errors.password?.message} />
      <button className={css.buttonSend} type='submit'>
        Send
      </button>
    </form>
  );
};

export default EditProfileForm;
