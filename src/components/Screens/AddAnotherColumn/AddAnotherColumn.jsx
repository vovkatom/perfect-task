import { useState } from 'react';

import css from './AddAnotherColumn.module.css';
import CommonModal from '../../CommonModal/CommonModal';
import ModalContent from './ModalContent/ModalContent';
import CommonButton from '../../CommonButton/CommonButton';

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
      <CommonButton
        id="icon-plus"
        type="button"
        onClick={openModal}
        title="Add another column"
        className={css.addColumnButton}
      />
      <CommonModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Add column"
        className={css.addColumnModal}
      >
        <ModalContent closeModal={handleCloseModal} />
      </CommonModal>
    </>
  );
};

export default AddAnotherColumn;
