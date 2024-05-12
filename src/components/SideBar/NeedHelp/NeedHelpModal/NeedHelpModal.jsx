import { useState, useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { support } from '../../../../redux/user/user-operations';
import Loader from '../../../../components/Loader/Loader';
import css from './need-help-modal.module.css';
import clsx from 'clsx';
import { selectAuthLoading } from '../../../../redux/auth/auth-selectors.js';

const INITIAL_STATE = {
  email: '',
  message: '',
};

const NeedHelpModal = () => {
  const [formData, setFormData] = useState({ ...INITIAL_STATE });
  const dispatch = useDispatch();
  const loading = useSelector(selectAuthLoading);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      dispatch(support(formData));

      reset();
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const reset = () => {
    setFormData({ ...INITIAL_STATE });
  };

  const emailId = useId();
  const commentsId = useId();

  const { email, message } = formData;

  const inputClassName = clsx(css.modalInput, css.modalControl);
  const textareaClassName = clsx(css.modalInput, css.modalControlText);
  const buttonClassName = clsx(css.modalButton, css.modalControl);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className={inputClassName}
            type="email"
            id={emailId}
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Email address"
            required
          />
        </div>
        <div>
          <textarea
            className={textareaClassName}
            id={commentsId}
            name="message"
            value={message}
            onChange={handleChange}
            rows="4"
            placeholder="Comment"
            required
          />
        </div>
        <button className={buttonClassName} type="submit">
          {loading ? <Loader /> : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default NeedHelpModal;
