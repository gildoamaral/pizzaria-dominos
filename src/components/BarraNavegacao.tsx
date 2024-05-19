import MainBg from './MainBg';
import NavbarList from './NavbarList';
import kart from '../assets/kart.png'

const BarraNavegacao = () => {

    return (

        <div
            className={`h-20 bg-sky-700 flex justify-center`}
        >
            <MainBg >
                <div className=' px-4 w-screen flex items-center justify-stretch text-white text-base font-semibold text-center font-roboto-condensed'>
                    <NavbarList />

                    <div className='w-44 mx-3 '>
                        <a href="">
                            <span>
                                <h6>FAZER LOGIN OU INICIAR CADASTRO</h6>
                            </span>
                        </a>
                    </div>

                    <div className="w-20 ">
                        <div className='overflow-hidden h-10 relative'>
                            <span className='bg-red-600 h-5 w-5 absolute z-10 rounded-full right-3 text-sm'>0</span>
                            <img src={kart} alt="kart" className='scale-x-[-1]' />
                        </div>
                        <h6>CARRINHO</h6>
                    </div>
                </div>
            </MainBg>
        </div>

    );
};

export default BarraNavegacao;
