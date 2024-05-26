import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import css from './Welcome.module.css';
import Container from '../Container/Container';

import UserAvatarMobile from '../../assets/img/start-avatar/start-user-124.png';
import UserAvatarMobile2x from '../../assets/img/start-avatar/start-user@2x-248.png';
import UserAvatarDesktop from '../../assets/img/start-avatar/start-user_desktop-162.png';
import UserAvatarDesktop2x from '../../assets/img/start-avatar/start-user_desktop@2x-324.png';
import Icon from '../Icon/Icon';
import GoogleButton from '../Auth/GoogleButton/GoogleButton';

const Welcome = () => {
  return (
    <>
      <div className={css.background}>
        <Container className="welcome-page">
          <motion.div
            className={`${css.mainBox}`}
            initial={{ y: -700, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
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
              <Icon
                className={css.logoIcon}
                id="icon-logo-welcome"
                width="40"
                height="40"
              />
              <h1 className={css.header}>Task Pro</h1>
            </div>

            <p className={css.paragraph}>
              Supercharge your productivity and take control of your tasks with
              Task Pro - Don&apos;t wait, start achieving your goals now!
            </p>
          </motion.div>
          <motion.div
            className={`${css.mainBox}`}
            initial={{ y: 700, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Link to="/auth/register" className={css.buttonLink}>
              <button className={css.registrationBtn} type="button">
                Registration
              </button>
            </Link>
            <div className={css.authBox}>
              <Link to="/auth/login">
                <button className={css.loginBtn} type="button">
                  Log In
                </button>
              </Link>
              <GoogleButton />
            </div>
          </motion.div>
        </Container>
      </div>
    </>
  );
};

export default Welcome;
