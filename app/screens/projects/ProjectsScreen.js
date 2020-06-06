import React from 'react';
import {
    View,
    FlatList,
} from 'react-native';
import Layout from '../../common/Layout';
import ProjectsListRowComponent from './ProjectsListRowComponent';

class ProjectsScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    goToProjectDetailsScreen = () => {
        this.props.navigation.navigate('Project Details');
    };

    rowRenderer = (project) => {
        return <ProjectsListRowComponent item={project} onPress={this.goToProjectDetailsScreen}/>;
    };

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Layout scrollEnabled={false}>
                <View>
                    <FlatList data={[1, 2, 3]} renderItem={this.rowRenderer} keyExtractor={(item, index) => {
                        return index.toString();
                    }}/>
                </View>
            </Layout>
        );
    }
};

export default ProjectsScreen;
