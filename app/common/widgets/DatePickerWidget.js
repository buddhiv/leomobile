import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TextInput, TouchableWithoutFeedback} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import ColorService from '../services/ColorService';

const DatePickerWidget: () => React$Node = (props) => {

    let [date, setDate] = useState(moment(props.dateValue).toDate());
    let [show, setShow] = useState(false);

    return (
        <>
            <View>
                <View>
                    <Text>{props.label}</Text>
                </View>

                <TouchableWithoutFeedback onPress={() => {
                    setShow(true);
                }}>
                    <View style={{paddingVertical: 10}}>
                        <Text>{moment(date).format('YYYY-MM-DD')}</Text>
                    </View>
                </TouchableWithoutFeedback>

                <View style={{borderTopWidth: 1, borderTopColor: ColorService.PRIMARY_COLOR}}>
                    {/*<Text style={{fontSize: 10}}>Required</Text>*/}
                </View>

                <View>
                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={'date'}
                            is24Hour={true}
                            display="default"
                            onChange={(event, selectedDate) => {
                                let currentDate = selectedDate || date;
                                setShow(Platform.OS === 'ios');
                                setDate(currentDate);
                                if (event.type === 'set') {
                                    props.onChange(currentDate);
                                }
                            }}
                        />
                    )}
                </View>
            </View>
        </>
    );
};

DatePickerWidget.propTypes = {
    label: PropTypes.string,
};

export default DatePickerWidget;

