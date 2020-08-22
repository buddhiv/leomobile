import React from 'react';
import {
    View,
    Text, FlatList,
} from 'react-native';
import Layout from '../../common/Layout';
import DistrictsAPIService from './services/DistrictsAPIService';
import DistrictsListRowComponent from './components/DistrictsListRowComponent';

class DistrictsScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            districtsList: [],
            loading: true,
        };
    }

    componentDidMount(): void {
        this.getDistrictsList();
    }

    getDistrictsList = async () => {
        try {
            let result = await DistrictsAPIService.getDistrictsListApi();

            if (!result.data.error) {
                this.setState({
                    districtsList: result.data.data,
                    loading: false,
                });
            }
        } catch (e) {
            console.log(e);

            this.setState({
                loading: false,
            });
        }
    };

    goToDistrictDetailsScreen = (district) => {
        this.props.navigation.navigate('District Details', {
            districtId: district.id,
        });
    };

    rowRenderer = (district) => {
        return <DistrictsListRowComponent district={district} onPress={this.goToDistrictDetailsScreen}/>;
    };

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Layout loading={this.state.loading} scrollEnabled={false}>
                <View style={{
                    flexDirection: 'row',
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                    backgroundColor: 'white',
                    alignItems: 'center',
                }}>
                    <View style={{flex: 1}}>
                        <Text>{this.state.districtsList.length} Result(s)</Text>
                    </View>
                </View>

                <FlatList data={this.state.districtsList}
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

export default DistrictsScreen;
