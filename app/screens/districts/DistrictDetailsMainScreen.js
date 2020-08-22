import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ColorService from '../../common/services/ColorService';
import DistrictsAPIService from './services/DistrictsAPIService';
import Layout from '../../common/Layout';
import {View} from 'react-native';
import DistrictDetailsComponent from './components/DistrictDetailsComponent';
import DistrictOfficersComponent from './components/DistrictOfficersComponent';

class DistrictDetailsMainScreen extends React.Component {
    constructor(props) {
        super(props);

        this.districtId = props.route.params.districtId;

        this.state = {
            districtId: this.districtId,
            district: {},
            loading: true,
        };
    }

    componentDidMount(): void {
        this.getDistrictDetails(this.state.districtId);
    }

    getDistrictDetails = async (districtId) => {
        try {
            let districtResult = await DistrictsAPIService.getDistrictDetailsApi(districtId);

            let stateObj = {
                district: districtResult.data.data,
                loading: false,
            };

            if (!districtResult.data.error) {
                this.setState(stateObj);
            }
        } catch (e) {
            console.log(e);
            this.setState({
                loading: false,
            });
        }
    };

    render() {
        let Tab = createMaterialTopTabNavigator();

        return (
            <>
                <Layout loading={this.state.loading} scrollEnabled={false}>

                    {this.state.district.district ? <Tab.Navigator tabBarOptions={{
                        indicatorStyle: {
                            backgroundColor: ColorService.PRIMARY_COLOR,
                        },
                    }}>
                        <Tab.Screen name="District Details" component={DistrictDetailsComponent}
                                    initialParams={{district: this.state.district}}/>
                        <Tab.Screen name="District Council" component={DistrictOfficersComponent}
                                    initialParams={{district: this.state.district}}/>
                    </Tab.Navigator> : <View></View>}

                </Layout>
            </>
        );
    }
};

export default DistrictDetailsMainScreen;
