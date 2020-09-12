import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ColorService from '../../common/services/ColorService';
import {connect} from 'react-redux';
import MultipleDistrictDetailsScreen from './MultipleDistrictDetailsScreen';
import MultipleDistrictOfficersScreen from './MultipleDistrictOfficersScreen';

const MultipleDistrictDetailsMainScreen: () => React$Node = (props) => {
    let Tab = createMaterialTopTabNavigator();

    return (
        <>
            <Tab.Navigator tabBarOptions={{
                indicatorStyle: {
                    backgroundColor: ColorService.PRIMARY_COLOR,
                },
            }}>
                <Tab.Screen name="MD 306 Details" component={MultipleDistrictDetailsScreen}/>
                <Tab.Screen name="MD 306 Council" component={MultipleDistrictOfficersScreen}/>
            </Tab.Navigator>
        </>
    );
};

let mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps)(MultipleDistrictDetailsMainScreen);
