import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';

import Loader from '../../Loader/Loader';
import ColorSelector from './ColorSelector/ColorSelector';
import css from './NewCardForm.module.css';
import { addCard } from '../../../redux/userBoard/userBoard-operations';
import Button from '../../../shared/Button/Button';
import Calendar from '../../Calendar/Calendar';
import { selectBoard } from '../../../redux/userBoard/userBoard-slice';

const schema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string(),
  deadline: yup.string(),
});

const NewCardForm = ({ closeModal }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  // console.log(selectedColor);
  // console.log(selectedDate);

  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const updateColor = (selectedColor) => {
    setSelectedColor(selectedColor);
  };

  const handleDate = (selectedDate) => {
    setSelectedDate(selectedDate);
  };

  const currentBoard = useSelector(selectBoard);
  const { payload } = currentBoard;
  // console.log(currentBoard);
  // console.log(payload);

  const submit = async (data) => {
    // Обробка поданих даних форми

    const formData = {
      // boardId: ;
      // columnId: ;
      title: data.title,
      description: data.description,
      color: selectedColor,
      calendar: selectedDate,
    };

    const res = await dispatch(addCard(formData));

    // console.log(res);

    closeModal();

    if (res.type === 'cards/addCard/fulfilled') {
      dispatch(selectBoard(res.payload.currentBoard));
      return Notify.success("You've successfully created a board! Congrats)");
    }

    if (res.error) {
      // console.log(res.error.message);
      return Notify.failure('Something went wrong. Please try again.');
    }
  };

  // useEffect(() => {
  //   const fetchBgImagesMin = async () => {
  //     try {
  //       setLoading(true);
  //       const data = await requestBgImages();
  //       console.log(data);
  //       setBgImages(data);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchBgImagesMin();
  // }, []);

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
      <textarea
        className={css.description}
        type="text"
        placeholder="Description"
        {...register('description')}
      ></textarea>
      {/* Color selection */}
      <p className={css.categoryName}>Label color</p>
      <ColorSelector updateColor={updateColor} />
      {/* Calendar */}
      <p className={css.categoryName}>Deadline</p>
      {error && <p className={css.error}>{error}</p>}
      {loading && <Loader />}
      <div className={css.calendar}>
        <Calendar handleDate={handleDate} />
      </div>
      <Button onClick={submit} title="Add card" type="submit" />
    </form>
  );
};

export default NewCardForm;
