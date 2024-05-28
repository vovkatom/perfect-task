import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Notify } from 'notiflix';

import { addColumn } from '../../../../redux/userBoard/userBoard-operations';
import CommonButton from '../../../CommonButton/CommonButton';
import css from './ModalContent.module.css';
import { selectCurrentBoard } from '../../../../redux/userBoard/userBoard-selectors';

const schema = yup.object().shape({
  title: yup.string().required(),
});

const ModalContent = ({ closeModal }) => {
  const dispatch = useDispatch();

  const { id } = useSelector(selectCurrentBoard);
  //console.log(id);

  const handleColumn = async (data) => {
    const formData = {
      title: data.title,
      board: id,
    };
    const resp = await dispatch(addColumn(formData));
    // console.log(resp);
    if (resp.type === 'boards/addColumn/fulfilled') {
      Notify.success('Column successful created');
    }
    if (resp.error) {
      Notify.failure('Oops,something went wrong. Try again, please.');
    }
    reset();
  };

  const {
    register,
    handleSubmit,
    //formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <form className={css.form} onSubmit={handleSubmit(handleColumn)}>
      <input
        className={css.input}
        placeholder="Title"
        {...register('title')}
      ></input>
      <CommonButton
        className={css.submitButton}
        type="submit"
        onClick={closeModal}
        title="Add"
        id="icon-plus"
      />
    </form>
  );
};

export default ModalContent;
