import Menu from './Menu';
import Logo from './Logo';
import Cart from './Cart';
import Login from './Login';
import { useIsMobileContext } from '../../../contexts/useIsMobileContext';
import MenuButton from './MenuButton';
import { MenuContextProvider } from '../../../contexts/MenuContext';


function NavbarList() {
  const isMobile = useIsMobileContext()


  return (
    <div className='sm:px-4 pr-4 w-full flex items-center justify-between text-white text-lg leading-none text-center '>

      {/* Left Section in the navbar */}
      <MenuContextProvider>
        <MenuButton />
        <Menu />
      </MenuContextProvider>

      {/* Middle Sections in the navbar */}
      {isMobile ? <Logo /> : <Login />}

      {/* Right Section in the navbar */}
      <Cart />
    </div>
  );
}

export default NavbarList;