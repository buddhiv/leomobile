import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
} from 'react-native';

const ClubsListRowComponent: () => React$Node = (props) => {
    return (
        <>
            <TouchableWithoutFeedback onPress={() => {
                props.onPress(props.club.item);
            }}>
                <View style={styles.rowStyle}>
                    <Text style={styles.projectNameText}>{props.club.item.name}</Text>
                </View>
            </TouchableWithoutFeedback>
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
        fontWeight: 'bold',
    },
    secondRowText: {
        flexDirection: 'row',
    },
});

export default ClubsListRowComponent;
