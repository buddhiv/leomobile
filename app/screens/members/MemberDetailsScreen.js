import React from 'react';
import {
    View,
    Text, StyleSheet,
} from 'react-native';
import Layout from '../../core/Layout';
import MembersAPIService from './services/MembersAPIService';
import MemberDetailsService from './services/MemberDetailsService';
import GlobalService from '../../lib/services/GlobalService';

class MemberDetailsScreen extends React.Component {
    constructor(props) {
        super(props);

        let currentUser = GlobalService.get('user');

        this.state = {
            memberId: props.route.params.mode === 'my' ? currentUser.id : props.route.params.memberId,
            member: {},
            loading: true,
        };
    }

    componentDidMount(): void {
        MembersAPIService.getMemberDetailsApi(this.state.memberId).then((result) => {
            this.setState({
                member: result.data.data,
                loading: false,
            });
        });
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Layout loading={this.state.loading}>
                <View style={{padding: 15}}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.clubNameText}>
                            {this.state.member.id ? 'Leo ' + MemberDetailsService.getFullName(this.state.member) : ''}
                        </Text>
                        <Text>{this.state.member.email ? this.state.member.email : ''}</Text>
                    </View>

                    <View style={{flexDirection: 'row', marginTop: 30}}>
                        <View style={{flex: 1}}></View>
                        <View style={{flex: 2}}>
                            <Text>Full Name :</Text>
                            <Text>Date of Birth :</Text>
                        </View>
                        <View style={{flex: 3}}>
                            <Text>{this.state.member.id ? MemberDetailsService.getFullName(this.state.member) : ''}</Text>
                            <Text>{this.state.member.birthday ? this.state.member.birthday : ''}</Text>
                        </View>
                        <View style={{flex: 1}}></View>
                    </View>
                </View>
            </Layout>
        );
    }
};

const styles = StyleSheet.create({
    clubNameText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default MemberDetailsScreen;
