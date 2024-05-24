import logo from '../../../assets/logo.png'

const Logo = () => {
  return (
    <div className='w-10 overflow-hidden sm:ml-0  ml-14'>
      <img src={logo} alt="" className='h-14 w-20 object-cover' />
    </div>
  )
}

export default Logo