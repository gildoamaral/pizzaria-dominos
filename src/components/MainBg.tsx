import { ReactNode } from 'react';

const MainBg = ({ children }: {children: ReactNode}) => {
    return (
    <div className='max-w-5xl flex px-4 '>
        {children}
    </div>
)};

export default MainBg;
