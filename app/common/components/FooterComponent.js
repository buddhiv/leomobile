import React from 'react';
import {SafeAreaView, ScrollView, View, Text, Image, FlatList} from 'react-native';
import {DrawerItemList, DrawerItem} from '@react-navigation/drawer';

const FooterComponent: () => React$Node = (props) => {

    return (
        <>
            <View style={{alignItems: 'center', flexDirection: 'row'}}>
                <Text>Leo Mobile - </Text>
                <Text style={{color: '#777777'}}>Powered by PulseQue.</Text>
            </View>
        </>
    );
};

export default FooterComponent;

