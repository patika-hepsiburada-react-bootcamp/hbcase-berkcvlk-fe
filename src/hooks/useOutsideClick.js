import { useRef, useEffect, useState } from "react";

/**
 * Check if clicked outside of the current target, and toggle show state.
 */
const useOutsideClick = () => {
  const [isShown, setIsShown] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const checkOutsideClick = (e) => {
      if (isShown && !ref.current.contains(e.target)) {
        setIsShown(false);
      }
    };

    document.addEventListener("mousedown", checkOutsideClick);

    return () => {
      document.removeEventListener("mousedown", checkOutsideClick);
    };
  }, [isShown]);

  return { ref, isShown, setIsShown };
};

export default useOutsideClick;
