import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, ScrollView, View, Text, Image, Animated} from 'react-native';
import {DrawerItemList, DrawerItem} from '@react-navigation/drawer';

const MessageComponent: () => React$Node = (props) => {
    let viewScaleValue = new Animated.Value(1);
    const [show, setShow] = useState(true);

    setTimeout(() => {
        Animated.timing(viewScaleValue, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
        }).start(() => {
            console.log('finish');
            setShow(false);
        });
    }, 5000);

    return (
        <>
            <View>
                {show ? <Animated.View style={{
                    backgroundColor: 'green',
                    paddingHorizontal: 15,
                    paddingVertical: 5,
                    opacity: viewScaleValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 1],
                    }),
                }}>
                    <Text style={{color: 'white'}}>{props.text}</Text>
                </Animated.View> : null}
            </View>

        </>
    );
};

MessageComponent.propTypes = {};

export default MessageComponent;

