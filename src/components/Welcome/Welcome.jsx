import { Link } from 'react-router-dom';
import css from './Welcome.module.css';
import Container from '../Container/Container';
import LogoWelcome from '../LogoWelcome/LogoWelcome';

import UserAvatarMobile from '../../assets/img/start-avatar/start-user-124.png';
import UserAvatarMobile2x from '../../assets/img/start-avatar/start-user@2x-248.png';
import UserAvatarDesktop from '../../assets/img/start-avatar/start-user_desktop-162.png';
import UserAvatarDesktop2x from '../../assets/img/start-avatar/start-user_desktop@2x-324.png';

const Welcome = () => {
  return (
    <div className={css.background}>
      <Container className="welcome-page">
        <div className={css.mainBox}>
          <div className={css.logoBox}>
            <img
              className={css.logoAvatar}
              srcSet={`
              ${UserAvatarMobile} 124w,
              ${UserAvatarMobile2x} 248w,
              ${UserAvatarDesktop} 162w,
              ${UserAvatarDesktop2x} 324w
              `}
              sizes="
              (min-width: 1200px) 162px,
              (min-width: 768px) 162px,
              (min-width: 375px) 124px
              "
              src={`${UserAvatarMobile}`}
              alt="Task Pro avatar"
              width="124"
              height="124"
            />
            <div className={css.logoIconBox}>
              <LogoWelcome />
              <h1 className={css.header}>Perfect Task</h1>
            </div>
          </div>
          <p className={css.paragraph}>
            Supercharge your productivity and take control of your tasks with
            Task Pro - Don&apos;t wait, start achieving your goals now!
          </p>
          <Link to="/auth/register" className={css.buttonLink}>
            <button className={css.registrationBtn} type="button">
              Registration
            </button>
          </Link>
          <Link to="/auth/login">
            <button className={css.loginBtn} type="button">
              Log In
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Welcome;
