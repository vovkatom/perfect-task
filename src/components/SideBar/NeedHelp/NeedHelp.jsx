import { useState } from 'react';
import { Link } from 'react-router-dom';
import NeedHelpModal from './NeedHelpModal/NeedHelpModal';
import css from '../NeedHelp/NeedHelp.module.css';
import CommonModal from '../../CommonModal/CommonModal';
import { ReactComponent as HelpSign } from './help-icon.svg';

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
        If you need help with{' '}
        <span className={css.perfectTask}>Perfect Task</span>, check out our
        support resources or reach out to our customer support team.
      </p>
      <p className={css.needHelp}>
        {/* <svg viewBox="0 0 32 32" width="20" height="20"></svg> */}

        <Link className={css.link} onClick={handleOpenModal}>
          <HelpSign />
          Need help?
        </Link>
      </p>

      <CommonModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Need help"
      >
        <NeedHelpModal />
      </CommonModal>
    </div>
  );
};

export default NeedHelp;
