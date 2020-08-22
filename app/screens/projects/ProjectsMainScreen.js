import React from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import ProjectsScreen from './ProjectsScreen';
import ProjectDetailsScreen from './ProjectDetailsScreen';
import ColorService from '../../common/services/ColorService';
import DrawerLeftButtonComponent from '../../common/components/DrawerLeftButtonComponent';

const ProjectsMainScreen: () => React$Node = (props) => {
    const Stack = createStackNavigator();

    return (
        <>
            <Stack.Navigator initialRouteName={'Projects'}
                             screenOptions={{
                                 headerTintColor: 'white',
                                 headerStyle: {
                                     backgroundColor: ColorService.SECONDARY_COLOR_DARK,
                                 },
                             }}>
                <Stack.Screen name="Projects" component={ProjectsScreen}
                    options={({navigation}) => ({
                        headerLeft: () => (
                            <DrawerLeftButtonComponent onPress={navigation.toggleDrawer}/>
                        ),
                    })}
                />
                <Stack.Screen name="Project Details" component={ProjectDetailsScreen}/>
            </Stack.Navigator>
        </>
    );
};

export default ProjectsMainScreen;
