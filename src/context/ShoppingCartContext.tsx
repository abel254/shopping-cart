import { Children, createContext, ReactNode, useContext } from "react";

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

type ShoppingCatProviderProps = {
    children: ReactNode
}
export function ShoppingCatProvider({children}: ShoppingCatProviderProps){
    return(
        <ShoppingCartContext.Provider value={{}}>{children}</ShoppingCartContext.Provider>
    )
}