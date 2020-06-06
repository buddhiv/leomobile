import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TextInput} from 'react-native';

const TextWidget: () => React$Node = (props) => {
    return (
        <>
            <View>
                <View>
                    <Text>{props.label}</Text>
                </View>
                <View style={{marginTop: -5, marginBottom: -10}}>
                    <TextInput onChangeText={props.onChangeText}/>
                </View>
                <View style={{borderTopWidth: 1, borderTopColor: 'black'}}>
                    {/*<Text style={{fontSize: 10}}>Required</Text>*/}
                </View>
            </View>
        </>
    );
};

TextWidget.propTypes = {
    onChangeText: PropTypes.func,
};

export default TextWidget;

