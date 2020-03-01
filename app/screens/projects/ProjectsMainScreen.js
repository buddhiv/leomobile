import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProjectsScreen from "./ProjectsScreen";
import ProjectDetailsScreen from "./ProjectDetailsScreen";

const ProjectsMainScreen: () => React$Node = (props) => {
    const Stack = createStackNavigator();

    return (
        <>
            <Stack.Navigator initialRouteName={'Projects'}>
                <Stack.Screen name="Projects" component={ProjectsScreen}/>
                <Stack.Screen name="Project Details" component={ProjectDetailsScreen}/>
            </Stack.Navigator>
        </>
    )
}

export default ProjectsMainScreen;
