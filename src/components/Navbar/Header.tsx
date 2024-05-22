import MainBg from '../MainBg';
import NavbarList from './contents/NavbarList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


const Header = () => {

    return (
        <div className='fixed'>
            <header className={`sm:h-20 h-12 w-screen bg-sky-700 flex justify-center shadow-custom-header `}>
                <MainBg >
                    <NavbarList />
                </MainBg>
            </header>

            <div className='sm:hidden h-11 w-screen bg-slate-50 flex justify-between items-center shadow-md px-5 pr-8  '>
                <h1 className='text-sky-700'>ACOMPANHAR PEDIDO</h1>

                <FontAwesomeIcon icon={faLocationDot} size='xl' className='text-sky-700'/>
            </div>
        </div>
    );
};

export default Header;
