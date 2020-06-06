import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TextInput} from 'react-native';
import {Picker} from '@react-native-community/picker';

const PickerWidget: () => React$Node = (props) => {
    return (
        <>
            <View>
                <View>
                    <Text>{props.label}</Text>
                </View>
                <View style={{borderBottomWidth: 1, borderBottomColor: 'black'}}>
                    <Picker
                        mode={'dropdown'}
                        onValueChange={(itemValue, itemIndex) => {

                        }}>
                        <Picker.Item label="Java" value="java"/>
                        <Picker.Item label="JavaScript" value="js"/>
                    </Picker>
                </View>
            </View>
        </>
    );
};

PickerWidget.propTypes = {
    onChangeText: PropTypes.func,
};

export default PickerWidget;

