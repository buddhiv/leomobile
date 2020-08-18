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

import * as Sentry from '@sentry/react-native';

Sentry.init({ 
  dsn: 'https://4b644d40738f496c84fe3a65b80e38dd@o435475.ingest.sentry.io/5394846', 
});


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
