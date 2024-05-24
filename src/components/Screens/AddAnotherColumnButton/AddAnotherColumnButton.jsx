import { useState } from 'react';

import css from './AddAnotherColumnButton.module.css';
import CommonModal from '../../CommonModal/CommonModal';
import ModalContent from './ModalContent/ModalContent';
import Button from '../../Button/Button';

const AddAnotherColumn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        id="icon-plus"
        type="button"
        onClick={openModal}
        title="Add another column"
      />
      <CommonModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Add column"
      >
        <ModalContent closeModal={handleCloseModal} />
      </CommonModal>
    </>
  );
};

export default AddAnotherColumn;
