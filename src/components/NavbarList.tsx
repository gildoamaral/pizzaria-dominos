import { useState } from 'react';
import menuIcon from '../assets/menu.png';
import logo from '../assets/logo.png'
import local from '../assets/local.png'
import person from '../assets/person.png'
import kart from '../assets/kart.png'

function NavbarList() {
    const [menuVisible, setMenuVisible] = useState(false);


    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const Menu = (
        <nav className={'h-full'}>

            <ul className={'flex justify-between items-center h-full '}>

                <li className={`mx-3`}>
                    <div className='w-10 overflow-hidden'>
                        <img src={logo} alt="" className='h-14 w-20 object-cover' />
                    </div>
                </li>

                <li className={`cursor-pointer h-full flex items-center  transition-all duration-700 hover:bg-sky-800 mb-2`}>
                    PEDIR MINHA PIZZA
                </li>

                <li className={`cursor-pointer h-full flex items-center p-3 transition-all duration-700 hover:bg-sky-800 mb-2`}>
                    CARDÁPIO
                </li>

                <li className={`cursor-pointer h-full flex items-center p-3  transition-all duration-700 hover:bg-sky-800 mb-2`}>
                    PROMOÇÕES
                </li>

                <li className={`cursor-pointer h-full flex items-center  transition-all duration-700 hover:bg-sky-800 mb-2`}>
                    ACOMPANHAR PEDIDO
                </li>

                <li className={`mx-3 border-2 rounded mb-2`}>
                    <button className='p-2  flex items-center  transition-all duration-700 hover:bg-sky-900'>
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
                className={`sm:hidden invert h-12 cursor-pointer transition-all rounded-full ${menuVisible ? 'bg-slate-500' : ''}`}
            />

            {Menu}

            <div className='w-52 mx-3 h-full flex justify-center items-center bg-sky-800'>
                <a href="" className='flex items-center gap-8'>

                    <img src={person} alt="person" className='h-7 invert' />
                    <div>
                        <h4 className='text-base'>FAZER LOGIN</h4>
                        <h5 className='text-xs'>OU INICIAR CADASTRO</h5>
                    </div>

                </a>
            </div>

            <div className="w-20 ">
                <div className='overflow-hidden h-10 relative'>
                    <span className='bg-red-600 h-5 w-5 absolute z-10 rounded-full right-3 text-sm'>0</span>
                    <img src={kart} alt="kart" className='scale-x-[-1]' />
                </div>
                <h6>CARRINHO</h6>
            </div>
        </>
    );
}

export default NavbarList;
