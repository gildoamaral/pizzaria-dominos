import { useState } from 'react';
import menuIcon from '../assets/menu.png';
import { useIsMobileContext } from '../contexts/useIsMobileContext';
import logo from '../assets/logo.png'
import local from '../assets/local.png'

function NavbarList() {
    const [menuVisible, setMenuVisible] = useState(false);
    const isMobile = useIsMobileContext();

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const Menu = (
        <nav
            className={
                isMobile
                    ? menuVisible
                        ? ` absolute rounded-xl shadow-2xl  bg-white right-14 top-10 p-5 px-10`
                        : 'hidden'
                    : undefined
            }
        >
            <ul className={isMobile ? 'text-right' : 'flex justify-between items-center'}>
                <li className={`p mx-3 ${isMobile ? 'mb-2' : ''}`}>
                    <div className='w-10 overflow-hidden'>
                        <img src={logo} alt="" className='h-14 w-20 object-cover' />
                    </div>
                </li>
                <li className={` ${isMobile ? 'mb-2' : ''}`}>
                    PEDIR MINHA PIZZA
                </li>
                <li className={` mx-3 ${isMobile ? 'mb-2' : ''}`}>
                    CARDÁPIO
                </li>
                <li className={` mx-3 ${isMobile ? 'mb-2' : ''}`}>
                    PROMOÇÕES
                </li>
                <li className={` ${isMobile ? 'mb-2' : ''}`}>
                    ACOMPANHAR PEDIDO
                </li>
                <li className={`border-2 rounded ml-3${isMobile ? 'mb-2' : ''}`}>
                    <button className='p-1 flex items-center'>
                        <img src={local} className='w-8 invert' />
                        VEJA A DOMINO'S MAIS PRÓXIMA
                    </button>
                </li>
            </ul>
        </nav>
    );

    return (
        <>
            <img
                onClick={toggleMenu}
                src={menuIcon}
                className={`sm:hidden h-12 cursor-pointer transition-all rounded-full ${menuVisible ? 'bg-slate-500' : ''}`}
            />

            {Menu}
        </>
    );
}

export default NavbarList;
