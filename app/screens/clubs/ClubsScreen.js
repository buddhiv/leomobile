import React from 'react';
import {
    View,
    Text, FlatList
} from 'react-native';
import Layout from "../../core/Layout";
import ClubsListRowComponent from "./ClubsListRowComponent";

class ClubsScreen extends React.Component {
    constructor(props) {
        super(props)
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
