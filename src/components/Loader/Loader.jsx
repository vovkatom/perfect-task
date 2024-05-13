import { ColorRing } from 'react-loader-spinner';
import styles from './Loader.module.css'; // Import CSS module

const Loader = () => {
  return (
    <div className={styles.spinner}> {/* Use the class from the CSS module */}
      <ColorRing
        visible={true}
        height="32"
        width="32"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#8FA1D0', '#E09CB5', '#f8b26a', '#abbd81', '#849b87']}
      />
    </div>
  );
};

export default Loader;
