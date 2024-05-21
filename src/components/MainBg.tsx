import { ReactNode } from 'react';

const MainBg = ({ children, col }: {children: ReactNode, col?: boolean}) => {
    return (
    <div className={`max-w-5xl w-full flex px-4 ${col ? 'flex-col items-center justify-center' : ''}`} >
        {children}
    </div>
)};

export default MainBg;
