import React from 'react';
import {View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MultipleDistrictDetailsComponent from './components/MultipleDistrictDetailsComponent';
import MultipleDistrictOfficersComponent from './components/MultipleDistrictOfficersComponent';
import ColorService from '../../common/services/ColorService';
import UserService from '../../common/services/UserService';
import MultipleDistrictAPIService from './services/MultipleDistrictAPIService';
import MemberDetailsService from '../members/services/MemberDetailsService';
import Layout from '../../common/Layout';

class MultipleDistrictDetailsMainScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            multipleDistrict: {},
            loading: true,
        };
    }

    componentDidMount(): void {
        this.getMultipleDistrictDetails(this.state.districtId);
    }

    getMultipleDistrictDetails = async (districtId) => {
        try {
            let currentUser = UserService.getCurrentUser();
            let multipleDistrictResult = await MultipleDistrictAPIService.getMultipleDistrictDetailsApi(MemberDetailsService.getMultipleDistrictId(currentUser));

            if (!multipleDistrictResult.data.error) {
                this.setState({
                    multipleDistrict: multipleDistrictResult.data.data,
                    loading: false,
                });
            }
        } catch (e) {
            console.log(e);
            this.setState({
                loading: false,
            });
        }
    };

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        let Tab = createMaterialTopTabNavigator();

        return (
            <>
                <Layout loading={this.state.loading} scrollEnabled={false}>

                    {this.state.multipleDistrict.multipleDistrict ? <Tab.Navigator tabBarOptions={{
                        indicatorStyle: {
                            backgroundColor: ColorService.PRIMARY_COLOR,
                        },
                    }}>
                        <Tab.Screen name="MD 306 Details" component={MultipleDistrictDetailsComponent}
                                    initialParams={{multipleDistrict: this.state.multipleDistrict}}/>
                        <Tab.Screen name="MD 306 Council" component={MultipleDistrictOfficersComponent}
                                    initialParams={{multipleDistrict: this.state.multipleDistrict}}/>
                    </Tab.Navigator> : <View></View>}

                </Layout>
            </>
        );
    }
};

export default MultipleDistrictDetailsMainScreen;
