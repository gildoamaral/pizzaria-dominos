import { ReactNode } from 'react'
import MainBg from '../../MainBg'

const HeaderContainer = ({ children }: { children: ReactNode }) => {
  return (
    <>
    <header className={`fixed sm:h-20 h-12 w-screen bg-sky-700 flex justify-center shadow-custom-header `}>
      <MainBg >
        <div className='sm:px-4  w-full flex items-center justify-between text-white text-lg leading-none text-center '>
          {children}
        </div>
      </MainBg>
    </header>
    <div className='h-28'></div>
    </>

  )
}

export default HeaderContainer