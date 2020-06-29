import React from 'react';
import {
    View,
    Text, StyleSheet, Linking, Button, ScrollView,
} from 'react-native';
import Layout from '../../common/Layout';
import MembersAPIService from './services/MembersAPIService';
import MemberDetailsService from './services/MemberDetailsService';
import CardComponent from '../../common/components/CardComponent';
import moment from 'moment';
import TextWidget from '../../common/widgets/TextWidget';
import PickerWidget from '../../common/widgets/PickerWidget';
import DatePickerWidget from '../../common/widgets/DatePickerWidget';
import ToastService from '../../common/services/ToastService';
import ColorService from '../../common/services/ColorService';
import {bindActionCreators} from 'redux';
import {updateUser} from '../../redux/actions/UserActions';
import {connect} from 'react-redux';

class EditMemberDetailsScreen extends React.Component {
    constructor(props) {
        super(props);

        this.member = props.route.params.member;
        this.sectionName = props.route.params.sectionName;
        this.saveCallback = props.route.params.saveCallback;

        this.state = {
            member: Object.assign({}, this.member),
            messages: [],
            loading: false,
        };
    }

    componentDidMount(): void {
    }

    cancelEditing = () => {
        this.props.navigation.goBack();
    };

    saveMemberDetails = () => {
        this.setState({
            loading: true,
        }, async () => {
            try {
                let tempMemberObj = {
                    id: this.state.member.id,
                    firstName: this.state.member.firstName,
                    lastName: this.state.member.lastName,
                    inductedDate: this.state.member.inductedDate,
                    gender: this.state.member.gender,
                    birthday: this.state.member.birthday,
                    address: this.state.member.address,
                    contactNumber: this.state.member.contactNumber,
                    website: this.state.member.website,
                    facebook: this.state.member.facebook,
                    instagram: this.state.member.instagram,
                    linkedin: this.state.member.linkedin,
                    twitter: this.state.member.twitter,
                    occupation: this.state.member.occupation,
                    university: this.state.member.university,
                    school: this.state.member.school,
                };

                let saveResult = await MembersAPIService.saveMemberDetailsApi(tempMemberObj);

                if (!saveResult.data.error) {
                    ToastService.showSuccessToast('Successfully Saved!');


                    this.setState({
                        member: saveResult.data.data,
                        loading: false,
                    }, () => {
                        let {actions} = this.props;
                        actions.updateUser(saveResult.data.data);

                        this.member = {...this.member, ...saveResult.data.data};
                        this.saveCallback(this.member);
                    });
                }
            } catch (e) {
                console.log(e);

                this.state.messages.push('Error Occured!');

                this.setState({
                    loading: false,
                });
            }
        });
    };

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Layout loading={this.state.loading} scrollEnabled={false} messages={this.state.messages}>
                <View style={{flex: 1, justifyContent: 'space-between'}}>
                    <ScrollView>
                        <View style={{padding: 15}}>

                            {this.sectionName === 'general' ? <CardComponent>
                                <View style={{marginBottom: 10}}>
                                    <Text style={{fontWeight: 'bold'}}>General</Text>
                                </View>

                                <View>
                                    <DatePickerWidget label={'Inducted Date'} dateValue={this.state.member.inductedDate}
                                                      onChange={(selectedDate) => {
                                                          this.state.member.inductedDate = moment(selectedDate).format('YYYY-MM-DD');
                                                          this.setState({
                                                              member: this.state.member,
                                                          });
                                                      }}/>
                                </View>

                                <View style={{marginTop: 20}}>
                                    <TextWidget label={'First Name'}
                                                value={this.state.member.firstName}
                                                onChangeText={(text) => {
                                                    this.state.member.firstName = text;
                                                    this.setState({
                                                        member: this.state.member,
                                                    });
                                                }}/>
                                </View>

                                <View style={{marginTop: 20}}>
                                    <TextWidget label={'Last Name'}
                                                value={this.state.member.lastName}
                                                onChangeText={(text) => {
                                                    this.state.member.lastName = text;
                                                    this.setState({
                                                        member: this.state.member,
                                                    });
                                                }}/>
                                </View>

                                <View style={{marginTop: 20}}>
                                    <PickerWidget label={'Gender'}
                                                  data={MemberDetailsService.getGenderValues()}
                                                  selectedValue={this.state.member.gender}
                                                  onValueChange={(itemValue, itemIndex) => {
                                                      this.state.member.gender = itemValue;
                                                      this.setState({
                                                          member: this.state.member,
                                                      });
                                                  }}/>
                                </View>

                                <View style={{marginTop: 20}}>
                                    <DatePickerWidget label={'Date of Birth'} dateValue={this.state.member.birthday}
                                                      onChange={(selectedDate) => {
                                                          this.state.member.birthday = moment(selectedDate).format('YYYY-MM-DD');
                                                          this.setState({
                                                              member: this.state.member,
                                                          });
                                                      }}/>
                                </View>

                                <View style={{marginTop: 20}}>
                                    <TextWidget label={'Address'}
                                                value={this.state.member.address}
                                                onChangeText={(text) => {
                                                    this.state.member.address = text;
                                                    this.setState({
                                                        member: this.state.member,
                                                    });
                                                }}/>
                                </View>
                            </CardComponent> : null}

