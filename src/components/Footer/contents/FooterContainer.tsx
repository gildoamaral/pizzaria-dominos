import { ReactNode } from 'react'
import MainBg from '../../MainBg'

const FooterContainer = ({ children }: { children: ReactNode }) => {
  return (
    <footer className='flex justify-center mt-10 py-12 bg-stone-300'>
      <MainBg col>
        <div className='flex flex-col lg:px-10 sm:px-0 px-12 font-pathway-gothic '>
          {children}
        </div>
      </MainBg>
    </footer>
  )
}

export default FooterContainer