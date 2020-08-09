import React from 'react';
import {
    View,
    Text, StyleSheet, Linking,
} from 'react-native';
import Layout from '../../common/Layout';
import MembersAPIService from './services/MembersAPIService';
import MemberDetailsService from './services/MemberDetailsService';
import MemberProfilePictureComponent from './components/MemberProfilePictureComponent';
import CardComponent from '../../common/components/CardComponent';
import IconComponent from '../../common/components/IconComponent';
import TouchableComponent from '../../common/components/TouchableComponent';
import TableComponent from '../../common/components/TableComponent';
import moment from 'moment';
import PermissionsService from '../../common/services/PermissionsService';
import ColorService from '../../common/services/ColorService';
import {connect} from 'react-redux';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-picker';
import ProfilePictureService from '../../common/services/ProfilePictureService';

class MemberDetailsScreen extends React.Component {
    constructor(props) {
        super(props);

        this.currentUser = props.user.user;

        this.state = {
            memberId: props.route.params.mode === 'my' ? this.currentUser.id : props.route.params.memberId,
            member: {},
            designations: [],
            loading: true,
            showViewProfilePictureModal: false,
        };
    }

    componentDidMount(): void {
        this.getMemberDetails();
    }

    getMemberDetails = async () => {
        try {
            let membersResult = await MembersAPIService.getMemberDetailsApi(this.state.memberId);
            let profilePictureResult = await ProfilePictureService.getProfilePictureByEmployeeId(this.state.memberId);

            if (!membersResult.data.data.error) {
                this.setState({
                    member: membersResult.data.data.data,
                    memberBase64Image: profilePictureResult.data.data[0].profilePicture,
                    designations: MemberDetailsService.formatDesignationsList(membersResult.data.data.designations, membersResult.data.data.data),
                    loading: false,
                });
            }
        } catch (e) {
            console.log(e);
            await this.setState({loading: false});
        }
    };

    makePhoneCall = () => {
        Linking.openURL(`tel:${this.state.member.contactNumber}`);
    };

    makeSms = () => {
        Linking.openURL(`sms:${this.state.member.contactNumber}`);
    };

    makeEmail = () => {
        Linking.openURL(`mailto:${this.state.member.email}`);
    };

    getMemberGeneralInformation = () => {
        return this.state.member.id ? [
            ['My LCI ID', this.state.member.mylciId],
            ['Inducted Date', moment(this.state.member.inductedDate).format('YYYY-MM-DD')],
            ['Club Name', MemberDetailsService.getClubName(this.state.member)],
            ['Full Name', MemberDetailsService.getFullName(this.state.member)],
            ['Gender', this.state.member.gender],
            ['Date of Birth', moment(this.state.member.birthday).format('YYYY-MM-DD')],
            ['Address', this.state.member.address],
        ] : [];
    };

    getMemberContactInformation = () => {
        return this.state.member.id ? [
            ['Telephone', this.state.member.contactNumber],
            ['Email', this.state.member.email],
            ['Website', this.state.member.website],
            ['Facebook', this.state.member.facebook],
            ['Instagram', this.state.member.instagram],
            ['Linkedin', this.state.member.linkedin],
            ['Twitter', this.state.member.twitter],
        ] : [];
    };

    getMemberCareerInformation = () => {
        return this.state.member.id ? [
            ['Occupation', this.state.member.occupation],
            ['University', this.state.member.university],
            ['School', this.state.member.school],
        ] : [];
    };

    isProfileEditable = () => {
        // return (!this.state.loading && this.currentUser.id === this.state.memberId);
        return (!this.state.loading && PermissionsService.getPermission(this.props.permissions.permissions, 'leo_profile').update && this.props.route.params.mode === 'my');
    };

    saveCallback = (newMemberObj) => {
        this.setState({
            member: newMemberObj,
            memberBase64Image: newMemberObj.profilePicture
        });
    };

    goToEditProfile = (sectionName) => {
        this.props.navigation.navigate('Edit Profile', {
            member: Object.assign({}, this.state.member),
            memberProfilePicture: this.state.memberBase64Image,
            sectionName: sectionName,
            saveCallback: this.saveCallback,
        });
    };

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Layout loading={this.state.loading} scrollEnabled={true}>
                <View style={{padding: 15}}>
                    <View style={{flexDirection: 'column-reverse'}}>
                        <CardComponent cardStyle={{
                            alignItems: 'center',
                            paddingTop: 50,
                            marginTop: -40,
                        }}>
                            <Text style={{fontSize: 18, fontWeight: 'bold', color: ColorService.PRIMARY_COLOR_DARK}}
                                  numberOfLines={2}>
                                {this.state.member.id ? MemberDetailsService.getFullName(this.state.member) : ''}
                            </Text>

