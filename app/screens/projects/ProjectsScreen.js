import React from 'react';
import {
    View,
    FlatList, Text,
} from 'react-native';
import Layout from '../../common/Layout';
import ProjectsListRowComponent from './ProjectsListRowComponent';
import CardComponent from '../../common/components/CardComponent';
import TouchableComponent from '../../common/components/TouchableComponent';

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
            <Layout scrollEnabled={false} loading={false}>
                {/*<FlatList data={[1, 2, 3]} renderItem={this.rowRenderer} keyExtractor={(item, index) => {*/}
                {/*    return index.toString();*/}
                {/*}}/>*/}
                <View style={{paddingHorizontal: 15, paddingVertical: 10}}>

                    <View style={{marginTop: 10}}>
                        <View>
                            <CardComponent>
                                <Text style={{fontSize: 18}}>This Feature is Coming Soon!!</Text>
                            </CardComponent>
                        </View>
                    </View>
                </View>
            </Layout>
        );
    }
};

export default ProjectsScreen;
