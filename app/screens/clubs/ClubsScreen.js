import React from 'react';
import {
    View,
    Text, FlatList
} from 'react-native';
import Layout from "../../core/Layout";
import ClubsListRowComponent from "./ClubsListRowComponent";
import {webservice} from "../../lib/webservice/webservice";
import axios from "axios";

class ClubsScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(): void {
        console.log('clubs did mount');
        axios.get('https://demo1583219.mockable.io/leo_clubs').then((result) => {
            console.log(result);
        });
    }

    goToClubDetailsScreen = () => {
        this.props.navigation.navigate('Club Details');
    };

    rowRenderer = (project) => {
        return <ClubsListRowComponent item={project} onPress={this.goToClubDetailsScreen}/>;
    };

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Layout>
                <View>
                    <FlatList data={[1, 2, 3]} renderItem={this.rowRenderer}/>
                </View>
            </Layout>
        )
    }
};

export default ClubsScreen;
