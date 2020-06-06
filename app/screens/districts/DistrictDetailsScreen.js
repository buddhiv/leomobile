import React from 'react';
import {
    View,
    Text, StyleSheet,
} from 'react-native';
import Layout from '../../common/Layout';
import moment from 'moment';
import CardComponent from '../../common/components/CardComponent';
import DistrictProfilePictureComponent from './components/DistrictProfilePictureComponent';
import DistrictsAPIService from './services/DistrictsAPIService';
import IconComponent from '../../common/components/IconComponent';
import TouchableComponent from '../../common/components/TouchableComponent';
import TableComponent from '../../common/components/TableComponent';
import DistrictDirectoryItemComponent from './components/DistrictDirectoryItemComponent';
import DistrictDetailsService from './services/DistrictDetailsService';

class DistrictDetailsScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            districtId: props.route.params.districtId,
            district: {},
            directory: [],
            loading: true,
        };
    }

    componentDidMount(): void {
        this.getDistrictDetails();
    }

    getDistrictDetails = async () => {
        try {
            let result = await DistrictsAPIService.getDistrictDetailsApi(this.state.districtId);

            if (!result.data.error) {
                this.setState({
                    district: result.data.data.district,
                    directory: result.data.data.directory,
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

    goToWebsite = () => {

    };

    goToFacebook = () => {

    };

    goToInstagram = () => {

    };

    goToTwitter = () => {

    };

    goToLinkedin = () => {

    };

    goToEmail = () => {

    };

    getDistrictSocialInformation = () => {
        return this.state.district.id ? [
            ['Website', this.state.district.website],
            ['Email', this.state.district.email],
            ['Facebook', this.state.district.facebook],
            ['Instagram', this.state.district.instagram],
            ['Linkedin', this.state.district.linkedin],
            ['Twitter', this.state.district.twitter],
        ] : [];
    };

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Layout loading={this.state.loading} scrollEnabled={true}>
                <View style={{padding: 15}}>
                    <View style={{flexDirection: 'column-reverse'}}>
                        <CardComponent cardStyle={{
                            alignItems: 'center',
                            paddingTop: 50,
                            marginTop: -40,
                        }}>
                            <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center'}} numberOfLines={2}>
                                {this.state.district.id ? this.state.district.name : ''}
                            </Text>
                        </CardComponent>

                        <View style={{alignItems: 'center'}}>
                            <DistrictProfilePictureComponent size={100} border={false}/>
                        </View>
                    </View>

                    <View style={{paddingTop: 10}}>
                        <CardComponent>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{flex: 1, alignItems: 'center'}}>
                                    <TouchableComponent onPress={this.goToWebsite}>
                                        <IconComponent.MaterialCommunityIcons name={'web'} size={28}/>
                                    </TouchableComponent>
                                </View>
                                <View style={{flex: 1, alignItems: 'center'}}>
                                    <TouchableComponent onPress={this.goToFacebook}>
                                        <IconComponent.MaterialCommunityIcons name={'facebook'} size={28}/>
                                    </TouchableComponent>
                                </View>
                                <View style={{flex: 1, alignItems: 'center'}}>
                                    <TouchableComponent onPress={this.goToInstagram}>
                                        <IconComponent.MaterialCommunityIcons name={'instagram'} size={28}/>
                                    </TouchableComponent>
                                </View>
                                <View style={{flex: 1, alignItems: 'center'}}>
                                    <TouchableComponent onPress={this.goToTwitter}>
                                        <IconComponent.MaterialCommunityIcons name={'twitter'} size={28}/>
                                    </TouchableComponent>
                                </View>
                                <View style={{flex: 1, alignItems: 'center'}}>
                                    <TouchableComponent onPress={this.goToLinkedin}>
                                        <IconComponent.MaterialCommunityIcons name={'linkedin'} size={28}/>
                                    </TouchableComponent>
                                </View>
                                <View style={{flex: 1, alignItems: 'center'}}>
                                    <TouchableComponent onPress={this.goToEmail}>
                                        <IconComponent.MaterialCommunityIcons name={'email'} size={28}/>
                                    </TouchableComponent>
                                </View>
                            </View>
                        </CardComponent>
                    </View>

                    <View style={{paddingTop: 10}}>
                        <CardComponent>
                            <View>
                                <Text style={{fontWeight: 'bold'}}>Social</Text>

                                <View style={{paddingTop: 10}}>
                                    <TableComponent data={this.getDistrictSocialInformation()}
                                                    columnRatio={[1, 2]}/>
                                </View>
                            </View>
                        </CardComponent>
                    </View>

                    <View style={{paddingTop: 10}}>
                        <CardComponent cardStyle={{padding: 0}}>
                            {DistrictDetailsService.isClubKeyOfficersAdded(this.state.directory) ? <View style={{
                                padding: 15,
                                borderBottomWidth: StyleSheet.hairlineWidth,
                                borderBottomColor: '#dddddd',
                            }}>
                                <View>
                                    <Text style={{fontWeight: 'bold'}}>Club Key Officers</Text>
                                </View>
                                <View>
                                    {
                                        this.state.directory.map((directoryItem, index) => {
                                            return <DistrictDirectoryItemComponent directoryItem={directoryItem}
                                                                                   key={index}/>;
                                        })
                                    }
                                </View>
                            </View> : null}
                        </CardComponent>
                    </View>
                </View>
            </Layout>
        );
    }
};

export default DistrictDetailsScreen;
