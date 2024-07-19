import React from 'react';
import Routes from "routes";
import Provider from 'context';
import {SnackbarProvider} from 'notistack';


const App = () => {
    return (
        <Provider>
            <SnackbarProvider maxSnack={3}
                              anchorOrigin={{
                                  vertical: 'bottom',
                                  horizontal: 'right',
                              }}>
                <Routes/>
            </SnackbarProvider>
        </Provider>)
}

export default App;
