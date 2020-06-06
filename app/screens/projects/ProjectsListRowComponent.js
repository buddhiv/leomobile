import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
} from 'react-native';

const ProjectsListRowComponent: () => React$Node = (props) => {
    return (
        <>
            <TouchableWithoutFeedback onPress={props.onPress}>
                <View style={{paddingVertical: 5, paddingHorizontal: 15}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Mahesh Abeywickrama Debate Competetion</Text>
                    <Text>Leo Club of University of Moratuwa</Text>

                    <View style={{flexDirection: 'row'}}>
                        <Text>2020-01-01</Text>
                        <Text> at Civil Auditorium</Text>
                    </View>

                </View>
            </TouchableWithoutFeedback>
        </>
    );
};

export default ProjectsListRowComponent;
