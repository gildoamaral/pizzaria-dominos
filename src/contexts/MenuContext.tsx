import { createContext, useState, ReactNode } from 'react';


export interface MenuContextType {
  menuVisible: boolean;
  toggleMenu: () => void;
}

export const MenuContext = createContext<MenuContextType | undefined>(undefined);


export const MenuContextProvider = ({ children }: { children: ReactNode}) => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuVisible(prevMenuVisible => !prevMenuVisible);
  };

  return (
    <MenuContext.Provider value={{ menuVisible, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
