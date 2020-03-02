import React from 'react';
import {
    View,
    Text, StyleSheet
} from 'react-native';
import Layout from "../../core/Layout";

class MemberDetailsScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Layout>
                <View style={{padding: 15}}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.clubNameText}>Leo Buddhi Vikasitha</Text>
                        <Text>Leo Club of University of Moratuwa</Text>
                        <Text>Leo District 306 A2</Text>
                    </View>

                    <View style={{flexDirection: 'row', marginTop: 30}}>
                        <View style={{flex: 1}}></View>
                        <View style={{flex: 2}}>
                            <Text>Full Name :</Text>
                            <Text>Date of Birth :</Text>
                        </View>
                        <View style={{flex: 3}}>
                            <Text>Buddhi Vikasitha</Text>
                            <Text>31.10.1992</Text>
                        </View>
                        <View style={{flex: 1}}></View>
                    </View>
                </View>
            </Layout>
        )
    }
};

const styles = StyleSheet.create({
    clubNameText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default MemberDetailsScreen;
