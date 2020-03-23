import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableNativeFeedback
} from 'react-native';

const ClubsListRowComponent: () => React$Node = (props) => {
    return (
        <>
            <TouchableNativeFeedback onPress={props.onPress}>
                <View style={styles.rowStyle}>
                    <Text style={styles.projectNameText}>{props.club.item.name}</Text>
                    <Text>{props.club.item.leoDistrict.name}</Text>
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

export default ClubsListRowComponent;