                            {this.state.designations.length > 0 ? <View>
                                <Text numberOfLines={2} style={{textAlign: 'center'}}>
                                    {this.state.designations[0]}
                                </Text>

                                {this.state.designations.length > 1 ?
                                    <View style={{marginTop: 10, alignItems: 'center'}}>
                                        <Text>also</Text>

                                        {this.state.designations.map((designation, index) => {
                                            if (index > 0) {
                                                return <Text numberOfLines={2} style={{textAlign: 'center'}}
                                                             key={index}>
                                                    {designation}
                                                </Text>;
                                            }
                                        })}

                                    </View> : null}
                            </View> : null}

                        </CardComponent>

                        <View style={{alignItems: 'center'}}>
                            <MemberProfilePictureComponent size={100} border={false}
                                                           loadAutomatically={false}
                                                           memberBase64Image={this.state.memberBase64Image}
                                                           memberId={this.state.memberId}/>
                        </View>
                    </View>

                    <View style={{paddingTop: 10}}>
                        <CardComponent>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{flex: 1, alignItems: 'center'}}>
                                    <TouchableComponent onPress={this.makePhoneCall}>
                                        <IconComponent.MaterialCommunityIcons name={'phone'} size={28}
                                                                              color={ColorService.PRIMARY_COLOR}/>
                                    </TouchableComponent>
                                </View>
                                <View style={{flex: 1, alignItems: 'center'}}>
                                    <TouchableComponent onPress={this.makeSms}>
                                        <IconComponent.MaterialCommunityIcons name={'message-text'} size={28}
                                                                              color={ColorService.PRIMARY_COLOR}/>
                                    </TouchableComponent>
                                </View>
                                <View style={{flex: 1, alignItems: 'center'}}>
                                    <TouchableComponent onPress={this.makeEmail}>
                                        <IconComponent.MaterialCommunityIcons name={'email'} size={28}
                                                                              color={ColorService.PRIMARY_COLOR}/>
                                    </TouchableComponent>
                                </View>
                            </View>
                        </CardComponent>
                    </View>

                    <View style={{paddingTop: 10}}>
                        <CardComponent>
                            <View>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <View style={{flex: 1}}>
                                        <Text style={{fontWeight: 'bold'}}>General</Text>
                                    </View>

                                    {this.isProfileEditable() ? <TouchableComponent onPress={() => {
                                        this.goToEditProfile('general');
                                    }}>
                                        <IconComponent.MaterialCommunityIcons name={'playlist-edit'} size={18}
                                                                              color={ColorService.SECONDARY_COLOR_DARK}/>
                                    </TouchableComponent> : null}
                                </View>

                                <View style={{marginTop: 10}}>
                                    <TableComponent data={this.getMemberGeneralInformation()}
                                                    columnRatio={[1, 2]}/>
                                </View>
                            </View>
                            <View style={{marginTop: 10}}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <View style={{flex: 1}}>
                                        <Text style={{fontWeight: 'bold'}}>Contact</Text>
                                    </View>

                                    {this.isProfileEditable() ? <TouchableComponent onPress={() => {
                                        this.goToEditProfile('contact');
                                    }}>
                                        <IconComponent.MaterialCommunityIcons name={'playlist-edit'} size={18}
                                                                              color={ColorService.SECONDARY_COLOR_DARK}/>
                                    </TouchableComponent> : null}
                                </View>

                                <View style={{marginTop: 10}}>
                                    <TableComponent data={this.getMemberContactInformation()}
                                                    columnRatio={[1, 2]}/>
                                </View>
                            </View>
                            <View style={{marginTop: 10}}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <View style={{flex: 1}}>
                                        <Text style={{fontWeight: 'bold'}}>Career</Text>
                                    </View>

                                    {this.isProfileEditable() ? <TouchableComponent onPress={() => {
                                        this.goToEditProfile('career');
                                    }}>
                                        <IconComponent.MaterialCommunityIcons name={'playlist-edit'} size={18}
                                                                              color={ColorService.SECONDARY_COLOR_DARK}/>
                                    </TouchableComponent> : null}
                                </View>

                                <View style={{marginTop: 10}}>
                                    <TableComponent data={this.getMemberCareerInformation()}
                                                    columnRatio={[1, 2]}/>
                                </View>
                            </View>
                        </CardComponent>
                    </View>
                </View>

                <Modal isVisible={this.state.showViewProfilePictureModal}>
                    <View style={{flex: 1}}>
                        <Text>I am the modal content!</Text>
                    </View>
                </Modal>
            </Layout>
        );
    }
};

let mapStateToProps = state => ({
    user: state.user,
    permissions: state.permissions,
});

export default connect(mapStateToProps)(MemberDetailsScreen);
