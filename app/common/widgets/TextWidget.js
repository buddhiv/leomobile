import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TextInput, Platform} from 'react-native';
import ColorService from '../services/ColorService';

const TextWidget: () => React$Node = (props) => {
    return (
        <>
            <View>
                <View>
                    <Text>{props.label}</Text>
                </View>
                <View style={[Platform.OS === 'ios' ? {marginTop: 10, marginBottom: 5} : {
                    marginTop: -5,
                    marginBottom: -10,
                }]}>
                    <TextInput value={props.value}
                               onChangeText={props.onChangeText}/>
                </View>
                <View style={{borderTopWidth: 1, borderTopColor: ColorService.PRIMARY_COLOR}}>
                    {/*<Text style={{fontSize: 10}}>Required</Text>*/}
                </View>
            </View>
        </>
    );
};

TextWidget.propTypes = {
    value: PropTypes.any,
    onChangeText: PropTypes.func,
};

export default TextWidget;

