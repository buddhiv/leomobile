import React from 'react';
import {
    View,
    Text, StyleSheet, Linking, Button, ScrollView,
} from 'react-native';
import Layout from '../../common/Layout';

import CardComponent from '../../common/components/CardComponent';
import IconComponent from '../../common/components/IconComponent';
import TouchableComponent from '../../common/components/TouchableComponent';
import TableComponent from '../../common/components/TableComponent';
import moment from 'moment';
import UserService from '../../common/services/UserService';
import TextWidget from '../../common/widgets/TextWidget';
import PickerWidget from '../../common/widgets/PickerWidget';
import DatePickerWidget from '../../common/widgets/DatePickerWidget';
import Toast from 'react-native-toast-message';
import ToastService from '../../common/services/ToastService';
import ColorService from '../../common/services/ColorService';
import MembersAPIService from '../members/services/MembersAPIService';
import MemberDetailsService from '../members/services/MemberDetailsService';
import DistrictDetailsService from '../districts/services/DistrictDetailsService';
import ClubDetailsService from './services/ClubDetailsService';
import ClubsAPIService from './services/ClubsAPIService';

class EditClubDetailsScreen extends React.Component {
    constructor(props) {
        super(props);

        this.club = props.route.params.club;
        this.sectionName = props.route.params.sectionName;
        this.districtsList = DistrictDetailsService.formatDistrictsListForPicker(props.route.params.districtsList);
        this.regionsListWithZones = props.route.params.regionsList;
        this.regionsList = DistrictDetailsService.formatRegionsListForPicker(props.route.params.regionsList);
        this.saveCallback = props.route.params.saveCallback;

        this.state = {
            club: Object.assign({}, this.club),
            regionId: ClubDetailsService.getRegionId(this.club),
            zoneId: ClubDetailsService.getZoneId(this.club),
            zonesList: DistrictDetailsService.getZonesListForPickerFromRegionId(this.regionsListWithZones, ClubDetailsService.getRegionId(this.club)),
            loading: false,
        };
    }

    componentDidMount(): void {
    }

    cancelEditing = () => {
        this.props.navigation.goBack();
    };

    saveClubDetails = () => {
        this.setState({
            loading: true,
        }, async () => {
            try {
                let tempClubObj = {
                    id: this.state.club.id,
                    name: this.state.club.name,
                    website: this.state.club.website,
                    facebook: this.state.club.facebook,
                    instagram: this.state.club.instagram,
                    linkedin: this.state.club.linkedin,
                    twitter: this.state.club.twitter,
                };

                let saveResult = await ClubsAPIService.getSaveClubDetailsApi(tempClubObj);

                if (!saveResult.data.error) {
                    ToastService.showSuccessToast('Successfully Saved!');
                    await this.setState({club: saveResult.data.data, loading: false});

                    this.club = {...this.club, ...saveResult.data.data};
                    this.saveCallback(this.club);
                } else {x
                    ToastService.showErrorToast('Error Occurred!');
                }
            } catch (e) {
                console.log(e);

                ToastService.showErrorToast('Error Occurred!');
                this.setState({loading: false});
            }
        });
    };

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Layout loading={this.state.loading} scrollEnabled={false}>
                <View style={{flex: 1, justifyContent: 'space-between'}}>
                    <ScrollView>
                        <View style={{padding: 15}}>

