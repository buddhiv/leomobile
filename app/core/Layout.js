import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
    ScrollView
} from 'react-native';

const Layout: () => React$Node = (props) => {
    return (
        <>
            <StatusBar barStyle="light-content"/>
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic">

                    {props.children}

                </ScrollView>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({});

export default Layout;
