import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    TouchableWithoutFeedback,
} from 'react-native';
import ClubProfilePictureComponent from './ClubProfilePictureComponent';
import ClubDetailsService from '../services/ClubDetailsService';

const ClubsListRowComponent: () => React$Node = (props) => {
    return (
        <>
            <TouchableWithoutFeedback onPress={() => {
                props.onPress(props.club.item);
            }}>
                <View style={{paddingVertical: 5, paddingHorizontal: 15, flexDirection: 'row'}}>
                    <View>
                        <ClubProfilePictureComponent size={40}/>
                    </View>
                    <View style={{paddingLeft: 10}}>
                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>{props.club.item.name}</Text>
                        {/*<Text>{ClubDetailsService.getDistrictName(props.club.item)}</Text>*/}
                    </View>
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
