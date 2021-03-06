import React from 'react';
import {SafeAreaView, ScrollView, View, Text, StyleSheet} from 'react-native';
import {DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import LoginService from '../../lib/services/LoginService';
import MemberDetailsService from '../../screens/members/services/MemberDetailsService';
import MemberProfilePictureComponent from '../../screens/members/components/MemberProfilePictureComponent';
import {connect, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setUser} from '../../redux/actions/UserActions';
import {setPermissions} from '../../redux/actions/PermissionActions';
import {setAppState} from '../../redux/actions/AppStateActions';
import AsyncStorage from '@react-native-community/async-storage';

const DrawerContentComponent: () => React$Node = (props) => {

    let userObj = props.user.user;

    let logout = async () => {
        try {
            await LoginService.logOut();
        } finally {
            await AsyncStorage.multiRemove(['username', 'password']);
            props.actions.setAppState(LoginService.NOT_LOGGED_IN);
        }
    };

    return (
        <>
            <SafeAreaView style={{flex: 1}} forceInset={{top: 'always', horizontal: 'never'}}>

                <View style={{
                    paddingHorizontal: 20,
                    paddingVertical: 20,
                    borderBottomColor: '#dddddd',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }}>
                    <View>
                        <MemberProfilePictureComponent memberId={userObj.id} size={60} border={false}
                                                       loadAutomatically={true}/>
                    </View>
                    <View style={{marginTop: 10}}>
                        <Text style={{fontWeight: 'bold'}}>{MemberDetailsService.getFullName(userObj)}</Text>
                        <Text>{userObj.leoClub ? userObj.leoClub.name : ''}</Text>
                    </View>
                </View>

                <ScrollView contentContainerStyle={{flexGrow: 1}} bounces={false}>
                    <DrawerItemList {...props} />
                </ScrollView>

                <View style={{borderTopColor: '#dddddd', borderTopWidth: StyleSheet.hairlineWidth}}>
                    <DrawerItem label={'Log Out'} onPress={logout}/>
                </View>

                <View style={{borderTopColor: '#dddddd', borderTopWidth: StyleSheet.hairlineWidth}}>
                    <View style={{paddingVertical: 10, paddingHorizontal: 18}}>
                        <Text style={{fontSize: 10}}>MyLeo - 1.0-alpha.7</Text>
                        <Text style={{fontSize: 10, color: '#777777'}}>Powered by PulseQue.</Text>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
};

let mapStateToProps = state => ({
    user: state.user,
});

let mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({setAppState}, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContentComponent);

