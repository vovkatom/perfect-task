import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Notify } from 'notiflix';

import BackgroundSet from './BackgroundSet/BackgroundSet';
import ButtonCreateBoard from './ButtonCreateBoard/ButtonCreateBoard';
import IconsSelector from './IconSelector/IconsSelector';
import css from '../CreateBoardForm/CreateBoardForm.module.css';
import { requestBgImages } from '../../../../api/boards-api';
import { addBoard } from '../../../../redux/userBoard/userBoard-operations';

const schema = yup.object().shape({
  title: yup.string().required(),
});

const CreateBoardForm = ({ closeModal }) => {
  const [bgImages, setBgImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [background, setBackground] = useState(null);
  const [icon, setIcon] = useState(null);

  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const updateBg = (background) => {
    setBackground(background);
  };

  const updateIcon = (icon) => {
    setIcon(icon);
  };
  // console.log(icon);

  // console.log(background);

  const submit = async (data) => {
    // Обробка поданих даних форми

    const formData = {
      title: data.title,
      icon: icon,
      background: background,
    };

    // console.log(formData);

    const res = await dispatch(addBoard(formData));

    // console.log(res);

    closeModal();

    if (res.type === 'boards/addBoard/fulfilled') {
      return Notify.success("You've successfully created a board! Congrats)");
    }

    if (res.error) {
      console.log(res.error.message);
      return Notify.failure('Something went wrong. Please try again.');
    }
  };

  useEffect(() => {
    const fetchBgImagesMin = async () => {
      try {
        setLoading(true);
        const data = await requestBgImages();
        console.log(data);
        setBgImages(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBgImagesMin();
  }, []);

  return (
    <form
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(submit)}
      className={css.form}
    >
      <input
        className={css.input}
        type="text"
        placeholder="Title"
        {...register('title')}
      />
      {/* Icon selection */}
      <p className={css.categoryName}>Icons</p>
      <IconsSelector updateIcon={updateIcon} />
      {/* Background selection */}
      <p className={css.categoryName}>Background</p>
      {error && <p className={css.error}>{error}</p>}
      {loading && <p>...Loading</p>}
      <BackgroundSet bgImages={bgImages} updateBg={updateBg} />
      <ButtonCreateBoard />
    </form>
  );
};

export default CreateBoardForm;
