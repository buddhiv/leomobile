import React from 'react';
import {
    View,
    Text, FlatList,
} from 'react-native';
import Layout from '../../common/Layout';
import ClubsListRowComponent from './components/ClubsListRowComponent';
import ClubsAPIService from './services/ClubsAPIService';
import IconComponent from '../../common/components/IconComponent';
import TouchableComponent from '../../common/components/TouchableComponent';
import MemberDetailsService from '../members/services/MemberDetailsService';
import DistrictsAPIService from '../districts/services/DistrictsAPIService';
import UserService from '../../common/services/UserService';

class ClubsScreen extends React.Component {
    constructor(props) {
        super(props);

        this.user = UserService.getCurrentUser();

        this.state = {
            clubsList: [],
            districtsList: [],
            filters: this.getDefaultFilter(),
            loading: true,
        };
    }

    componentDidMount(): void {
        this.getClubsList(true);
    }

    getClubsList = async (isInitial) => {
        try {
            let clubsResult = await ClubsAPIService.getClubsListApi(this.state.filters);
            let stateObj = {
                clubsList: clubsResult.data.data,
                loading: false,
            };

            let districtsResult = undefined;
            if (isInitial) {
                districtsResult = await DistrictsAPIService.getDistrictsListApi();
                stateObj.districtsList = districtsResult.data.data;
            }

            if (!clubsResult.data.error && (!districtsResult || !districtsResult.data.error)) {
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
                leoDistrictId: MemberDetailsService.getDistrictId(this.user),
            },
        };
    };

    goToClubDetailsScreen = (club) => {
        this.props.navigation.navigate('Club Details', {
            clubId: club.id,
        });
    };

    goToFilters = () => {
        this.props.navigation.navigate('Filter Clubs', {
            filters: this.state.filters,
            districtsList: this.state.districtsList,
            resetFiltersCallback: this.resetFiltersCallback,
            searchCallback: this.searchCallback,
        });
    };

    resetFiltersCallback = () => {
        this.setState({filters: this.getDefaultFilter(), loading: true}, () => {
            this.getClubsList();
        });
    };

    searchCallback = (newFilters) => {
        this.setState({filters: newFilters, loading: true}, () => {
            this.getClubsList();
        });
    };

    rowRenderer = (club) => {
        return <ClubsListRowComponent club={club} onPress={this.goToClubDetailsScreen}/>;
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
                        alignItems: 'center',
                    }}>
                        <View style={{flex: 1}}>
                            <Text>{this.state.clubsList.length} Result(s)</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <View style={{marginRight: 10}}>
                                <Text>Change Filters</Text>
                            </View>
                            <View>
                                <IconComponent.MaterialCommunityIcons name={'filter'} size={20}/>
                            </View>
                        </View>
                    </View>
                </TouchableComponent>

                <FlatList data={this.state.clubsList}
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

export default ClubsScreen;
