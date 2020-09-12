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
import MultipleDistrictAPIService from './services/MultipleDistrictAPIService';

class EditMultipleDistrictDetailsScreen extends React.Component {
    constructor(props) {
        super(props);

        this.multipleDistrict = props.route.params.multipleDistrict;
        this.sectionName = props.route.params.sectionName;
        this.saveCallback = props.route.params.saveCallback;

        console.log(this.multipleDistrict);

        this.state = {
            multipleDistrict: Object.assign({}, this.multipleDistrict),
            loading: false,
        };
    }

    componentDidMount(): void {
    }

    cancelEditing = () => {
        this.props.navigation.goBack();
    };

    saveMultipleDistrictDetails = async () => {
        await this.setState({loading: true});

        try {
            let tempMultipleDistrictObj = {
                id: this.state.multipleDistrict.id,
                name: this.state.multipleDistrict.name,
                website: this.state.multipleDistrict.website,
                facebook: this.state.multipleDistrict.facebook,
                instagram: this.state.multipleDistrict.instagram,
                linkedin: this.state.multipleDistrict.linkedin,
                twitter: this.state.multipleDistrict.twitter,
            };

            let saveResult = await MultipleDistrictAPIService.getSaveMultipleDistrictDetailsAPI(tempMultipleDistrictObj);

            if (!saveResult.data.error) {
                ToastService.showSuccessToast('Successfully Saved!');
                await this.setState({multipleDistrict: saveResult.data.data, loading: false});

                this.multipleDistrict = {...this.multipleDistrict, ...saveResult.data.data};
                this.saveCallback(this.multipleDistrict);
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
                                                value={this.state.multipleDistrict.website}
                                                onChangeText={(text) => {
                                                    this.state.multipleDistrict.website = text;
                                                    this.setState({
                                                        multipleDistrict: this.state.multipleDistrict,
                                                    });
                                                }}/>
                                </View>
                                <View style={{marginTop: 20}}>
                                    <TextWidget label={'Facebook'}
                                                value={this.state.multipleDistrict.facebook}
                                                onChangeText={(text) => {
                                                    this.state.multipleDistrict.facebook = text;
                                                    this.setState({
                                                        multipleDistrict: this.state.multipleDistrict,
                                                    });
                                                }}/>
                                </View>
                                <View style={{marginTop: 20}}>
                                    <TextWidget label={'Instagram'}
                                                value={this.state.multipleDistrict.instagram}
                                                onChangeText={(text) => {
                                                    this.state.multipleDistrict.instagram = text;
                                                    this.setState({
                                                        multipleDistrict: this.state.multipleDistrict,
                                                    });
                                                }}/>
                                </View>
                                <View style={{marginTop: 20}}>
                                    <TextWidget label={'LinkedIn'}
                                                value={this.state.multipleDistrict.linkedin}
                                                onChangeText={(text) => {
                                                    this.state.multipleDistrict.linkedin = text;
                                                    this.setState({
                                                        multipleDistrict: this.state.multipleDistrict,
                                                    });
                                                }}/>
                                </View>
                                <View style={{marginTop: 20}}>
                                    <TextWidget label={'Twitter'}
                                                value={this.state.multipleDistrict.twitter}
                                                onChangeText={(text) => {
                                                    this.state.multipleDistrict.twitter = text;
                                                    this.setState({
                                                        multipleDistrict: this.state.multipleDistrict,
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
                            <Button title={'SAVE'} onPress={this.saveMultipleDistrictDetails}
                                    color={ColorService.SECONDARY_COLOR}/>
                        </View>
                    </View>
                </View>
            </Layout>
        );
    }
};

export default EditMultipleDistrictDetailsScreen;
