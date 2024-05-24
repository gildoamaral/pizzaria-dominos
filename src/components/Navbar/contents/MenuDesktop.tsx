import local from '../../../assets/local.png';
import Logo from './Logo';

const Menu = () => {

  return (
    <nav className={'h-full'}>
      
      <ul className={'flex justify-between items-center h-full'}>
        <li className='mx-3'>
        <Logo />
        </li>
        <li className={`cursor-pointer h-full flex items-center  transition-all duration-500 hover:bg-sky-800`}>
          PEDIR MINHA PIZZA
        </li>
        <li className={`cursor-pointer h-full flex items-center p-3 transition-all duration-500 hover:bg-sky-800`}>
          CARDÁPIO
        </li>
        <li className={`cursor-pointer h-full flex items-center p-3  transition-all duration-500 hover:bg-sky-800`}>
          PROMOÇÕES
        </li>
        <li className={`cursor-pointer h-full flex items-center  transition-all duration-500 hover:bg-sky-800`}>
          ACOMPANHAR PEDIDO
        </li>
        <li className={`mx-3 border-2 rounded min-w-32`}>
          <button className='p-2  flex items-center transition-all duration-500 hover:bg-sky-900'>
            <img src={local} className='w-8 invert' />
            VEJA A DOMINO'S MAIS PRÓXIMA
          </button>
        </li>
      </ul>
    </nav>
  )

}

export default Menu