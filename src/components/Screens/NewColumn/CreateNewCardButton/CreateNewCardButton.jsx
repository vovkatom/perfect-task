import { useState } from 'react';

import CommonButton from '../../../CommonButton/CommonButton';
// import css from './CreateNewCardButton.module.css';
import NewCardForm from '../../NewCardForm/NewCardForm';
import CommonModal from '../../../CommonModal/CommonModal';

const CreateNewBoardButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <CommonButton
        onClick={handleOpenModal}
        title="Add another card"
        type="button"
        id="icon-plus"
      />

      <CommonModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Add card"
      >
        <NewCardForm />
      </CommonModal>
    </>
  );
};

export default CreateNewBoardButton;
