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
import UserService from '../../common/services/UserService';

class MemberDetailsScreen extends React.Component {
    constructor(props) {
        super(props);

        let currentUser = UserService.getCurrentUser();
        let permissions = UserService.getCurrentUserPermissions();

        this.state = {
            memberId: props.route.params.mode === 'my' ? currentUser.id : props.route.params.memberId,
            member: {},
            designations: [],
            loading: true,
        };
    }

    componentDidMount(): void {
        this.getMemberDetails();
    }

    getMemberDetails = async () => {
        try {
            let membersResult = await MembersAPIService.getMemberDetailsApi(this.state.memberId);

            if (!membersResult.data.data.error) {
                this.setState({
                    member: membersResult.data.data.data,
                    designations: MemberDetailsService.formatDesignationsList(membersResult.data.data.designations, membersResult.data.data.data),
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
            ['First Name', this.state.member.firstName],
            ['Last Name', this.state.member.lastName],
            ['Gender', this.state.member.gender],
            ['Date of Birth', moment(this.state.member.birthday).format('YYYY-MM-DD')],
            ['Address', this.state.member.address],
        ] : [];
    };

    getMemberContactInformation = () => {
        return this.state.member.id ? [
            ['Telephone', this.state.member.contactNumber],
            ['Email', this.state.member.email],
        ] : [];
    };

    getMemberCareerInformation = () => {
        return this.state.member.id ? [
            ['School', this.state.member.school],
            ['University', this.state.member.university],
            ['Occupation', this.state.member.occupation],
        ] : [];
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
                            <Text style={{fontSize: 18, fontWeight: 'bold'}} numberOfLines={2}>
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
                            <MemberProfilePictureComponent size={100} border={false}/>
                        </View>
                    </View>

                    <View style={{paddingTop: 10}}>
                        <CardComponent>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{flex: 1, alignItems: 'center'}}>
                                    <TouchableComponent onPress={this.makePhoneCall}>
                                        <IconComponent.MaterialCommunityIcons name={'phone'} size={28}/>
                                    </TouchableComponent>
                                </View>
                                <View style={{flex: 1, alignItems: 'center'}}>
                                    <TouchableComponent onPress={this.makeSms}>
                                        <IconComponent.MaterialCommunityIcons name={'message-text'} size={28}/>
                                    </TouchableComponent>
                                </View>
                                <View style={{flex: 1, alignItems: 'center'}}>
                                    <TouchableComponent onPress={this.makeEmail}>
                                        <IconComponent.MaterialCommunityIcons name={'email'} size={28}/>
                                    </TouchableComponent>
                                </View>
                            </View>
                        </CardComponent>
                    </View>

                    <View style={{paddingTop: 10}}>
                        <CardComponent>
                            <View>
                                <Text style={{fontWeight: 'bold'}}>General</Text>

                                <View style={{marginTop: 10}}>
                                    <TableComponent data={this.getMemberGeneralInformation()}
                                                    columnRatio={[1, 2]}/>
                                </View>
                            </View>
                            <View style={{marginTop: 10}}>
                                <Text style={{fontWeight: 'bold'}}>Contact</Text>

                                <View style={{marginTop: 10}}>
                                    <TableComponent data={this.getMemberContactInformation()}
                                                    columnRatio={[1, 2]}/>
                                </View>
                            </View>
                            <View style={{marginTop: 10}}>
                                <Text style={{fontWeight: 'bold'}}>Career</Text>

                                <View style={{marginTop: 10}}>
                                    <TableComponent data={this.getMemberCareerInformation()}
                                                    columnRatio={[1, 2]}/>
                                </View>
                            </View>
                        </CardComponent>
                    </View>
                </View>
            </Layout>
        );
    }
};

export default MemberDetailsScreen;
