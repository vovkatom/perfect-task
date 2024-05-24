import { useEffect, useState } from 'react';
import css from './Screens.module.css';
import { useSelector } from 'react-redux';

// import CommonModal from '../../CommonModal/CommonModal';
// import CreateBoardForm from './CreateBoardForm/CreateBoardForm';
//import CommonModal from '../../components/CommonModal/CommonModal';
//import CreateBoardForm from '../../components/SideBar/CreateNewBoard/CreateBoardForm/CreateBoardForm';
import {
  selectCurrentBoard,
  //selectBoards,
} from '../../redux/userBoard/userBoard-selectors';
// import HeaderDashboard from './HeaderDashboard/HeaderDashboard';
import { requestBoardById } from '../../api/boards-api';
import Loader from '../../components/Loader/Loader';
//import Container from '../../components/Container/Container';
import AddAnotherColumnButton from './AddAnotherColumnButton/AddAnotherColumnButton';
import NewColumn from './NewColumn/NewColumn';

const Screens = () => {
  //const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeBoard, setActiveBoard] = useState(null);
  const [error, setError] = useState(null);
  console.log(error);

  //const items = useSelector(selectBoards); // _id
  const currentBoard = useSelector(selectCurrentBoard);
  //const { id } = currentBoard;

  useEffect(() => {
    // id
    if (!currentBoard) {
      // return null;
      return;
    }
    const { id } = currentBoard;
    // console.log(currentBoard);
    const fetchCurrentBoardById = async () => {
      try {
        setIsLoading(true);
        const { data } = await requestBoardById(id);
        setActiveBoard(data);
        console.log(data);

        const root = document.documentElement;
        root.style.setProperty(
          '--bg-mobile-1x',
          `url(${data.backgroundURL.mobile_1x})`
        );
        root.style.setProperty(
          '--bg-mobile-2x',
          `url(${data.backgroundURL.mobile_2x})`
        );
        root.style.setProperty(
          '--bg-tablet-1x',
          `url(${data.backgroundURL.tablet_1x})`
        );
        root.style.setProperty(
          '--bg-tablet-2x',
          `url(${data.backgroundURL.tablet_2x})`
        );
        root.style.setProperty(
          '--bg-desktop-1x',
          `url(${data.backgroundURL.desktop_1x})`
        );
        root.style.setProperty(
          '--bg-desktop-2x',
          `url(${data.backgroundURL.desktop_2x})`
        );
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCurrentBoardById();
  }, [currentBoard]);

  // const openModal = () => {
  //   setIsModalOpen(!isModalOpen);
  // };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };

  // console.log(activeBoard);
  if (!activeBoard) {
    return null;
  }
  const { columns } = activeBoard;
  // console.log(columns);
  // const items = columns.map(({ title, _id }) => {
  //   <li key={_id}>{title}</li>;
  // });

  return (
    // <div className={css.container}>
    <div className={css.mainContainer}>
      {isLoading && <Loader centered />}
      {/* <HeaderDashboard currentBoard={currentBoard} /> */}
      <NewColumn columns={columns} />
      {columns && <AddAnotherColumnButton />}
    </div>
  );
};

export default Screens;

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
