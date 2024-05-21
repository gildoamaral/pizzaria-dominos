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
    <div className=' px-4 w-screen flex items-center justify-between text-white text-lg leading-none text-center '>
      <MenuContextProvider>
        <MenuButton />
        <Menu />
      </MenuContextProvider>
      {isMobile ? <Logo /> : <Login />}
      <Cart />
    </div>
  );
}

export default NavbarList;