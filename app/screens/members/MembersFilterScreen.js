import React from 'react';
import {
    View,
    Text, StyleSheet, Linking, TextInput, Button,
} from 'react-native';
import Layout from '../../common/Layout';
import CardComponent from '../../common/components/CardComponent';
import TextWidget from '../../common/widgets/TextWidget';
import PickerWidget from '../../common/widgets/PickerWidget';
import ClubDetailsService from '../clubs/services/ClubDetailsService';

class MembersFilterScreen extends React.Component {
    constructor(props) {
        super(props);

        this.filters = props.route.params.filters;
        this.clubsList = ClubDetailsService.formatClubsListForPicker(props.route.params.clubsList);
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
        let newFilters = {
            filters: {
                name: 'buddhi',
                gender: '',
                clubId: '',
                mylciId: '',
            },
        };

        console.log('this.state.filters');
        console.log(this.state.filters);

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
                                <TextWidget label={'Member Name'}
                                            value={this.state.filters.filters.name}
                                            onChangeText={(text) => {
                                                this.state.filters.filters.name = text;
                                                this.setState({
                                                    filters: this.state.filters,
                                                });
                                            }}/>
                            </View>

                            <View style={{marginTop: 20}}>
                                <TextWidget label={'Member LCI'}
                                            value={this.state.filters.filters.mylciId}
                                            onChangeText={(text) => {
                                                this.state.filters.filters.mylciId = text;
                                                this.setState({
                                                    filters: this.state.filters,
                                                });
                                            }}/>
                            </View>

                            <View style={{marginTop: 20}}>
                                <PickerWidget label={'Club'}
                                              data={this.clubsList}
                                              selectedValue={this.state.filters.filters.clubId}
                                              onValueChange={(itemValue, itemIndex) => {
                                                  this.state.filters.filters.clubId = itemValue;
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

export default MembersFilterScreen;
