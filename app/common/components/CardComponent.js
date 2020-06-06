import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, ScrollView, View, Text, Image} from 'react-native';
import {DrawerItemList, DrawerItem} from '@react-navigation/drawer';

const CardComponent: () => React$Node = (props) => {
    return (
        <>
            <View
                style={[{backgroundColor: 'white', padding: 15, borderRadius: 5, overflow: 'hidden'}, props.cardStyle]}>
                {props.children}
            </View>
        </>
    );
};

CardComponent.propTypes = {
    cardStyle: PropTypes.object,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

export default CardComponent;

