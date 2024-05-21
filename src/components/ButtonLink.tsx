import { ReactNode } from 'react'

const ButtonLink = ({ children, textXl }: { children: ReactNode, textXl?: boolean }) => {
  return (
    <div className='mb-3 uppercase'>
      <a href="">
        <h1
          className={`bg-red-600 hover:bg-red-800 hover:shadow-none text-3xl text-white shadow-custom-bottom h-9 flex items-center justify-center ${textXl ? 'text-xl' : ''}`}
        >
          {children}
        </h1>
      </a>
    </div>
  )
}

export default ButtonLink