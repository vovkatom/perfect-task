import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import SideBar from '../../components/Sidebar/Sidebar';
import ScreensPage from '../ScreensPage/ScreensPage';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.background}>
      <Header />
      <SideBar />
      <Container className="home-page">
        <ScreensPage />
      </Container>
    </div>
  );
};

export default HomePage;

//"HomePage - складається з компонентів Header, Sidebar, ScreensPage.

// Header - це шапка HomePage.

// Sidebar - компонент в якому знаходиться навігація по дошкам, та можливість їх створювати.

// ScreensPage - компонент в якому знаходиться основний контент дошки(колонки та картки). Перехід на цей компонент відбувається за динамічним роутом /home/:boardName."
