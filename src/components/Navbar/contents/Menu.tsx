import { useIsMobileContext } from '../../../contexts/useIsMobileContext';
import local from '../../../assets/local.png';
import { X } from 'react-feather';
import Logo from './Logo';
import Login from './Login';
import useMenuContext from '../../../contexts/useMenuContext';
import { motion } from 'framer-motion';


const Menu = () => {
  const isMobile = useIsMobileContext()
  const { menuVisible, toggleMenu } = useMenuContext()


  return isMobile ? (


    // Navbar Suspenso Mobile
    <>
      {menuVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'spring', damping: 30 }}
          className="fixed inset-0 bg-white bg-opacity-75 z-40 cursor-pointer" onClick={toggleMenu}></motion.div>
      )}

      <motion.nav
        initial={{ x: '-100%' }}
        animate={{ x: menuVisible ? 0 : '-200%' }}
        transition={{ type: 'spring', stiffness: 200, damping: 30 }}
        className={`bg-sky-600 absolute  left-0 top-0 h-screen w-48 z-50 font-pathway-gothic font-semibold shadow-custom-right border-sky-800`}>

        <div className='text-end pr-3 pt-3 bg-sky-800'>
          <button onClick={toggleMenu}>
            <X className="h-5 text-white" />
          </button>
        </div>

        <Login />

        <ul className={'p-5 leading-6'}>
          <li className={`cursor-pointer p-1 h-full flex items-center  transition-all duration-500 hover:bg-sky-800 `}>
            Pedir minha pizza
          </li>
          <li className={`cursor-pointer p-1 h-full flex items-center  transition-all duration-500 hover:bg-sky-800`}>
            Cardápio
          </li>
          <li className={`cursor-pointer p-1 h-full flex items-center  transition-all duration-500 hover:bg-sky-800`}>
            PROMOÇÕES
          </li>
          <li className={`cursor-pointer p-1 h-full flex items-center  transition-all duration-500 hover:bg-sky-800`}>
            Acompanhar pedido
          </li>
        </ul>
      </motion.nav>
    </>

  ) : (

    // Elementos do Navbar Comum
    <nav className={'h-full'}>
      
      <ul className={'flex justify-between items-center h-full '}>
        <li className={`mx-3`}>
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