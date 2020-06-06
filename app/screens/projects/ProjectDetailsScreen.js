import React from 'react';
import {
    View,
    Text
} from 'react-native';
import Layout from "../../common/Layout";

class ProjectDetailsScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Layout scrollEnabled={true}>
                <View>
                    <Text>Project details screen</Text>
                </View>
            </Layout>
        )
    }
};

export default ProjectDetailsScreen;
