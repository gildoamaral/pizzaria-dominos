import menuIcon from '../../../assets/menuIcon.png'
import useMenuContext from '../../../contexts/useMenuContext'



const MenuButton = () => {
  const {toggleMenu} = useMenuContext()


  return <img onClick={toggleMenu} src={menuIcon} className={`sm:hidden invert h-12 cursor-pointer transition-all rounded-full`}/>
}

export default MenuButton