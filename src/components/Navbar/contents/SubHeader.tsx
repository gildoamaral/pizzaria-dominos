import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SubHeader = ({ local }: { local?: boolean }) => {
  return (
    <div className='sm:hidden top-12 fixed w-screen min-h-6 bg-slate-50 flex justify-between items-center shadow-md px-5 pr-8  '>
      {local && (
        <>
          <h1 className='text-sky-700 py-2 font-roboto-condensed font-bold'>ACOMPANHAR PEDIDO</h1>
          <FontAwesomeIcon icon={faLocationDot} size='xl' className='text-sky-700' />
        </>
      )}

    </div>
  )
}

export default SubHeader