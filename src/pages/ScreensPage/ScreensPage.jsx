import { useState } from 'react';
import css from './ScreensPage.module.css';
import { useSelector } from 'react-redux';
import { selectIsLogin } from '../../redux/auth/auth-selectors';
// import Modal1
// import newBoard

const ScreensPage = () => {
  const isLogin = useSelector(selectIsLogin);
  const [openNewBoardModal, setOpenEditBoardModal] = useState(false);

  const openModal = () => {
    setOpenEditBoardModal(!openNewBoardModal);
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
