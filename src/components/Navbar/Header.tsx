import MainBg from '../MainBg';
import NavbarList from './contents/NavbarList';
import local from '../../assets/local.png'

const Header = () => {

    return (
        <div className='fixed'>
            <header className={`sm:h-20 h-12 w-screen bg-sky-700 flex justify-center shadow-custom-header `}>
                <MainBg >
                    <NavbarList />
                </MainBg>
            </header>

            <div className='sm:hidden h-11 w-screen bg-slate-50 flex justify-between items-center shadow-custom-header px-5 '>
                <h1 className='text-sky-700'>ACOMPANHAR PEDIDO</h1>
                <img src={local} alt="" className='w-8' />
            </div>
        </div>
    );
};

export default Header;
