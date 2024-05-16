
import { useIsMobileContext } from '../contexts/useIsMobileContext';
import NavbarList from './NavbarList';



const BarraNavegacao = () => {

  const isMobile = useIsMobileContext()

  return (

    <div className={`text-white font-bold h-24 bg-sky-700 flex justify-between items-center ${isMobile ? "px-5" : 'px-14' }`}>
      
      <NavbarList />

      <h1 className='text-3xl font-bold'>Titulo</h1>


    </div>

  );
};

export default BarraNavegacao;