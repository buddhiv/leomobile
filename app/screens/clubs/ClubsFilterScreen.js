import React from 'react';
import {
    View,
    Text, StyleSheet, Linking, Button,
} from 'react-native';
import Layout from '../../common/Layout';
import CardComponent from '../../common/components/CardComponent';
import TextWidget from '../../common/widgets/TextWidget';
import PickerWidget from '../../common/widgets/PickerWidget';
import ClubDetailsService from './services/ClubDetailsService';
import DistrictDetailsService from '../districts/services/DistrictDetailsService';

class ClubsFilterScreen extends React.Component {
    constructor(props) {
        super(props);

        this.filters = props.route.params.filters;
        this.districtsList = DistrictDetailsService.formatDistrictsListForPicker(props.route.params.districtsList);

        this.resetFiltersCallback = props.route.params.resetFiltersCallback;
        this.searchCallback = props.route.params.searchCallback;

        this.state = {
            filters: this.filters,
            loading: false,
        };
    }

    componentDidMount(): void {

    }

    performSearch = () => {
        this.searchCallback(this.state.filters);
        this.props.navigation.goBack();
    };

    performReset = () => {
        this.resetFiltersCallback();
        this.props.navigation.goBack();
    };

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Layout loading={this.state.loading} scrollEnabled={true}>
                <View style={{padding: 15, flex: 1, justifyContent: 'space-between'}}>
                    <CardComponent>
                        <View>
                            <View>
                                <TextWidget label={'Club Name'}
                                            value={this.state.filters.filters.name}
                                            onChangeText={(text) => {
                                                this.state.filters.filters.name = text;
                                                this.setState({
                                                    filters: this.state.filters,
                                                });
                                            }}/>
                            </View>

                            <View style={{marginTop: 20}}>
                                <PickerWidget label={'District'}
                                              data={this.districtsList}
                                              selectedValue={this.state.filters.filters.districtId}
                                              onValueChange={(itemValue, itemIndex) => {
                                                  this.state.filters.filters.districtId = itemValue;
                                                  this.setState({
                                                      filters: this.state.filters,
                                                  });
                                              }}/>
                            </View>
                        </View>
                    </CardComponent>

                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 1, marginRight: 5}}>
                            <Button title={'RESET'} onPress={this.performReset}/>
                        </View>
                        <View style={{flex: 1, marginLeft: 5}}>
                            <Button title={'FILTER'} onPress={this.performSearch}/>
                        </View>
                    </View>
                </View>
            </Layout>
        );
    }
};

export default ClubsFilterScreen;
