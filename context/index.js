import { useContext, useEffect, useState, createContext } from "react";

export const MenuitemsContext = createContext();
export const StateMenuItemsContext = ({children}) => (
  <MenuitemsContext.Provider value={useState({})}>
    {children}
  </MenuitemsContext.Provider>
);
export const useMenuItemsContext = () => useContext(MenuitemsContext);

export const useMenuItems = (item, sectionEL) => {
  const [menuItems, dispatch] = useMenuItemsContext();
  
  useEffect(() => {
    if (!menuItems[item]) {
      menuItems[item] = sectionEL;
    }
  },[menuItems])

  return menuItems;
}