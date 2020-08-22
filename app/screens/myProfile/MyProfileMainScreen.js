import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyHistoryScreen from './MyHistoryScreen';
import MemberDetailsScreen from '../members/MemberDetailsScreen';
import {Text} from 'react-native';
import EditMemberDetailsScreen from '../members/EditMemberDetailsScreen';
import ColorService from '../../common/services/ColorService';
import DrawerLeftButtonComponent from '../../common/components/DrawerLeftButtonComponent';

const MyProfileMainScreen: () => React$Node = (props) => {
    const Stack = createStackNavigator();

    return (
        <>
            <Stack.Navigator initialRouteName={'My Profile'}
                             screenOptions={{
                                 headerTintColor: 'white',
                                 headerStyle: {
                                     backgroundColor: ColorService.SECONDARY_COLOR_DARK,
                                 },
                             }}>
                <Stack.Screen name="My Profile" component={MemberDetailsScreen}
                              initialParams={{mode: 'my'}}
                              options={({navigation}) => ({
                                  headerLeft: () => (
                                      <DrawerLeftButtonComponent onPress={navigation.toggleDrawer}/>
                                  ),
                              })}/>
                <Stack.Screen name="Edit Profile" component={EditMemberDetailsScreen}
                              initialParams={{mode: 'my'}}/>
            </Stack.Navigator>
        </>
    );
};

export default MyProfileMainScreen;
