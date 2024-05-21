import { useContext } from 'react';
import { MenuContext, MenuContextType } from './MenuContext';


const useMenuContext = (): MenuContextType => {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuContextProvider');
  }
  return context;
};

export default useMenuContext;