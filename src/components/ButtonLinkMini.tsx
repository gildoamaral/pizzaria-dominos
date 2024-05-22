import { ReactNode } from 'react'

const ButtonLinkMini = ({ children}: { children: ReactNode }) => {
  return (
    <div className='mb-3 uppercase'>
      <a href="">
        <h1
          className={`bg-red-600 hover:bg-red-800 text-lg text-white h-9 flex items-center justify-center w-28 transition-all duration-500`}
        >
          {children}
        </h1>
      </a>
    </div>
  )
}

export default ButtonLinkMini