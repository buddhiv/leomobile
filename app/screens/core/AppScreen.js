import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProjectsMainScreen from '../projects/ProjectsMainScreen';
import ClubsMainScreen from '../clubs/ClubsMainScreen';
import MyProfileMainScreen from '../myProfile/MyProfileMainScreen';
import MembersMainScreen from '../members/MembersMainScreen';
import DrawerContentComponent from '../../common/components/DrawerContentComponent';
import DashboardScreen from '../dashboard/DashboardScreen';
import DistrictsMainScreen from '../districts/DistrictsMainScreen';
import MultipleDistrictMainScreen from '../multipleDistrict/MultipleDistrictMainScreen';
import DocumentsMainScreen from '../documents/DocumentsMainScreen';
import SettingsListScreen from '../settings/SettingsListScreen';
import SettingsMainScreen from '../settings/SettingsMainScreen';

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
                                     drawerContent={this.getCustomDrawer}>
                    <AppDrawer.Screen name="Dashboard" component={DashboardScreen}/>
                    <AppDrawer.Screen name="My Profile" component={MyProfileMainScreen}/>
                    <AppDrawer.Screen name="Projects" component={ProjectsMainScreen}/>
                    <AppDrawer.Screen name="Clubs" component={ClubsMainScreen}/>
                    <AppDrawer.Screen name="Districts" component={DistrictsMainScreen}/>
                    <AppDrawer.Screen name="MD 306" component={MultipleDistrictMainScreen}/>
                    <AppDrawer.Screen name="Members" component={MembersMainScreen}/>
                    <AppDrawer.Screen name="Documents" component={DocumentsMainScreen}/>
                    <AppDrawer.Screen name="Settings" component={SettingsMainScreen}/>
                </AppDrawer.Navigator>
            </>
        );
    }
};

export default AppScreen;
