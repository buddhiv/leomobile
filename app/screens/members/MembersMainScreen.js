import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import SearchMemberScreen from "./SearchMemberScreen";
import MemberDetailsScreen from "./MemberDetailsScreen";

const MembersMainScreen: () => React$Node = (props) => {
    const Stack = createStackNavigator();

    return (
        <>
            <Stack.Navigator initialRouteName={'Search Member'}>
                <Stack.Screen name="Search Menber" component={SearchMemberScreen}/>
                <Stack.Screen name="Member Details" component={MemberDetailsScreen}/>
            </Stack.Navigator>
        </>
    )
}

export default MembersMainScreen;
