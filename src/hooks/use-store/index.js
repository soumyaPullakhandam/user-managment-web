import { useContext, createContext } from 'react';

export const defaultStore = {
    store: {},
    dispatch: () => {},
};

export const StoreContext = createContext(defaultStore);

export default () => useContext(StoreContext);
