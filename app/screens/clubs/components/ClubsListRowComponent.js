import React from 'react';
import PropTypes from 'prop-types';
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
                    <Text style={styles.clubNameText}>{props.club.item.name}</Text>
                </View>
            </TouchableWithoutFeedback>
        </>
    );
};

ClubsListRowComponent.propTypes = {
    onPress: PropTypes.func,
    club: PropTypes.object,
};

const styles = StyleSheet.create({
    rowStyle: {
        paddingVertical: 5,
        paddingHorizontal: 15,
    },
    clubNameText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    secondRowText: {
        flexDirection: 'row',
    },
});

export default ClubsListRowComponent;
