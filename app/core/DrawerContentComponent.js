import React from 'react';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';
import {DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import LoginService from '../lib/services/LoginService';
import GlobalService from '../lib/services/GlobalService';
import UserService from './services/UserService';

const DrawerContentComponent: () => React$Node = (props) => {
    let user = GlobalService.get('user');

    return (
        <>
            <ScrollView contentContainerStyle={{flex: 1}} bounces={false}>
                <SafeAreaView style={{flex: 1}} forceInset={{top: 'always', horizontal: 'never'}}>

                    <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
                        <Text>{UserService.getUserName(user)}</Text>
                        <Text>{user.leoClub.name}</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <DrawerItemList {...props} />
                    </View>
                    <View>
                        <DrawerItem label={'Log Out'} onPress={LoginService.logOut}/>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </>
    );
};

export default DrawerContentComponent;

