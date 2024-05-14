import { useEffect, useState } from 'react';
import css from './ScreensPage.module.css';
import { useSelector } from 'react-redux';
import { selectIsLogin } from '../../redux/auth/auth-selectors';
// import Modal1
// import newBoard
// import CommonModal from '../../CommonModal/CommonModal';
// import CreateBoardForm from './CreateBoardForm/CreateBoardForm';
//import CommonModal from '../../components/CommonModal/CommonModal';
//import CreateBoardForm from '../../components/SideBar/CreateNewBoard/CreateBoardForm/CreateBoardForm';
import {
  selectCurrentBoard,
  selectBoards,
} from '../../redux/userBoard/userBoard-selectors';
import HeaderDashboard from './HeaderDashboard/HeaderDashboard';
import { requestBoardById } from '../../api/boards-api';
//import Loader from '../../components/Loader/Loader';
//import Container from '../../components/Container/Container';

const ScreensPage = () => {
  //const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeBoard, setActiveBoard] = useState(null);
  const [error, setError] = useState(null);
  //const isLogin = useSelector(selectIsLogin);
  const items = useSelector(selectBoards); // _id
  console.log(items);
  const currentBoard = useSelector(selectCurrentBoard); // id
  console.log(currentBoard);
  const { id } = currentBoard;

  useEffect(() => {
    const fetchCurrentBoardById = async () => {
      try {
        setIsLoading(true);
        const { data } = await requestBoardById(id);
        console.log(data);
        setActiveBoard(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCurrentBoardById();
  }, [id]);

  // const openModal = () => {
  //   setIsModalOpen(!isModalOpen);
  // };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };

  return (
    //<div className={css.container}>
    <div className={css.mainContainer}>
      {/* {isLoading && <Loader />} */}
      {currentBoard && <HeaderDashboard currentBoard={currentBoard} />}
    </div>
  );
};

export default ScreensPage;

//

{
  /* <div>
        {openNewBoardModal && (
          <Modal openModal={openModal}>
            <NewBoard openModal={openModal} />
          </Modal>
        )}
      </div> */
}

{
  /* {items?.length === 0 && 
        // <p>Before starting your project, it is essential{' '}</p>
        //   <button
        //     type="button"
        //     className={css.button_create}
        //     onClick={openModal}
        //   >
        //     {' '}
        //     <span>to create a board{' '}</span>
        //   </button>{' '}
        //   <p>to visualize and track all the necessary tasks and milestones. This
        //   board serves as a powerful tool to organize the workflow and ensure
        //   effective collaboration among team members.</p>
      
            // <CommonModal isOpen={isModalOpen} onClose={handleCloseModal}>
            //   <CreateBoardForm />
            // </CommonModal>
          
      }    */
}
{
  /* </div> */
}
