import React from 'react';
import useCombinedReducers from 'hooks/use-combine-reducers';
import {StoreContext} from 'hooks/use-store';

/**
 * @Component
 */
const Provider = ({children}) => {
    const {store, reducers} = useCombinedReducers();

    const triggerDispatches = (action) => {
        for (let i = 0; i < reducers.length; i++) {
            reducers[i](action);
        }
    };

    return (
        <StoreContext.Provider
            value={{
                store,
                dispatch: triggerDispatches,
            }}>
            {children}
        </StoreContext.Provider>
    );
};


export default Provider;
