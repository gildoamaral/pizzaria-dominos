
import { useIsMobileContext } from '../contexts/useIsMobileContext'

const Line = () => <div className='border-b-2 border-gray-300 w-28 h-1/2' />

const Delivery = () => {
    const isMobile = useIsMobileContext();

    return isMobile ? (

        <div className=' mt-20 text-center flex flex-col w-full gap-2'>
            <h1 className='text-sky-700 text-3xl'>SUA PIZZA FAVORITA ESTÁ AQUI</h1>
            <a href="">
                <h1 className='bg-red-500 text-3xl text-white shadow-custom-bottom'>PEDIR MINHA PIZZA</h1>
            </a>
        </div>
    ) : (
        <div className=' w-full mt-28 text-center flex justify-center '>

            <Line />
            <h1 className='text-sky-700 text-3xl max-w-60 leading-none '>ESCOLHA SUA FORMA DE ENTREGA</h1>
            <div className='mx-2 flex items-center'>
                <a href='' className='bg-red-500 transition-colors duration-300 ease-in hover:bg-red-700 w-44 h-full inline-block p-4 rounded font-pathway-gothic font-semibold text-white text-lg'>DELIVERY</a>
                <span className='w-14 text-2xl text-slate-500 italic inline-block font-Namdhinggo'>ou</span>
                <a href='' className='bg-red-500 transition-colors duration-300 ease-in hover:bg-red-700 w-44 h-full inline-block p-4 rounded font-pathway-gothic font-semibold text-white text-lg'>BUSCAR NA LOJA</a>
            </div>
            <Line />
        </div>
    )
}



export default Delivery