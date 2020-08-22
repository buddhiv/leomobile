import React from 'react';
import {
    View, Text,
} from 'react-native';
import Layout from '../../common/Layout';

class SettingsListScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Layout scrollEnabled={false} loading={false}>
                <View style={{padding: 15}}>
                    <Text>Settings List</Text>
                </View>
            </Layout>
        );
    }
};

export default SettingsListScreen;
