import React from 'react';
import {
    View,
    Text, FlatList, ScrollView, StyleSheet, Button,
} from 'react-native';
import Layout from '../../common/Layout';
import DistrictsAPIService from './services/DistrictsAPIService';
import DistrictsListRowComponent from './components/DistrictsListRowComponent';
import CardComponent from '../../common/components/CardComponent';
import DistrictProfilePictureComponent from './components/DistrictProfilePictureComponent';
import TouchableComponent from '../../common/components/TouchableComponent';
import IconComponent from '../../common/components/IconComponent';
import TableComponent from '../../common/components/TableComponent';
import MemberProfilePictureComponent from '../members/components/MemberProfilePictureComponent';
import MemberDetailsService from '../members/services/MemberDetailsService';
import DistrictDetailsService from './services/DistrictDetailsService';
import DistrictDirectoryItemComponent from './components/DistrictDirectoryItemComponent';
import ColorService from '../../common/services/ColorService';
import {connect} from 'react-redux';

class DistrictOfficersScreen extends React.Component {
    constructor(props) {
        super(props);

        this.districtId = props.route.params.districtId;

        this.state = {
            districtId: this.districtId,
            directory: [],
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
                directory: districtResult.data.data.directory,
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

    goToMemberDetails = (memberId) => {
        this.props.navigation.navigate('Member Details', {
            memberId: memberId,
        });
    };

    goToManageDistrictOfficers = () => {

    };

    isDistrictEditable = () => {
        //TODO: need to be improved
        return true;
    };

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Layout loading={this.state.loading} scrollEnabled={true}>
                <View style={{padding: 15}}>
                    {DistrictDetailsService.isDistrictKeyOfficersAdded(this.state.directory) ?
                        <CardComponent cardStyle={{padding: 0}}>
                            <View style={{
                                padding: 15,
                                borderBottomWidth: StyleSheet.hairlineWidth,
                                borderBottomColor: '#dddddd',
                            }}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <View style={{flex: 1}}>
                                        <Text style={{fontWeight: 'bold'}}>District Key Officers</Text>
                                    </View>

                                    {this.isDistrictEditable() ? <TouchableComponent onPress={this.goToManageDistrictOfficers}>
                                        <IconComponent.MaterialCommunityIcons name={'playlist-edit'} size={18}
                                                                              color={ColorService.SECONDARY_COLOR_DARK}/>
                                    </TouchableComponent> : null}
                                </View>

                                <View>
                                    {
                                        this.state.directory.map((directoryItem, index) => {
                                            return <DistrictDirectoryItemComponent directoryItem={directoryItem}
                                                                                   key={index}
                                                                                   onPressProfilePicture={this.goToMemberDetails}
                                            />;
                                        })
                                    }
                                </View>
                            </View>
                        </CardComponent> : <View style={{flex: 1, alignItems: 'center', marginVertical: 50}}>
                            <Text style={{color: '#777777', textAlign: 'center'}}>
                                No District Council Appointed.
                            </Text>
                        </View>}
                </View>
            </Layout>
        );
    }
};

let mapStateToProps = state => ({
    user: state.user,
    permissions: state.permissions,
});

export default connect(mapStateToProps)(DistrictOfficersScreen);
