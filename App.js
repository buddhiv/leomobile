/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import MainScreen from './app/screens/core/MainScreen';
import {Provider} from 'react-redux';
import configureStore from './app/redux/store/ConfigureStore';

import SplashScreen from 'react-native-splash-screen';

const store = configureStore();

const App: () => React$Node = () => {

    useEffect(() => {
        // SplashScreen.hide();
    }, []);

    return (
        <>
            <Provider store={store}>
                <MainScreen/>
            </Provider>
        </>
    );
};

export default App;
