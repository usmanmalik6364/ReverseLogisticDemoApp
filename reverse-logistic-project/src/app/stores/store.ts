import { createContext, useContext } from "react";
import ProductStore from "./productstore";
import CommonStore from "./commonStore";  // Import the new CommonStore

interface Store {
  productStore: ProductStore;
  commonStore: CommonStore;  // Include CommonStore in the global store interface
}

export const store: Store = {
  productStore: new ProductStore(),
  commonStore: new CommonStore(),  // Instantiate CommonStore in the global store
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
