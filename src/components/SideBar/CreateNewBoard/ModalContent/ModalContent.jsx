import BackgroundSet from './BackgroundSet/BackgroundSet';
import ButtonCreateBoard from './ButtonCreateBoard/ButtonCreateBoard';
import IconsSet from './IconsSet/IconsSet';
import css from '../ModalContent/ModalContent.module.css';

const ModalContent = () => {
  return (
    <>
      <svg width="18" height="18">
        icon close
      </svg>
      <p className={css.newBoard}>New board</p>
      <input className={css.inputTitle} type="text" placeholder="Title"></input>
      <p>Icons</p>
      <IconsSet />
      <p>Background</p>
      <BackgroundSet />
      <ButtonCreateBoard />
    </>
  );
};

export default ModalContent;
