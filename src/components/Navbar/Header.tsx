import { MenuContextProvider } from '../../contexts/MenuContext';
import MenuButton from './contents/MenuMobileButtonButton';
import MenuDesktop from './contents/MenuDesktop';
import Logo from './contents/Logo';
import Login from './contents/HeaderLogin';
import Cart from './contents/Cart';
import { useIsMobileContext } from '../../contexts/useIsMobileContext';
import SubHeader from './contents/SubHeader';
import MenuMobile from './contents/MenuMobile';
import HeaderContainer from './contents/HeaderContainer';


const Header = () => {
    const isMobile = useIsMobileContext()

    return (
        <>
            <HeaderContainer>
                {isMobile ? (
                    <>
                        <MenuContextProvider>
                            <MenuButton />
                            <MenuMobile />
                        </MenuContextProvider>
                        <Logo />
                        <Cart />
                    </>
                ) : (
                    <>

                        <MenuDesktop />
                        <Login />
                        <Cart />
                    </>
                )}
            </HeaderContainer>

            <SubHeader local/>
        </>
    );
};

export default Header;
