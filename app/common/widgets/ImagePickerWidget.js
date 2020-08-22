import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TextInput, TouchableWithoutFeedback, Image} from 'react-native';
import moment from 'moment';
import ColorService from '../services/ColorService';
import ImagePicker from 'react-native-image-picker';
import TouchableComponent from '../components/TouchableComponent';

const ImagePickerWidget: () => React$Node = (props) => {

    let [base64Image, setBase64Image] = useState(props.base64Image);

    let openImagePicker = () => {
        ImagePicker.showImagePicker({}, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                // console.log('User cancelled image picker');
            } else if (response.error) {
                // console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                // console.log('User tapped custom button: ', response.customButton);
            } else {
                // const source = {uri: response.uri};

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                let base64String = 'data:image/jpeg;base64,' + response.data;

                setBase64Image(base64String);
                props.onChange(response);
            }
        });
    };

    return (
        <>
            <View style={{flexDirection: 'row', flex: 1}}>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    borderRadius: 50,
                    backgroundColor: 'white',
                }}>
                    <Image
                        source={{uri: base64Image}}
                        // source={require('../../assets/default-photo.png')}
                        style={{
                            width: 100,
                            height: 100,
                            resizeMode: 'cover',
                        }}/>
                </View>

                <View style={{marginLeft: 15, flex: 1}}>
                    <View>
                        <Text>{props.label}</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <View style={{marginTop: 10, padding: 10, backgroundColor: '#e2e2e2', borderRadius: 5}}>
                            <TouchableComponent onPress={openImagePicker}>
                                <Text>Change</Text>
                            </TouchableComponent>
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
};

ImagePickerWidget.propTypes = {
    label: PropTypes.string,
};

export default ImagePickerWidget;

