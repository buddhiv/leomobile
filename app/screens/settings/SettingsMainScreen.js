import React from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SettingsListScreen from './SettingsListScreen';
import ColorService from '../../common/services/ColorService';
import DrawerLeftButtonComponent from '../../common/components/DrawerLeftButtonComponent';

const SettingsMainScreen: () => React$Node = (props) => {
    const Stack = createStackNavigator();

    return (
        <>
            <Stack.Navigator initialRouteName={'SettingsList'}
                             screenOptions={{
                                 headerTintColor: 'white',
                                 headerStyle: {
                                     backgroundColor: ColorService.SECONDARY_COLOR_DARK,
                                 },
                             }}>
                <Stack.Screen name="Settings List" component={SettingsListScreen}
                              options={({navigation}) => ({
                                  headerLeft: () => (
                                      <DrawerLeftButtonComponent onPress={navigation.toggleDrawer}/>
                                  ),
                              })}/>
            </Stack.Navigator>
        </>
    );
};

export default SettingsMainScreen;
