import { createContext, useState, useEffect, ReactNode } from 'react';

export const IsMobileContext = createContext<boolean>(false);

export const IsMobileContextProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const [pageWidth, setPageWidth] = useState<number>(window.innerWidth);
    const isMobile: boolean = (pageWidth < 640) as boolean;

    useEffect(() => {
        function handleResize() {
            setPageWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <IsMobileContext.Provider value={isMobile}>
            {children}
        </IsMobileContext.Provider>
    );
};
