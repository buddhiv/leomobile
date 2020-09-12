import Toast from 'react-native-toast-message';
import {View, Text} from 'react-native';

const ToastService = {
    getToastConfig: () => {
        return {
            'success': (internalState) => (
                <View style={{height: 60, width: '100%', backgroundColor: 'pink'}}>
                    <Text>{internalState.text1}</Text>
                </View>
            ),
            'error': () => {
            },
            'info': () => {
            },
            'any_custom_type': () => {
            },
        };
    },
    showSuccessToast: (message) => {
        Toast.show({
            type: 'success',
            position: 'top',
            text1: 'Success',
            text2: message,
            visibilityTime: 5000,
            autoHide: false,
            topOffset: 10,
            bottomOffset: 10,
            onShow: () => {
            },
            onHide: () => {
            },
        });
    },
    showErrorToast: (message) => {
        Toast.show({
            type: 'error',
            position: 'top',
            text1: 'Error',
            text2: message,
            visibilityTime: 5000,
            autoHide: false,
            topOffset: 10,
            bottomOffset: 10,
            onShow: () => {
            },
            onHide: () => {
            },
        });
    },
    showInfoToast: (message) => {
        Toast.show({
            type: 'info',
            position: 'top',
            text1: 'Info',
            text2: message,
            visibilityTime: 5000,
            autoHide: false,
            topOffset: 10,
            bottomOffset: 10,
            onShow: () => {
            },
            onHide: () => {
            },
        });
    },
};

export default ToastService;
