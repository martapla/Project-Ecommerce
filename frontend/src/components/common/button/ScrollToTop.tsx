import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Se ejecuta cada vez que cambia el pathname

  return null; // No renderiza nada
};

export default ScrollToTop;
