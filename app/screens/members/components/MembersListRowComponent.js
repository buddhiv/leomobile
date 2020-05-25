import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
} from 'react-native';
import MemberDetailsService from '../services/MemberDetailsService';

const MembersListRowComponent: () => React$Node = (props) => {
    return (
        <>
            <TouchableWithoutFeedback onPress={() => {
                props.onPress(props.member.item);
            }}>
                <View style={styles.rowStyle}>
                    <Text
                        style={styles.projectNameText}>Leo {MemberDetailsService.getFullName(props.member.item)}</Text>
                    <Text style={{}}>{props.member.item.email}</Text>
                </View>
            </TouchableWithoutFeedback>
        </>
    );
};

const styles = StyleSheet.create({
    rowStyle: {
        paddingVertical: 5,
        paddingHorizontal: 15,

    },
    projectNameText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    secondRowText: {
        flexDirection: 'row',
    },
});

export default MembersListRowComponent;
