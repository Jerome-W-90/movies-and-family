/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Navigation from './ Navigation/Navigation';

// Import du style
import s from './AppStyle';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        };
    }

    render() {
        return (
            <>
                <Navigation />
            </>
        );
    }
};


export default App;
