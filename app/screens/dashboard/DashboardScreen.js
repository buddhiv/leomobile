import React from 'react';
import {
    View, Text, StyleSheet, TouchableWithoutFeedback,
} from 'react-native';
import Layout from '../../core/Layout';
import GlobalService from '../../lib/services/GlobalService';
import UserService from '../../core/services/UserService';

class DashboardScreen extends React.Component {
    constructor(props) {
        super(props);

        this.user = GlobalService.get('user');

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

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Layout>
                <View style={{paddingHorizontal: 15, paddingVertical: 10}}>
                    <View style={{alignItems: 'center'}}>
                        <Text>Hi, {UserService.getUserName(this.user)}</Text>
                    </View>

                    <TouchableWithoutFeedback onPress={this.goToProjects}>
                        <View style={styles.card_style}>
                            <Text style={{fontSize: 18}}>Today's Projects</Text>
                            <View style={{marginTop: 10}}>
                                <Text style={{color: '#777777'}}>There are no projects scheduled for today</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={this.goToClub}>
                        <View style={styles.card_style}>
                            <Text style={{fontSize: 18}}>Go to My Club</Text>
                            <View style={{marginTop: 10}}>
                                <Text style={{color: '#777777'}}>Leo Club of University of Moratuwa</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </Layout>
        );
    }
};

const styles = StyleSheet.create({
    card_style: {
        backgroundColor: '#eaeaea', padding: 10, marginTop: 10, borderRadius: 5,
    },
});

export default DashboardScreen;
