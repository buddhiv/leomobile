import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DocumentsScreen from './DocumentsScreen';
import SingleDocumentsScreen from './SingleDocumentScreen';

const DocumentsMainScreen: () => React$Node = (props) => {
    const Stack = createStackNavigator();

    return (
        <>
            <Stack.Navigator initialRouteName={'Documents'}>
                <Stack.Screen name="Documents" component={DocumentsScreen}/>
                <Stack.Screen name="Document" component={SingleDocumentsScreen}/>
            </Stack.Navigator>
        </>
    );
};

export default DocumentsMainScreen;
