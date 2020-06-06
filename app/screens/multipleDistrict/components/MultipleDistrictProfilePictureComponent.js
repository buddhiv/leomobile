import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, ScrollView, View, Text, Image} from 'react-native';

const MultipleDistrictProfilePictureComponent: () => React$Node = (props) => {
    return (
        <>
            <View style={[{
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                width: props.size,
                height: props.size,
                borderRadius: props.size / 2,
                backgroundColor: 'white',
            }, props.border ? {
                width: props.size + (props.borderWidth * 2),
                height: props.size + (props.borderWidth * 2),
                borderRadius: props.size + (props.borderWidth * 2) / 2,
                borderWidth: props.borderWidth,
                borderColor: props.borderColor,
            } : {}]}>
                <Image
                    source={require('../../../assets/leo-logo.png')}
                    style={{
                        width: props.size,
                        height: props.size,
                        resizeMode: 'contain',
                    }}/>
            </View>
        </>
    );
};

MultipleDistrictProfilePictureComponent.propTypes = {};

export default MultipleDistrictProfilePictureComponent;

