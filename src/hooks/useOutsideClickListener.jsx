import { useEffect, useRef, useState } from 'react';

const useOutsideClickListener = (initialIsVisible) => {
  const [isShow, setIsShow] = useState(initialIsVisible);
  const ref = useRef(null);

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return { ref, isShow, setIsShow };
};

export default useOutsideClickListener;
