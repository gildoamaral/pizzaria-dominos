import MainBg from '../MainBg';
import NavbarListMobile from './contents/NavbarList';

const Header = () => {

    return (
        <header className={`sm:h-20 h-14 w-screen bg-sky-700 flex justify-center shadow-custom-header font- fixed`}>
            <MainBg >
                <NavbarListMobile />
            </MainBg>
        </header>
    );
};

export default Header;
