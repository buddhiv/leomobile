import React from 'react';
import {
    View,
    Text, StyleSheet,
} from 'react-native';
import Layout from '../../core/Layout';
import ClubsAPIService from './services/ClubsAPIService';

class ClubDetailsScreen extends React.Component {
    constructor(props) {
        super(props);

        console.log(props);

        this.state = {
            clubId: props.route.params.clubId,
            club: {},
            loading: true,
        };
    }

    componentDidMount(): void {
        ClubsAPIService.getClubDetailsApi(this.state.clubId).then((result) => {
            console.log(result.data.data);

            this.setState({
                club: result.data.data,
                loading: false,
            });
        });
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Layout loading={this.state.loading}>
                <View style={{padding: 15}}>
                    <View style={{alignItems: 'center'}}>
                        <View>

                        </View>
                        <Text style={styles.clubNameText}>{this.state.club.name ? this.state.club.name : ''}</Text>
                        <Text>{this.state.club.email ? this.state.club.email : ''}</Text>
                    </View>
                </View>
            </Layout>
        );
    }
};

const styles = StyleSheet.create({
    clubNameText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default ClubDetailsScreen;
