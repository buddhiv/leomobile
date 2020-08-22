import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, ScrollView, View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import IconComponent from './IconComponent';

const DrawerLeftButtonComponent: () => React$Node = (props) => {
    return (
        <>
            <TouchableWithoutFeedback onPress={props.onPress}>
                <View style={{paddingHorizontal: 15}}>
                    <IconComponent.MaterialCommunityIcons name={'menu'} size={30} color={'white'}/>
                </View>
            </TouchableWithoutFeedback>
        </>
    );
};

DrawerLeftButtonComponent.propTypes = {
    onPress: PropTypes.func
};

export default DrawerLeftButtonComponent;

