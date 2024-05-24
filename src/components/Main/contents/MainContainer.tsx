import { ReactNode } from 'react'
import MainBg from '../../MainBg'

const MainContainer = ({ children }: { children: ReactNode }) => {
  return (
    <main className='flex justify-center'>
      <MainBg col>
        {children}
      </MainBg>

    </main>
  )
}

export default MainContainer