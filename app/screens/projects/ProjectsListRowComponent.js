import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableNativeFeedback
} from 'react-native';

const ProjectsListRowComponent: () => React$Node = (props) => {
    return (
        <>
            <TouchableNativeFeedback onPress={props.onPress}>
                <View style={styles.rowStyle}>
                    <Text style={styles.projectNameText}>Mahesh Abeywickrama Debate Competetion</Text>
                    <Text>Leo Club of University of Moratuwa</Text>

                    <View style={styles.secondRowText}>
                        <Text>2020-01-01</Text>
                        <Text> at Civil Auditorium</Text>
                    </View>

                </View>
            </TouchableNativeFeedback>
        </>
    );
};

const styles = StyleSheet.create({
    rowStyle: {
        paddingVertical: 5,
        paddingHorizontal: 15,

    },
    projectNameText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    secondRowText: {
        flexDirection: 'row'
    }
});

export default ProjectsListRowComponent;
