import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import css from './EditProfile.module.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import PasswordField from '../PasswordField/PasswordField';
import { Toaster } from 'react-hot-toast';
import InputError from '../InputError/InputError';
import sprite from '../../assets/img/icon.svg';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  name: yup.string().required(),
});

const EditProfileForm = ({ user }) => {
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

  const onSubmit = data => {
    const formData = new FormData();
    formData.append('avatar', avatarFile);
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);
  };

  return (
    <form className={css.profileForm} onSubmit={handleSubmit(onSubmit)}>
      <Toaster />
      <div className={css.avatar}>
        <img
          src={avatarFile ? URL.createObjectURL(avatarFile) : user.avatarURL}
          alt=''
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
        placeholder='Редагувати пароль'
      />
      <InputError message={errors.password?.message} />
      <button className={css.buttonSend} type='submit'>
        Відправити
      </button>
    </form>
  );
};

export default EditProfileForm;
