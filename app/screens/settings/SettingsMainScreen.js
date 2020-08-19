import React from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SettingsListScreen from './SettingsListScreen';
import ColorService from '../../common/services/ColorService';

const SettingsMainScreen: () => React$Node = (props) => {
    const Stack = createStackNavigator();

    return (
        <>
            <Stack.Navigator initialRouteName={'SettingsList'}
                             screenOptions={{
                                 headerTintColor: 'white',
                                 headerStyle: {
                                     backgroundColor: ColorService.PRIMARY_COLOR,
                                 },
                             }}>
                <Stack.Screen name="Settings List" component={SettingsListScreen}/>
            </Stack.Navigator>
        </>
    );
};

export default SettingsMainScreen;
