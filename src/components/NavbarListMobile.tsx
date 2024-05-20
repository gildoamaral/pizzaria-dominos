import { useState } from 'react';
import menuIcon from '../assets/menu.png';
import logo from '../assets/logo.png'
import person from '../assets/person.png'
import kart from '../assets/kart.png'
import { X } from 'react-feather';

function NavbarListMobile() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const Menu = (
    <nav className={menuVisible ? `bg-sky-600 absolute left-0 top-0 h-screen w-44` : 'hidden'}>

      <div className='text-end pr-3 pt-3 bg-sky-800'>
        <button onClick={toggleMenu}>
          <X className="h-5 text-white" />
        </button>
      </div>

      <a>
        <div className='p-4 pb-5 flex justify-center gap-8 items-center bg-sky-800'>
          <img src={person} alt="person" className='h-7 invert' />
          <h4 className='text-base'>FAZER LOGIN</h4>
        </div>
      </a>

      <ul className={'p-5 leading-6'}>

        <li className={`cursor-pointer p-1 h-full flex items-center  transition-all duration-700 hover:bg-sky-800 mb-2 `}>
          Pedir minha pizza
        </li>
        <li className={`cursor-pointer p-1 h-full flex items-center  transition-all duration-700 hover:bg-sky-800 mb-2`}>
          Cardápio
        </li>
        <li className={`cursor-pointer p-1 h-full flex items-center  transition-all duration-700 hover:bg-sky-800 mb-2`}>
          PROMOÇÕES
        </li>
        <li className={`cursor-pointer p-1 h-full flex items-center  transition-all duration-700 hover:bg-sky-800 mb-2`}>
          Acompanhar pedido
        </li>

      </ul>
    </nav>
  );

  return (
    <>
      <img
        onClick={toggleMenu}
        src={menuIcon}
        className={`sm:hidden invert h-12 cursor-pointer transition-all rounded-full`}
      />

      {Menu}


      <div className='w-10 overflow-hidden ml-10'>
        <img src={logo} alt="" className='h-14 w-20 object-cover' />
      </div>


      <div className="flex items-center justify-center">
        <div className='overflow-hidden w-12 '>
          <span className='bg-red-600 h-4 w-4 absolute z-10 rounded-full right-0 top-1 text-xs'>0</span>
          <img src={kart} alt="kart" className='h-10 object-cover scale-x-[-1]' />
        </div>
        <h6 className='text-sm'>CARRINHO</h6>
      </div>

    </>
  );
}

export default NavbarListMobile;