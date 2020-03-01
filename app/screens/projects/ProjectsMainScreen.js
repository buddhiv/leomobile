import React from 'react';
import {
    View,
    Text
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Layout from "../../core/Layout";
import ProjectsScreen from "./ProjectsScreen";
import ProjectDetailsScreen from "./ProjectDetailsScreen";

class ProjectsMainScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const Stack = createStackNavigator();

        return (
            <Stack.Navigator initialRouteName={'Projects'}>
                <Stack.Screen name="Projects" component={ProjectsScreen}/>
                <Stack.Screen name="Project Details" component={ProjectDetailsScreen}/>
            </Stack.Navigator>
        )
    }
};

export default ProjectsMainScreen;
