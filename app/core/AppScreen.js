import React from 'react';
import {BackHandler, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProjectsMainScreen from '../screens/projects/ProjectsMainScreen';
import ClubsMainScreen from '../screens/clubs/ClubsMainScreen';
import MyProfileMainScreen from '../screens/myProfile/MyProfileMainScreen';
import MembersMainScreen from '../screens/members/MembersMainScreen';
import InitService from '../lib/services/InitService';
import DrawerContentComponent from './DrawerContentComponent';
import DashboardScreen from '../screens/dashboard/DashboardScreen';

class AppScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    getCustomDrawer = (props) => {
        return <DrawerContentComponent {...props}/>;
    };

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const AppDrawer = createDrawerNavigator();

        return (
            <>
                <AppDrawer.Navigator drawerType={'front'} unmountOnBlur={true} backBehavior={'initialRoute'}
                                     initialRouteName={'Dashboard'}
                                     drawerContent={this.getCustomDrawer}
                >
                    <AppDrawer.Screen name="Dashboard" component={DashboardScreen}/>
                    <AppDrawer.Screen name="My Profile" component={MyProfileMainScreen}/>
                    <AppDrawer.Screen name="Projects" component={ProjectsMainScreen}/>
                    <AppDrawer.Screen name="Clubs" component={ClubsMainScreen}/>
                    <AppDrawer.Screen name="Members" component={MembersMainScreen}/>
                </AppDrawer.Navigator>
            </>
        );
    }
};

export default AppScreen;
