import { useIsMobileContext } from '../../../contexts/useIsMobileContext'
import cart from '../../../assets/cart.png'

const Cart = () => {
  const isMobile = useIsMobileContext()

  return isMobile ? (

    <div className="flex items-center justify-center pr-4 xs:pr-0">
    <div className='overflow-hidden w-12 relative'>
      <span className='bg-red-600 h-4 w-4 absolute z-10 rounded-full right-0 top-1 text-xs'>0</span>
      <img src={cart} alt="cart" className='h-10 object-cover scale-x-[-1]' />
    </div>
    <h6 className='text-sm'>CARRINHO</h6>
  </div>

  ) : (

    <div className="w-20 ">
    <div className='overflow-hidden h-10 relative'>
        <span className='bg-red-600 h-5 w-5 absolute z-10 rounded-full right-3 text-sm'>0</span>
        <img src={cart} alt="cart" className='scale-x-[-1]' />
    </div>
    <h6>CARRINHO</h6>
</div>

  )
}

export default Cart