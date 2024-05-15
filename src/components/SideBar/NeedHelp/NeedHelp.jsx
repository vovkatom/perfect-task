import { useState } from 'react';
import { Link } from 'react-router-dom';
import NeedHelpModal from './NeedHelpModal/NeedHelpModal';
import css from '../NeedHelp/NeedHelp.module.css';
import CommonModal from '../../CommonModal/CommonModal';
import Icon from '../../Icon/Icon';

const NeedHelp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={css.container}>
      <svg className={css.image}></svg>
      <p className={css.infoText}>
        If you need help with <br />
        <span className={css.perfectTask}>Perfect Task</span>, check out our
        support resources or reach out to our customer support team.
      </p>
      <Link className={css.needHelpLink} onClick={handleOpenModal}>
        <Icon
          id="icon-help-circle"
          className={css.iconHelp}
          width="20"
          height="20"
        />
        Need help?
      </Link>

      <CommonModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Need help"
      >
        <NeedHelpModal closeModal={handleCloseModal} />
      </CommonModal>
    </div>
  );
};

export default NeedHelp;
