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

const DrawerContentComponent: () => React$Node = (props) => {

    let userObj = props.user.user;

    let logout = async () => {
        try {
            await LoginService.logOut();
        } finally {
            props.actions.setAppState(LoginService.NOT_LOGGED_IN);
        }
    };

    return (
        <>
            <SafeAreaView style={{flex: 1}} forceInset={{top: 'always', horizontal: 'never'}}>

                <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
                    <View>
                        <MemberProfilePictureComponent size={60} border={false}/>
                    </View>
                    <View style={{marginTop: 10}}>
                        <Text>{MemberDetailsService.getFullName(userObj)}</Text>
                        <Text>{userObj.leoClub ? userObj.leoClub.name : ''}</Text>
                    </View>
                </View>

                <ScrollView contentContainerStyle={{flexGrow: 1}} bounces={false}>
                    <DrawerItemList {...props} />
                </ScrollView>

                <View>
                    <DrawerItem label={'Log Out'} onPress={logout}/>
                </View>

                <View style={{borderTopColor: '#dddddd', borderTopWidth: StyleSheet.hairlineWidth}}>
                    <View style={{
                        paddingVertical: 10,
                        paddingHorizontal: 18,
                    }}>
                        <Text style={{fontSize: 10}}>Leo Mobile - 1.0-alpha.3</Text>
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

