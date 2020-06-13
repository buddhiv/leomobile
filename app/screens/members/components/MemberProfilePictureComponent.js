import React from 'react';
import {SafeAreaView, ScrollView, View, Text, Image} from 'react-native';
import {DrawerItemList, DrawerItem} from '@react-navigation/drawer';

const MemberProfilePictureComponent: () => React$Node = (props) => {
    let imageBase64Source = 'data:' + props.imageType + ';base64,' + props.imageData;

    return (
        <>
            <View style={[{
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                width: props.size,
                height: props.size,
                borderRadius: props.size / 2,
                backgroundColor: 'white',
            }, props.border ? {
                width: props.size + (props.borderWidth * 2),
                height: props.size + (props.borderWidth * 2),
                borderRadius: props.size + (props.borderWidth * 2) / 2,
                borderWidth: props.borderWidth,
                borderColor: props.borderColor,
            } : {}]}>
                {
                    imageBase64Source ? <Image
                        source={{uri: imageBase64Source}}
                        style={{
                            width: props.size,
                            height: props.size,
                            resizeMode: 'cover',
                        }}/> : <Image
                        source={require('../../../assets/default-photo.png')}
                        style={{
                            width: props.size,
                            height: props.size,
                            resizeMode: 'contain',
                        }}/>
                }

            </View>
        </>
    );
};

export default MemberProfilePictureComponent;

