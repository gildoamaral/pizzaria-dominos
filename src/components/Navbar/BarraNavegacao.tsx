import { useEffect, useState } from 'react';
import NavbarList from './NavbarList';


const BarraNavegacao = () => {
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  const isMobile = pageWidth < 640;

  useEffect(() => {
    const handleResize = () => {
      setPageWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (

    <div className={`text-xl h-14 bg-slate-400 flex justify-between items-center ${isMobile ? "px-5" : 'px-14' }`}>

      <h1 className='text-3xl font-bold'>Titulo</h1>

      <NavbarList isMobile={isMobile} />

    </div>

  );
};

export default BarraNavegacao;