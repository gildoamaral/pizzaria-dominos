import { useContext } from 'react';
import { IsMobileContext } from './IsMobile';

export const useIsMobileContext = () => {
    const isMobile: boolean = useContext<boolean>(IsMobileContext);

    return isMobile;
};
