import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DocumentsScreen from './DocumentsScreen';
import SingleDocumentsScreen from './SingleDocumentScreen';
import ColorService from '../../common/services/ColorService';

const DocumentsMainScreen: () => React$Node = (props) => {
    const Stack = createStackNavigator();

    return (
        <>
            <Stack.Navigator initialRouteName={'Documents'}
                             screenOptions={{
                                 headerTintColor: 'white',
                                 headerStyle: {
                                     backgroundColor: ColorService.PRIMARY_COLOR,
                                 },
                             }}>
                <Stack.Screen name="Documents" component={DocumentsScreen}/>
                <Stack.Screen name="Document" component={SingleDocumentsScreen} options={({ route }) => ({ title: route.params.name })}/>
            </Stack.Navigator>
        </>
    );
};

export default DocumentsMainScreen;
