import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    TouchableWithoutFeedback,
} from 'react-native';
import DistrictProfilePictureComponent from './DistrictProfilePictureComponent';

const DistrictsListRowComponent: () => React$Node = (props) => {
    return (
        <>
            <TouchableWithoutFeedback onPress={() => {
                props.onPress(props.district.item);
            }}>
                <View style={{paddingVertical: 5, paddingHorizontal: 15, flexDirection: 'row'}}>
                    <View>
                        <DistrictProfilePictureComponent size={40}/>
                    </View>
                    <View style={{paddingLeft: 10}}>
                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>{props.district.item.name}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </>
    );
};

DistrictsListRowComponent.propTypes = {
    onPress: PropTypes.func,
    district: PropTypes.object,
};

export default DistrictsListRowComponent;
