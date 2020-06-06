import React from 'react';
import {
    View,
    Text, FlatList,
} from 'react-native';
import Layout from '../../common/Layout';
import MembersAPIService from './services/MembersAPIService';
import MembersListRowComponent from './components/MembersListRowComponent';
import IconComponent from '../../common/components/IconComponent';
import TouchableComponent from '../../common/components/TouchableComponent';
import GlobalService from '../../lib/services/GlobalService';
import ClubsAPIService from '../clubs/services/ClubsAPIService';

class MembersScreen extends React.Component {
    constructor(props) {
        super(props);

        this.user = GlobalService.get('user');
        this.clubId = props.route.params ? props.route.params.clubId : undefined;
        this.filterable = props.route.params ? props.route.params.filterable : true;

        this.state = {
            membersList: [],
            clubsList: [],
            filters: this.getDefaultFilter(),
            loading: true,
        };
    }

    componentDidMount(): void {
        this.getMembersList(true);
    }

    getMembersList = async (isInitial) => {
        try {
            let membersResult = await MembersAPIService.getMembersListApi(this.state.filters);
            let stateObj = {
                membersList: membersResult.data.data,
                loading: false,
            };

            let clubsResult = undefined;
            if (isInitial) {
                clubsResult = await ClubsAPIService.getClubsListApi();
                stateObj.clubsList = clubsResult.data.data;
            }

            if (!membersResult.data.error && (!clubsResult || !clubsResult.data.error)) {
                this.setState(stateObj);
            }
        } catch (e) {
            console.log(e);
            this.setState({
                loading: false,
            });
        }
    };

    getDefaultFilter = () => {
        return {
            filters: {
                name: '',
                gender: '',
                clubId: this.clubId ? this.clubId : this.user.leoClubId,
                mylciId: '',
            },
        };
    };

    goToMemberDetailsScreen = (member) => {
        this.props.navigation.navigate('Member Details', {
            memberId: member.id,
        });
    };

    goToFilters = () => {
        this.props.navigation.navigate('Filter Members', {
            filters: this.state.filters,
            clubsList: this.state.clubsList,
            resetFiltersCallback: this.resetFiltersCallback,
            searchCallback: this.searchCallback,
        });
    };

    resetFiltersCallback = () => {
        this.setState({filters: this.getDefaultFilter(), loading: true}, () => {
            this.getMembersList();
        });
    };

    searchCallback = (newFilters) => {
        this.setState({filters: newFilters, loading: true}, () => {
            this.getMembersList();
        });
    };

    rowRenderer = (member) => {
        return <MembersListRowComponent member={member} onPress={this.goToMemberDetailsScreen}/>;
    };

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Layout loading={this.state.loading} scrollEnabled={false}>

                <TouchableComponent disabled={!this.filterable} onPress={this.goToFilters}>
                    <View style={{
                        flexDirection: 'row',
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                        backgroundColor: 'white',
                    }}>
                        <View style={{flex: 1}}>
                            <Text>{this.state.membersList.length} Result(s)</Text>
                        </View>

                        {this.filterable ? <View style={{flexDirection: 'row'}}>
                            <View style={{marginRight: 10}}>
                                <Text>Change Filters</Text>
                            </View>
                            <View>
                                <IconComponent.MaterialCommunityIcons name={'filter'} size={20}/>
                            </View>
                        </View> : null}

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
