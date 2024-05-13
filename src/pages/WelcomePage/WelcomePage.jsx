import { useSelector } from 'react-redux';
import Welcome from '../../components/Welcome/Welcome';
import { selectIsLoading } from '../../redux/userBoard/userBoard-selectors';
import Loader from '../../components/Loader/Loader';

const WelcomePage = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      {isLoading && <Loader />}
      <Welcome />
    </>
  );
};

export default WelcomePage;
