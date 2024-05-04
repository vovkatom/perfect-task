import { useState } from 'react';
import { Link } from 'react-router-dom';
import HelpModal from './HelpModal/HelpModal'; // Импортируем компонент HelpModal
import css from '../NeedHelp/NeedHelp.module.css';

const NeedHelp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для открытия/закрытия модального окна

  const handleOpenModal = () => {
    setIsModalOpen(true); // Открыть модальное окно при нажатии на ссылку
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Закрыть модальное окно
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
        <svg viewBox="0 0 32 32" width="20" height="20"></svg>
        {/* При нажатии на ссылку вызываем функцию handleOpenModal */}
        <Link onClick={handleOpenModal}>Need help?</Link>
      </p>
      {/* Показываем модальное окно, если isModalOpen true */}
      <HelpModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default NeedHelp;
