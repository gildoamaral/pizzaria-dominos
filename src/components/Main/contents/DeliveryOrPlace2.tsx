
import ButtonLinkMini from '../../ButtonLinkMini'

const DeliveryOrPlace2 = () => {
  return (
    <div className='bg-sky-600 min-h-28 w-full p-2 mb-10 rounded-lg flex flex-col items-center justify-evenly gap-2'>
    <h1 className='text-white leading-9 text-4xl text-center'>ESCOLHA SUA FORMA DE ENTREGA</h1>
    <div className='flex items-center gap-4'>
      <ButtonLinkMini>Delivery</ButtonLinkMini>
      <span className='text-white pb-3 font-pathway-gothic font-semibold'>ou</span>
      <ButtonLinkMini>buscar na loja</ButtonLinkMini>
    </div>
  </div>
  )
}

export default DeliveryOrPlace2