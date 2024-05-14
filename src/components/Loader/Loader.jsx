import { ColorRing } from 'react-loader-spinner';
import styles from './Loader.module.css'; 

const Loader = ({ centered }) => {
  const spinnerClass = centered ? `${styles.spinner} ${styles.centered}` : styles.spinner;
  const spinnerSize = centered ? 64 : 32; 

  return (
    <div className={spinnerClass}>
      <ColorRing
        visible={true}
        height={spinnerSize}
        width={spinnerSize}
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#8FA1D0', '#E09CB5', '#f8b26a', '#abbd81', '#849b87']}
      />
    </div>
  );
};

export default Loader;
