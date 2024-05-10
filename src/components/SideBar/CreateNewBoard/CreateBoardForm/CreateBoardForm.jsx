import { useForm } from 'react-hook-form';

import BackgroundSet from './BackgroundSet/BackgroundSet';
import ButtonCreateBoard from './ButtonCreateBoard/ButtonCreateBoard';
import IconsSelector from './IconSelector/IconsSelector';
import css from '../CreateBoardForm/CreateBoardForm.module.css';

const CreateBoardForm = () => {
  const { register, handleSubmit } = useForm({
    values: { title: '', icon: '', bgImage: '' },
  });

  const submit = (data) => {
    // Обробка поданих даних форми
    console.log(data);
  };
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
      <BackgroundSet register={register} />
      <ButtonCreateBoard />
    </form>
  );
};

export default CreateBoardForm;
