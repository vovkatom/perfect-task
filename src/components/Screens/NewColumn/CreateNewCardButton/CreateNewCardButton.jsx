import { useState } from 'react';

import Button from '../../../Button/Button';
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
      <Button
        onClick={handleOpenModal}
        title="Add another card"
        type="button"
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
