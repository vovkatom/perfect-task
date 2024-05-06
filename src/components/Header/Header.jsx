import BurgerMenu from './BurgerMenu/BurgerMenu';
import { useState } from 'react';
import css from './Header.module.css';
import CommonModal from '../CommonModal/CommonModal';
import { getUserData } from '../../lib/session/user';
import EditProfileForm from '../EditProfile/EditProfile';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const user = getUserData();
  return (
    <header className={css.headerContainer}>
      <BurgerMenu />
      <div className={css.customBox}>
        <div className={css.themeBox}>
          <label htmlFor="theme" className={css.label}>
            Theme
          </label>
          <select className={css.select} id="theme" type="select">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="violet">Violet</option>
          </select>
        </div>

        <div className={css.user} onClick={handleOpenModal}>
          <p className={css.userName}>{user?.name}</p>
          <div className={css.avatar}>{user?.avatarURL}</div>
        </div>
      </div>
      <CommonModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={'Edit profile'}
      >
        <EditProfileForm user={user} />
      </CommonModal>
    </header>
  );
};

export default Header;
