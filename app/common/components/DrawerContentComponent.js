import React from 'react';
import {SafeAreaView, ScrollView, View, Text, StyleSheet} from 'react-native';
import {DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import LoginService from '../../lib/services/LoginService';
import GlobalService from '../../lib/services/GlobalService';
import MemberDetailsService from '../../screens/members/services/MemberDetailsService';

const DrawerContentComponent: () => React$Node = (props) => {
    let user = GlobalService.get('user');

    return (
        <>
            <SafeAreaView style={{flex: 1}} forceInset={{top: 'always', horizontal: 'never'}}>

                <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
                    <Text>{MemberDetailsService.getFullName(user)}</Text>
                    <Text>{user.leoClub.name}</Text>
                </View>

                <ScrollView contentContainerStyle={{flexGrow: 1}} bounces={false}>
                    <DrawerItemList {...props} />
                </ScrollView>

                <View>
                    <DrawerItem label={'Log Out'} onPress={LoginService.logOut}/>
                </View>

                <View style={{borderTopColor: '#dddddd', borderTopWidth: StyleSheet.hairlineWidth}}>
                    <View style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                        paddingVertical: 10,
                        paddingHorizontal: 18,
                    }}>
                        <Text style={{fontSize: 10}}>Leo Mobile - </Text>
                        <Text style={{fontSize: 10, color: '#777777'}}>Powered by PulseQue.</Text>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
};

export default DrawerContentComponent;

