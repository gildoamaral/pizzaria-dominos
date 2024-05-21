import { useContext } from 'react';
import { IsMobileContext } from './IsMobileContext';

export const useIsMobileContext = () => {
    const isMobile: boolean = useContext<boolean>(IsMobileContext);

    return isMobile;
};
