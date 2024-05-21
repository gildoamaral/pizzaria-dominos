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
    <>
      {menuVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'spring', damping: 30 }}
          className="fixed inset-0 bg-white bg-opacity-75 z-40" onClick={toggleMenu}></motion.div>
      )}

      <motion.nav
        initial={{ x: '-100%' }}
        animate={{ x: menuVisible ? 0 : '-100%' }}
        transition={{ type: 'spring', stiffness: 200, damping: 30 }}
        className={`bg-sky-600 absolute  left-0 top-0 h-screen w-48 z-50 font-pathway-gothic font-semibold border-r-4 border-sky-800`}>

        <div className='text-end pr-3 pt-3 bg-sky-800'>
          <button onClick={toggleMenu}>
            <X className="h-5 text-white" />
          </button>
        </div>

        <Login />

        <ul className={'p-5 leading-6'}>
          <li className={`cursor-pointer p-1 h-full flex items-center  transition-all duration-500 hover:bg-sky-800 mb-2 `}>
            Pedir minha pizza
          </li>
          <li className={`cursor-pointer p-1 h-full flex items-center  transition-all duration-500 hover:bg-sky-800 mb-2`}>
            Cardápio
          </li>
          <li className={`cursor-pointer p-1 h-full flex items-center  transition-all duration-500 hover:bg-sky-800 mb-2`}>
            PROMOÇÕES
          </li>
          <li className={`cursor-pointer p-1 h-full flex items-center  transition-all duration-500 hover:bg-sky-800 mb-2`}>
            Acompanhar pedido
          </li>
        </ul>
      </motion.nav>
    </>

  ) : (

    <nav className={'h-full'}>
      <ul className={'flex justify-between items-center h-full '}>
        <li className={`mx-3`}>
          <Logo />
        </li>
        <li className={`cursor-pointer h-full flex items-center  transition-all duration-500 hover:bg-sky-800 mb-2`}>
          PEDIR MINHA PIZZA
        </li>
        <li className={`cursor-pointer h-full flex items-center p-3 transition-all duration-500 hover:bg-sky-800 mb-2`}>
          CARDÁPIO
        </li>
        <li className={`cursor-pointer h-full flex items-center p-3  transition-all duration-500 hover:bg-sky-800 mb-2`}>
          PROMOÇÕES
        </li>
        <li className={`cursor-pointer h-full flex items-center  transition-all duration-500 hover:bg-sky-800 mb-2`}>
          ACOMPANHAR PEDIDO
        </li>
        <li className={`mx-3 border-2 rounded mb-2 min-w-28`}>
          <button className='p-2  flex items-center  transition-all duration-500 hover:bg-sky-900'>
            <img src={local} className='w-8 invert' />
            VEJA A DOMINO'S MAIS PRÓXIMA
          </button>
        </li>
      </ul>
    </nav>
  )

}

export default Menu