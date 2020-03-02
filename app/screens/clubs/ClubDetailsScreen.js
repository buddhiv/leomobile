import React from 'react';
import {
    View,
    Text, StyleSheet
} from 'react-native';
import Layout from "../../core/Layout";

class ClubDetailsScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Layout>
                <View style={{padding: 15}}>
                    <View style={{alignItems: 'center'}}>
                        <View>

                        </View>
                        <Text style={styles.clubNameText}>Leo Club or University of Moratuwa</Text>
                        <Text>Leo District 306A2</Text>
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

export default ClubDetailsScreen;
