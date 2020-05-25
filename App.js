/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import React from 'react';
import MainScreen from "./app/core/MainScreen";

const App: () => React$Node = () => {
    return (
        <>
            <MainScreen/>
        </>
    );
};

export default App;
