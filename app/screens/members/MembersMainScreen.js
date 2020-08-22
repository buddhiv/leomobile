import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MembersScreen from './MembersScreen';
import MemberDetailsScreen from './MemberDetailsScreen';
import MembersFilterScreen from './MembersFilterScreen';
import ColorService from '../../common/services/ColorService';
import DrawerLeftButtonComponent from '../../common/components/DrawerLeftButtonComponent';

const MembersMainScreen: () => React$Node = (props) => {
    const Stack = createStackNavigator();

    return (
        <>
            <Stack.Navigator initialRouteName={'Search Member'}
                             screenOptions={{
                                 headerTintColor: 'white',
                                 headerStyle: {
                                     backgroundColor: ColorService.SECONDARY_COLOR_DARK,
                                 },
                             }}>
                <Stack.Screen name="Members" component={MembersScreen}
                              options={({navigation}) => ({
                                  headerLeft: () => (
                                      <DrawerLeftButtonComponent onPress={navigation.toggleDrawer}/>
                                  ),
                              })}/>
                <Stack.Screen name="Member Details" component={MemberDetailsScreen}/>
                <Stack.Screen name="Filter Members" component={MembersFilterScreen}/>
            </Stack.Navigator>
        </>
    );
};

export default MembersMainScreen;
