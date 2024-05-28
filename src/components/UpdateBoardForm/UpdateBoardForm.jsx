import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Notify } from 'notiflix';

import BackgroundSet from './../SideBar/CreateNewBoard/CreateBoardForm/BackgroundSet/BackgroundSet';
import ButtonCreateBoard from './../SideBar/CreateNewBoard/CreateBoardForm/ButtonCreateBoard/ButtonCreateBoard';
import IconsSelector from './../SideBar/CreateNewBoard/CreateBoardForm/IconSelector/IconsSelector';
import css from './../SideBar/CreateNewBoard/CreateBoardForm/CreateBoardForm.module.css';
import { requestBgImages, requestBoardById } from '../../api/boards-api';
import { updateBoardById } from '../../redux/userBoard/userBoard-operations';
import { selectBoard } from '../../redux/userBoard/userBoard-slice';
import Loader from '../Loader/Loader';

const schema = yup.object().shape({
  title: yup.string(),
});

const UpdateBoardForm = ({ closeModal, id, title }) => {
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

  const submit = async (data) => {
    // Обробка поданих даних форми

    const formData = {
      title: data.title,
      icon: icon,
      background: background,
    };

    const dboarData = await requestBoardById(id);
    const {
      title: dbTitle,
      icon: dbIcon,
      background: dbBackground,
    } = dboarData;

    const dboard = {
      title: dbTitle,
      icon: dbIcon,
      background: dbBackground,
    };

    for (const key in formData) {
      if (formData[key] === null || formData[key] === '') {
        formData[key] = dboard[key];
      }
    }

    const db = {
      id: id,
      formData: formData,
    };

    const res = await dispatch(updateBoardById(db));

    closeModal();

    if (res.type === 'boards/updateBoardById/fulfilled') {
      dispatch(selectBoard(res.payload.currentBoard));
      return Notify.success("You've successfully created a board! Congrats)");
    }

    if (res.error) {
      // console.log(res.error.message);
      return Notify.failure('Something went wrong. Please try again.');
    }
  };

  useEffect(() => {
    const fetchBgImagesMin = async () => {
      try {
        setLoading(true);
        const data = await requestBgImages();
        // console.log(data);
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
        placeholder={title}
        {...register('title')}
      />
      {/* Icon selection */}
      <p className={css.categoryName}>Icons</p>
      <IconsSelector updateIcon={updateIcon} />
      {/* Background selection */}
      <p className={css.categoryName}>Background</p>
      {error && <p className={css.error}>{error}</p>}
      {loading && <Loader />}
      <BackgroundSet bgImages={bgImages} updateBg={updateBg} />
      <ButtonCreateBoard type="Edit" />
    </form>
  );
};

export default UpdateBoardForm;
