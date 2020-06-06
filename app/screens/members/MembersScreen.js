import React from 'react';
import {
    View,
    Text, FlatList,
} from 'react-native';
import Layout from '../../common/Layout';
import MembersAPIService from './services/MembersAPIService';
import MembersListRowComponent from './components/MembersListRowComponent';
import CardComponent from '../../common/components/CardComponent';
import IconComponent from '../../common/components/IconComponent';
import TouchableComponent from '../../common/components/TouchableComponent';

class MembersScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            membersList: [],
            loading: true,
        };
    }

    componentDidMount(): void {
        MembersAPIService.getMembersListApi().then((result) => {
            if (result.status === 200) {
                this.setState({
                    membersList: result.data.data,
                    loading: false,
                });
            }
        });
    }

    goToMemberDetailsScreen = (member) => {
        this.props.navigation.navigate('Member Details', {
            memberId: member.id,
        });
    };

    goToFilters = () => {
        this.props.navigation.navigate('Filter Members');
    };

    rowRenderer = (member) => {
        return <MembersListRowComponent member={member} onPress={this.goToMemberDetailsScreen}/>;
    };

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Layout loading={this.state.loading} scrollEnabled={false}>
                <TouchableComponent onPress={this.goToFilters}>
                    <View style={{
                        flexDirection: 'row',
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                        backgroundColor: 'white',
                    }}>
                        <View style={{flex: 1}}>
                            <Text>{this.state.membersList.length} Results</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{marginRight: 10}}>
                                <Text>Change Filters</Text>
                            </View>
                            <View>
                                <IconComponent.MaterialCommunityIcons name={'filter'} size={20}/>
                            </View>
                        </View>
                    </View>
                </TouchableComponent>

                <FlatList data={this.state.membersList}
                          renderItem={this.rowRenderer}
                          ListHeaderComponent={() => {
                              return <View style={{height: 10}}/>;
                          }}
                          ListFooterComponent={() => {
                              return <View style={{height: 10}}/>;
                          }}
                          keyExtractor={(item, index) => {
                              return item.id.toString();
                          }}
                />
            </Layout>
        );
    }
};

export default MembersScreen;
