import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h1>Cannot found this page</h1>
      <Link to="/home">To home page</Link>
    </div>
  );
};

export default NotFoundPage;
