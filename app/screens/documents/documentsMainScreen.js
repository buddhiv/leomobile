import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DocumentsScreen from './DocumentsScreen';

const DocumentsMainScreen: () => React$Node = (props) => {
    const Stack = createStackNavigator();

    return (
        <>
            <Stack.Navigator initialRouteName={'Districts'}>
                <Stack.Screen name="Documents" component={DocumentsScreen}/>
            </Stack.Navigator>
        </>
    );
};

export default DocumentsMainScreen;