                            {this.sectionName === 'contact' ? <CardComponent>
                                <View style={{marginBottom: 10}}>
                                    <Text style={{fontWeight: 'bold'}}>Contact</Text>
                                </View>

                                <View>
                                    <TextWidget label={'Telephone'}
                                                value={this.state.member.contactNumber}
                                                onChangeText={(text) => {
                                                    this.state.member.contactNumber = text;
                                                    this.setState({
                                                        member: this.state.member,
                                                    });
                                                }}/>
                                </View>
                                <View style={{marginTop: 20}}>
                                    <TextWidget label={'Website'}
                                                value={this.state.member.website}
                                                onChangeText={(text) => {
                                                    this.state.member.website = text;
                                                    this.setState({
                                                        member: this.state.member,
                                                    });
                                                }}/>
                                </View>
                                <View style={{marginTop: 20}}>
                                    <TextWidget label={'Facebook'}
                                                value={this.state.member.facebook}
                                                onChangeText={(text) => {
                                                    this.state.member.facebook = text;
                                                    this.setState({
                                                        member: this.state.member,
                                                    });
                                                }}/>
                                </View>
                                <View style={{marginTop: 20}}>
                                    <TextWidget label={'Instagram'}
                                                value={this.state.member.instagram}
                                                onChangeText={(text) => {
                                                    this.state.member.instagram = text;
                                                    this.setState({
                                                        member: this.state.member,
                                                    });
                                                }}/>
                                </View>
                                <View style={{marginTop: 20}}>
                                    <TextWidget label={'LinkedIn'}
                                                value={this.state.member.linkedin}
                                                onChangeText={(text) => {
                                                    this.state.member.linkedin = text;
                                                    this.setState({
                                                        member: this.state.member,
                                                    });
                                                }}/>
                                </View>
                                <View style={{marginTop: 20}}>
                                    <TextWidget label={'Twitter'}
                                                value={this.state.member.twitter}
                                                onChangeText={(text) => {
                                                    this.state.member.twitter = text;
                                                    this.setState({
                                                        member: this.state.member,
                                                    });
                                                }}/>
                                </View>
                            </CardComponent> : null}

                            {this.sectionName === 'career' ? <CardComponent>
                                <View style={{marginBottom: 10}}>
                                    <Text style={{fontWeight: 'bold'}}>Career</Text>
                                </View>

                                <View>
                                    <TextWidget label={'Occupation'}
                                                value={this.state.member.occupation}
                                                onChangeText={(text) => {
                                                    this.state.member.occupation = text;
                                                    this.setState({
                                                        member: this.state.member,
                                                    });
                                                }}/>
                                </View>

                                <View style={{marginTop: 20}}>
                                    <TextWidget label={'University'}
                                                value={this.state.member.university}
                                                onChangeText={(text) => {
                                                    this.state.member.university = text;
                                                    this.setState({
                                                        member: this.state.member,
                                                    });
                                                }}/>
                                </View>

                                <View style={{marginTop: 20}}>
                                    <TextWidget label={'School'}
                                                value={this.state.member.school}
                                                onChangeText={(text) => {
                                                    this.state.member.school = text;
                                                    this.setState({
                                                        member: this.state.member,
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
                            <Button title={'SAVE'} onPress={this.saveMemberDetails}
                                    color={ColorService.SECONDARY_COLOR}/>
                        </View>
                    </View>
                </View>
            </Layout>
        );
    }
};


let mapStateToProps = state => ({
    user: state.user,
});

let mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({updateUser}, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditMemberDetailsScreen);
