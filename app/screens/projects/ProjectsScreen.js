import React from 'react';
import {
    View,
    Text
} from 'react-native';
import Layout from "../../core/Layout";

class ProjectsScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Layout>
                <View style={{marginVertical: 40}}>
                    <Text>Projects screen</Text>
                </View>
            </Layout>
        )
    }
};

export default ProjectsScreen;
