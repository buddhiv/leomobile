import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    TouchableWithoutFeedback,
} from 'react-native';

const ClubsListRowComponent: () => React$Node = (props) => {
    return (
        <>
            <TouchableWithoutFeedback onPress={() => {
                props.onPress(props.club.item);
            }}>
                <View style={{paddingVertical: 5, paddingHorizontal: 15}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>{props.club.item.name}</Text>
                </View>
            </TouchableWithoutFeedback>
        </>
    );
};

ClubsListRowComponent.propTypes = {
    onPress: PropTypes.func,
    club: PropTypes.object,
};

export default ClubsListRowComponent;
