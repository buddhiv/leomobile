import React from 'react';
import {
    View, Text, StyleSheet,
} from 'react-native';
import Layout from '../../common/Layout';
import UserService from '../../common/services/UserService';
import CardComponent from '../../common/components/CardComponent';
import TouchableComponent from '../../common/components/TouchableComponent';
import MemberDetailsService from '../members/services/MemberDetailsService';
import MemberProfilePictureComponent from '../members/components/MemberProfilePictureComponent';

class DashboardScreen extends React.Component {
    constructor(props) {
        super(props);

        this.user = UserService.getCurrentUser();

        this.state = {};
    }

    componentDidMount(): void {

    }

    goToProjects = () => {
        this.props.navigation.navigate('Projects');
    };

    goToClub = () => {
        this.props.navigation.navigate('Clubs', {
            screen: 'Club Details',
            initial: false,
            params: {
                clubId: this.user.leoClubId,
            },
        });
    };

    goToProfile = () => {
        this.props.navigation.navigate('My Profile');
    };

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Layout loading={false} scrollEnabled={true}>
                <View style={{paddingHorizontal: 15, paddingVertical: 10}}>
                    <View style={{flexDirection: 'column-reverse', marginTop: 10}}>
                        <CardComponent cardStyle={{
                            alignItems: 'center',
                            paddingTop: 50,
                            marginTop: -40,
                        }}>
                            <Text style={{fontSize: 18, fontWeight: 'bold'}} numberOfLines={2}>
                                Welcome, {MemberDetailsService.getFirstName(this.user)}!
                            </Text>
                        </CardComponent>

                        <View style={{alignItems: 'center'}}>
                            <MemberProfilePictureComponent size={100} border={false}
                                                           imageData={this.user.profilePicture}
                            />
                        </View>
                    </View>

                    {/*<View style={{marginTop: 10}}>*/}
                    {/*    <TouchableComponent onPress={this.goToProjects}>*/}
                    {/*        <View>*/}
                    {/*            <CardComponent>*/}
                    {/*                <Text style={{fontSize: 18}}>Today's Projects</Text>*/}
                    {/*                <View style={{marginTop: 10}}>*/}
                    {/*                    <Text style={{color: '#777777'}}>There are no projects scheduled for*/}
                    {/*                        today</Text>*/}
                    {/*                </View>*/}
                    {/*            </CardComponent>*/}
                    {/*        </View>*/}
                    {/*    </TouchableComponent>*/}
                    {/*</View>*/}

                    <View style={{marginTop: 10}}>
                        <TouchableComponent onPress={this.goToProfile}>
                            <View>
                                <CardComponent>
                                    <Text style={{fontSize: 18}}>View My Profile</Text>
                                </CardComponent>
                            </View>
                        </TouchableComponent>
                    </View>

                    <View style={{marginTop: 10}}>
                        <TouchableComponent onPress={this.goToClub}>
                            <View>
                                <CardComponent>
                                    <Text style={{fontSize: 18}}>Go to My Club</Text>
                                    <View style={{marginTop: 10}}>
                                        <Text style={{color: '#777777'}}>Leo Club of University of Moratuwa</Text>
                                    </View>
                                </CardComponent>
                            </View>
                        </TouchableComponent>
                    </View>
                </View>
            </Layout>
        );
    }
};

const styles = StyleSheet.create({
    card_style: {
        backgroundColor: 'white', padding: 10, marginTop: 10, borderRadius: 5,
    },
});

export default DashboardScreen;
