import BurgerMenu from './BurgerMenu/BurgerMenu';
import { useState } from 'react';
import css from './Header.module.css';
import ModalEditProfile from '../EditProfile/ModalEditProfile.jsx';
import EditProfileForm from '../EditProfile/EditProfile';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/auth-selectors';
import Theme from './Theme/Theme';
import CommonPopUpSmall from '../CommonPopUpSmall/CommonPopUpSmall';

const Header = ({ toggleSidebar }) => {
  const user = useSelector(selectUser);
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
          <Theme onClick={togglePopUp} />
          <div className={css.user} onClick={handleOpenModal}>
            <p className={css.userName}>{user?.name}</p>
            <div className={css.avatar}>
              <img src={`${user?.avatarURL}`} alt="User avatar" />
            </div>
          </div>
        </div>
      </header>
      {isPopUpOpen && (
        <CommonPopUpSmall onClick={togglePopUp}>
          {['Light', 'Dark', 'Violet']}
        </CommonPopUpSmall>
      )}
      <ModalEditProfile
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={'Edit profile'}
      >
        <EditProfileForm user={user} onCloseModal={handleCloseModal} /> {/* Передача onCloseModal */}
      </ModalEditProfile>
    </div>
  );
};

export default Header;
