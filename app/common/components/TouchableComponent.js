import React from 'react';
import PropTypes from 'prop-types';
import {
    Platform,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
} from 'react-native';

const TouchableComponent: () => React$Node = (props) => {
    return (
        <>
            {Platform.OS === 'android' ?
                <TouchableNativeFeedback
                    onLongPress={() => {
                        setTimeout(props.onPress, 1500);
                    }}
                    onPress={() => {
                        setTimeout(props.onPress, 1500);
                    }}
                    background={TouchableNativeFeedback.SelectableBackground()}
                    useForeground={true} {...props}>
                    {props.children}
                </TouchableNativeFeedback> :
                <TouchableWithoutFeedback {...props}>
                    {props.children}
                </TouchableWithoutFeedback>}
        </>
    );
};

TouchableComponent.propTypes = {
    onPress: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

export default TouchableComponent;

