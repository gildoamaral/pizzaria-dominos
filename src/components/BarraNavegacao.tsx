import MainBg from './MainBg';
import NavbarList from './NavbarList';


import NavbarListMobile from './NavbarListMobile';
import { useIsMobileContext } from '../contexts/useIsMobileContext';

const BarraNavegacao = () => {
    const isMobile = useIsMobileContext()

    return (

        <header
            className={`sm:h-20 h-14 bg-sky-700 flex justify-center shadow-custom-bottom relative`}
        >
            <MainBg >
                <div className=' px-4 w-screen flex items-center justify-between text-white text-lg leading-none text-center font-league-gothic'>
                    
                    {isMobile ? <NavbarListMobile /> : <NavbarList />}


                </div>
            </MainBg>
        </header>

    );
};

export default BarraNavegacao;