                            {this.sectionName === 'general' ? <CardComponent>
                                <View style={{marginBottom: 10}}>
                                    <Text style={{fontWeight: 'bold'}}>General</Text>
                                </View>

                                <View>
                                    <TextWidget label={'Club Name'}
                                                value={this.state.club.name}
                                                onChangeText={(text) => {
                                                    this.state.club.name = text;
                                                    this.setState({
                                                        club: this.state.club,
                                                    });
                                                }}/>
                                </View>

                                <View style={{marginTop: 20}}>
                                    <TextWidget label={'Charter ID'}
                                                value={this.state.club.charterId}
                                                onChangeText={(text) => {
                                                    this.state.club.charterId = text;
                                                    this.setState({
                                                        club: this.state.club,
                                                    });
                                                }}/>
                                </View>

                                <View style={{marginTop: 20}}>
                                    <PickerWidget label={'District'}
                                                  data={this.districtsList}
                                                  selectedValue={this.state.club.districtId}
                                                  onValueChange={(itemValue, itemIndex) => {
                                                      this.state.club.districtId = itemValue;
                                                      this.setState({
                                                          club: this.state.club,
                                                      });
                                                  }}/>
                                </View>

                                <View style={{marginTop: 20}}>
                                    <PickerWidget label={'Region'}
                                                  data={this.regionsList}
                                                  selectedValue={this.state.regionId}
                                                  onValueChange={(itemValue, itemIndex) => {
                                                      this.setState({
                                                          regionId: itemValue,
                                                          zoneId: '',
                                                          zonesList: DistrictDetailsService.getZonesListForPickerFromRegionId(this.regionsListWithZones, itemValue),
                                                      });
                                                  }}/>
                                </View>

                                <View style={{marginTop: 20}}>
                                    <PickerWidget label={'Zone'}
                                                  data={this.state.zonesList}
                                                  selectedValue={this.state.zoneId}
                                                  onValueChange={(itemValue, itemIndex) => {
                                                      this.setState({
                                                          zoneId: itemValue,
                                                      });
                                                  }}/>
                                </View>

                                {/*<View style={{marginTop: 20}}>*/}
                                {/*    <PickerWidget label={'Lions Club'}*/}
                                {/*                  data={MemberDetailsService.getGenderValues()}*/}
                                {/*                  selectedValue={this.state.club.lionsClubId}*/}
                                {/*                  onValueChange={(itemValue, itemIndex) => {*/}
                                {/*                      this.state.club.lionsClubId = itemValue;*/}
                                {/*                      this.setState({*/}
                                {/*                          club: this.state.club,*/}
                                {/*                      });*/}
                                {/*                  }}/>*/}
                                {/*</View>*/}
                            </CardComponent> : null}

                            {this.sectionName === 'social' ? <CardComponent>
                                <View style={{marginBottom: 10}}>
                                    <Text style={{fontWeight: 'bold'}}>Contact</Text>
                                </View>

                                <View>
                                    <TextWidget label={'Website'}
                                                value={this.state.club.website}
                                                onChangeText={(text) => {
                                                    this.state.club.website = text;
                                                    this.setState({
                                                        club: this.state.club,
                                                    });
                                                }}/>
                                </View>
                                <View style={{marginTop: 20}}>
                                    <TextWidget label={'Facebook'}
                                                value={this.state.club.facebook}
                                                onChangeText={(text) => {
                                                    this.state.club.facebook = text;
                                                    this.setState({
                                                        club: this.state.club,
                                                    });
                                                }}/>
                                </View>
                                <View style={{marginTop: 20}}>
                                    <TextWidget label={'Instagram'}
                                                value={this.state.club.instagram}
                                                onChangeText={(text) => {
                                                    this.state.club.instagram = text;
                                                    this.setState({
                                                        club: this.state.club,
                                                    });
                                                }}/>
                                </View>
                                <View style={{marginTop: 20}}>
                                    <TextWidget label={'LinkedIn'}
                                                value={this.state.club.linkedin}
                                                onChangeText={(text) => {
                                                    this.state.club.linkedin = text;
                                                    this.setState({
                                                        club: this.state.club,
                                                    });
                                                }}/>
                                </View>
                                <View style={{marginTop: 20}}>
                                    <TextWidget label={'Twitter'}
                                                value={this.state.club.twitter}
                                                onChangeText={(text) => {
                                                    this.state.club.twitter = text;
                                                    this.setState({
                                                        club: this.state.club,
                                                    });
                                                }}/>
                                </View>
                            </CardComponent> : null}

                        </View>

                    </ScrollView>

                    <View style={{flexDirection: 'row', paddingHorizontal: 15, paddingBottom: 10}}>
                        <View style={{flex: 1, marginRight: 5}}>
                            <Button title={'CANCEL'} onPress={this.cancelEditing}
                                    color={ColorService.SECONDARY_COLOR}/>
                        </View>
                        <View style={{flex: 1, marginLeft: 5}}>
                            <Button title={'SAVE'} onPress={this.saveClubDetails}
                                    color={ColorService.SECONDARY_COLOR}/>
                        </View>
                    </View>
                </View>
            </Layout>
        );
    }
};

export default EditClubDetailsScreen;
