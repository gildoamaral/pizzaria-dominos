import { useState } from 'react';
import './Navbar.css'
import menuIcon from './menu.png'

function NavbarList({ isMobile }: { isMobile?: boolean }) {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const Menu = (
    <nav className={isMobile ?
      menuVisible ? ` absolute rounded-xl shadow-2xl  bg-white right-14 top-10 p-5 px-10` : 'hidden'
      : 'w-96'}>
      <ul className={isMobile ? 'text-right' : 'flex justify-between'}>
        <li className={`transition-all hover:text-amber-400 ${isMobile ? 'mb-2' : null}`}>Página Inicial</li>
        <li className={`transition-all hover:text-amber-400 ${isMobile ? 'mb-2' : null}`}>Sobre</li>
        <li className={`transition-all hover:text-amber-400 ${isMobile ? 'mb-2' : null}`}>Contato</li>
      </ul>
    </nav>
  )

  return (
    <>
      <img onClick={toggleMenu} src={menuIcon}
        className={`sm:hidden h-12 cursor-pointer transition-all rounded-full ${menuVisible ? 'bg-slate-500' : null}`} />

      {Menu}
    </>
  )
}

export default NavbarList