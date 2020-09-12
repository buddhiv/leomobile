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
import DistrictsAPIService from './services/DistrictsAPIService';

class EditDistrictDetailsScreen extends React.Component {
    constructor(props) {
        super(props);

        this.district = props.route.params.district;
        this.sectionName = props.route.params.sectionName;
        this.saveCallback = props.route.params.saveCallback;

        this.state = {
            district: Object.assign({}, this.district),
            loading: false,
        };
    }

    componentDidMount(): void {
    }

    cancelEditing = () => {
        this.props.navigation.goBack();
    };

    saveDistrictDetails = async () => {
        await this.setState({loading: true});

        try {
            let tempDistrictObj = {
                id: this.state.district.id,
                name: this.state.district.name,
                website: this.state.district.website,
                facebook: this.state.district.facebook,
                instagram: this.state.district.instagram,
                linkedin: this.state.district.linkedin,
                twitter: this.state.district.twitter,
            };

            let saveResult = await DistrictsAPIService.getSaveDistrictDetailsAPI(tempDistrictObj);

            if (!saveResult.data.error) {
                ToastService.showSuccessToast('Successfully Saved!');
                await this.setState({district: saveResult.data.data, loading: false});

                this.district = {...this.district, ...saveResult.data.data};
                this.saveCallback(this.district);
            } else {
                ToastService.showErrorToast('Error Occurred!');
            }
        } catch (e) {
            console.log(e);

            ToastService.showErrorToast('Error Occurred!');
            this.setState({loading: false});
        }
    };

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Layout loading={this.state.loading} scrollEnabled={false}>
                <View style={{flex: 1, justifyContent: 'space-between'}}>
                    <ScrollView>
                        <View style={{padding: 15}}>

                            {this.sectionName === 'social' ? <CardComponent>
                                <View style={{marginBottom: 10}}>
                                    <Text style={{fontWeight: 'bold'}}>Contact</Text>
                                </View>

                                <View>
                                    <TextWidget label={'Website'}
                                                value={this.state.district.website}
                                                onChangeText={(text) => {
                                                    this.state.district.website = text;
                                                    this.setState({
                                                        district: this.state.district,
                                                    });
                                                }}/>
                                </View>
                                <View style={{marginTop: 20}}>
                                    <TextWidget label={'Facebook'}
                                                value={this.state.district.facebook}
                                                onChangeText={(text) => {
                                                    this.state.district.facebook = text;
                                                    this.setState({
                                                        district: this.state.district,
                                                    });
                                                }}/>
                                </View>
                                <View style={{marginTop: 20}}>
                                    <TextWidget label={'Instagram'}
                                                value={this.state.district.instagram}
                                                onChangeText={(text) => {
                                                    this.state.district.instagram = text;
                                                    this.setState({
                                                        district: this.state.district,
                                                    });
                                                }}/>
                                </View>
                                <View style={{marginTop: 20}}>
                                    <TextWidget label={'LinkedIn'}
                                                value={this.state.district.linkedin}
                                                onChangeText={(text) => {
                                                    this.state.district.linkedin = text;
                                                    this.setState({
                                                        district: this.state.district,
                                                    });
                                                }}/>
                                </View>
                                <View style={{marginTop: 20}}>
                                    <TextWidget label={'Twitter'}
                                                value={this.state.district.twitter}
                                                onChangeText={(text) => {
                                                    this.state.district.twitter = text;
                                                    this.setState({
                                                        district: this.state.district,
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
                            <Button title={'SAVE'} onPress={this.saveDistrictDetails}
                                    color={ColorService.SECONDARY_COLOR}/>
                        </View>
                    </View>
                </View>
            </Layout>
        );
    }
};

export default EditDistrictDetailsScreen;
