import useMenuContext from '../../../contexts/useMenuContext'
import { motion } from 'framer-motion';
import person from '../../../assets/person.png'
import { X } from 'react-feather';



const MenuMobile = () => {
  const { menuVisible, toggleMenu } = useMenuContext()
  return (
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

        <a>
          <div className='p-4 pb-5 flex justify-center gap-8 items-center bg-sky-800'>
            <img src={person} alt="person" className='h-7 invert' />
            <h4 className='text-base'>FAZER LOGIN</h4>
          </div>
        </a>

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
  )
}

export default MenuMobile