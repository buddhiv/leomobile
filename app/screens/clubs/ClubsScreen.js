import React from 'react';
import {
    View,
    Text, FlatList,
} from 'react-native';
import Layout from '../../core/Layout';
import ClubsListRowComponent from './ClubsListRowComponent';
import ClubsAPIService from './services/ClubsAPIService';

class ClubsScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clubsList: [],
        };
    }

    componentDidMount(): void {
        ClubsAPIService.getClubsListApi().then((result) => {
            if (result.status === 200) {
                this.setState({
                    clubsList: result.data.data,
                });
            }
        });
    }

    goToClubDetailsScreen = () => {
        this.props.navigation.navigate('Club Details');
    };

    rowRenderer = (club) => {
        return <ClubsListRowComponent club={club} onPress={this.goToClubDetailsScreen}/>;
    };

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Layout>
                <View>
                    <FlatList data={this.state.clubsList} renderItem={this.rowRenderer}/>
                </View>
            </Layout>
        );
    }
};

export default ClubsScreen;
