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

class App extends React.Component {
    render() {
        return (
            <Provider store={Store}>
                <Navigation />
            </Provider>
        );
    }
};


export default App;
