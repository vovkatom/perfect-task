import { useState } from 'react';
import css from './ScreensPage.module.css';
import { useSelector } from 'react-redux';
import { selectIsLogin } from '../../redux/auth/auth-selectors';
import CommonModal from '../../components/CommonModal/CommonModal';
import CreateBoardForm from '../../components/SideBar/CreateNewBoard/CreateBoardForm/CreateBoardForm';

const ScreensPage = () => {
  const isLogin = useSelector(selectIsLogin);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };

    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  return (
    <>
      {isLogin && (
        <div className={css.container}>
          Before starting your project, it is essential{' '}
          <button
            type="button"
            className={css.button_create}
            onClick={openModal}
          >
            {' '}
            to create a board{' '}
          </button>{' '}
          to visualize and track all the necessary tasks and milestones. This
          board serves as a powerful tool to organize the workflow and ensure
          effective collaboration among team members.
          <>
            <CommonModal isOpen={isModalOpen} onClose={handleCloseModal}>
            <CreateBoardForm />
            </CommonModal>
          </>
         
          {/* <div>
        {openNewBoardModal && (
          <Modal openModal={openModal}>
            <NewBoard openModal={openModal} />
          </Modal>
        )}
      </div> */}
        </div>
      )}
    </>
  );
};

export default ScreensPage;
