import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TextInput} from 'react-native';
import {Picker} from '@react-native-community/picker';
import ColorService from '../services/ColorService';

const PickerWidget: () => React$Node = (props) => {
    return (
        <>
            <View>
                <View>
                    <Text>{props.label}</Text>
                </View>
                <View style={{borderBottomWidth: 1, borderBottomColor: ColorService.PRIMARY_COLOR}}>
                    <Picker
                        selectedValue={props.selectedValue}
                        mode={'dropdown'}
                        onValueChange={(itemValue, itemIndex) => {
                            props.onValueChange(itemValue, itemIndex);
                        }}>

                        {
                            props.data.map((item, index) => {
                                return <Picker.Item label={item.label} value={item.value} key={index}/>;
                            })
                        }

                    </Picker>
                </View>
            </View>
        </>
    );
};

PickerWidget.propTypes = {
    onValueChange: PropTypes.func,
    data: PropTypes.array,
    selectedValue: PropTypes.any,
};

export default PickerWidget;

