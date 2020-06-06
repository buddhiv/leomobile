import React from 'react';
import {
    View,
    Text, StyleSheet, Linking,
} from 'react-native';
import Layout from '../../common/Layout';

class ClubsFilterScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
        };
    }

    componentDidMount(): void {

    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Layout loading={this.state.loading} scrollEnabled={true}>
                <View style={{padding: 15}}>

                    <Text>Filters</Text>

                </View>
            </Layout>
        );
    }
};

export default ClubsFilterScreen;
