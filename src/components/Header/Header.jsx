import BurgerMenu from './BurgerMenu/BurgerMenu';
import { useState } from 'react';
import css from './Header.module.css';
import ModalEditProfile from '../EditProfile/ModalEditProfile.jsx';
import EditProfileForm from '../EditProfile/EditProfile';
import { useSelector } from 'react-redux';
import { selectAuthLoading, selectUser } from '../../redux/auth/auth-selectors';
import ThemeModal from './ThemeModal/ThemeModal';
import ThemeHeaderButton from './ThemeHeaderButton/ThemeHeaderButton';
import Loader from '../Loader/Loader.jsx';
// import { selectAuthLoading } from '../../redux/auth/auth-selectors';

const Header = ({ toggleSidebar }) => {
  const user = useSelector(selectUser);
  const loading = useSelector(selectAuthLoading);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const togglePopUp = () => {
    setIsPopUpOpen(!isPopUpOpen);
  };

  return (
    <div className={css.headerMainContainer}>
      <header className={css.headerContainer}>
        <BurgerMenu onClick={toggleSidebar} />
        <div className={css.customBox}>
          <ThemeHeaderButton onClick={togglePopUp} />
          <div className={css.user} onClick={handleOpenModal}>
            <p className={css.userName}>{user?.name}</p>
            <div className={css.avatar}>
              {loading ? (
                <Loader />
              ) : (
                <img
                  className={css.avatarImg}
                  src={`${user?.avatarURL}`}
                  alt="User avatar"
                />
              )}
            </div>
          </div>
        </div>
      </header>
      {isPopUpOpen && <ThemeModal onClick={togglePopUp} />}
      <ModalEditProfile
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={'Edit profile'}
      >
        <EditProfileForm user={user} onCloseModal={handleCloseModal} />{' '}
        {/* Передача onCloseModal */}
      </ModalEditProfile>
    </div>
  );
};

export default Header;
