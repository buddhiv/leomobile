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

class ClubsScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clubsList: [],
            loading: true,
        };
    }

    componentDidMount(): void {
        ClubsAPIService.getClubsListApi().then((result) => {
            if (result.status === 200) {
                this.setState({
                    clubsList: result.data.data,
                    loading: false,
                });
            }
        });
    }

    goToClubDetailsScreen = (club) => {
        this.props.navigation.navigate('Club Details', {
            clubId: club.id,
        });
    };

    goToFilters = () => {
        this.props.navigation.navigate('Filter Clubs');
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
                    }}>
                        <View style={{flex: 1}}>
                            <Text>{this.state.clubsList.length} Results</Text>
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
