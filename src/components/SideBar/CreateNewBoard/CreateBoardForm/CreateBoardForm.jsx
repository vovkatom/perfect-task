import { useForm } from 'react-hook-form';

import BackgroundSet from './BackgroundSet/BackgroundSet';
import ButtonCreateBoard from './ButtonCreateBoard/ButtonCreateBoard';
import IconsSelector from './IconSelector/IconsSelector';
import css from '../CreateBoardForm/CreateBoardForm.module.css';
import { useEffect, useState } from 'react';
import { requestBgImages } from '../../../../api/boards-api';

const CreateBoardForm = () => {
  const [bgImages, setBgImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { register, handleSubmit } = useForm({
    defaultValues: { title: 'My super board', icon: '', bgImage: '' },
  });

  const submit = (data) => {
    // Обробка поданих даних форми
    console.log(data);
  };

  useEffect(() => {
    const fetchBgImagesMin = async () => {
      try {
        //setLoading(true);
        const { data } = await requestBgImages();
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
      <svg width="18" height="18">
        icon close
      </svg>
      <p className={css.newBoard}>New board</p>
      <input
        className={css.input}
        type="text"
        placeholder="Title"
        {...register('title')}
      />

      <p>Icons</p>
      <IconsSelector register={register} />
      <p>Background</p>
      {error && <p className={css.error}>{error}</p>}
      {loading && <p>...Loading</p>}
      <BackgroundSet register={register} bgImages={bgImages} />
      <ButtonCreateBoard />
    </form>
  );
};

export default CreateBoardForm;
