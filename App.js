/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import 'react-native-gesture-handler';
import React from 'react';
import MainScreen from './app/screens/core/MainScreen';
import {Provider} from 'react-redux';
import configureStore from './app/redux/store/ConfigureStore';




const store = configureStore();

const App: () => React$Node = () => {
    return (
        <>
            <Provider store={store}>
                <MainScreen/>
            </Provider>
        </>
    );
};

export default App;
