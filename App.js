/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

/**
 * Imports
 */
import React from 'react';
import Navigation from './ Navigation/Navigation';
import { Provider } from 'react-redux';
import Store from './Store/configStore';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

class App extends React.Component {
    render() {
        let persistor = persistStore(Store);

        return (
            <Provider store={Store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Navigation />
                </PersistGate>
            </Provider>
        );
    }
};


export default App;
