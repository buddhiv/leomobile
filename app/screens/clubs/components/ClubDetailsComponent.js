import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, ScrollView, View, Text, Image, StyleSheet} from 'react-native';
import {DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import CardComponent from '../../../common/components/CardComponent';
import ClubProfilePictureComponent from './ClubProfilePictureComponent';
import TouchableComponent from '../../../common/components/TouchableComponent';
import IconComponent from '../../../common/components/IconComponent';
import TableComponent from '../../../common/components/TableComponent';
import ClubDetailsService from '../services/ClubDetailsService';
import ClubDirectoryItemComponent from './ClubDirectoryItemComponent';
import Layout from '../../../common/Layout';

const ClubDetailsComponent: () => React$Node = (props) => {
    console.log(props);

    return (
        <>
            <ScrollView>

                    {/*<View style={{padding: 15}}>*/}
                    {/*    <View style={{flexDirection: 'column-reverse'}}>*/}
                    {/*        <CardComponent cardStyle={{*/}
                    {/*            alignItems: 'center',*/}
                    {/*            paddingTop: 50,*/}
                    {/*            marginTop: -40,*/}
                    {/*        }}>*/}
                    {/*            <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center'}} numberOfLines={2}>*/}
                    {/*                {this.state.club.id ? this.state.club.name : ''}*/}
                    {/*            </Text>*/}
                    {/*            <Text style={{}} numberOfLines={2}>*/}
                    {/*                {this.state.club.id ? 'Leo District 306 A2' : ''}*/}
                    {/*            </Text>*/}
                    {/*        </CardComponent>*/}

                    {/*        <View style={{alignItems: 'center'}}>*/}
                    {/*            <ClubProfilePictureComponent size={100} border={false}/>*/}
                    {/*        </View>*/}
                    {/*    </View>*/}

                    {/*    <View style={{paddingTop: 10}}>*/}
                    {/*        <CardComponent>*/}
                    {/*            <View style={{flexDirection: 'row'}}>*/}
                    {/*                <View style={{flex: 1, alignItems: 'center'}}>*/}
                    {/*                    <TouchableComponent onPress={this.goToWebsite}>*/}
                    {/*                        <IconComponent.MaterialCommunityIcons name={'web'} size={28}/>*/}
                    {/*                    </TouchableComponent>*/}
                    {/*                </View>*/}
                    {/*                <View style={{flex: 1, alignItems: 'center'}}>*/}
                    {/*                    <TouchableComponent onPress={this.goToFacebook}>*/}
                    {/*                        <IconComponent.MaterialCommunityIcons name={'facebook'} size={28}/>*/}
                    {/*                    </TouchableComponent>*/}
                    {/*                </View>*/}
                    {/*                <View style={{flex: 1, alignItems: 'center'}}>*/}
                    {/*                    <TouchableComponent onPress={this.goToInstagram}>*/}
                    {/*                        <IconComponent.MaterialCommunityIcons name={'instagram'} size={28}/>*/}
                    {/*                    </TouchableComponent>*/}
                    {/*                </View>*/}
                    {/*                <View style={{flex: 1, alignItems: 'center'}}>*/}
                    {/*                    <TouchableComponent onPress={this.goToTwitter}>*/}
                    {/*                        <IconComponent.MaterialCommunityIcons name={'twitter'} size={28}/>*/}
                    {/*                    </TouchableComponent>*/}
                    {/*                </View>*/}
                    {/*                <View style={{flex: 1, alignItems: 'center'}}>*/}
                    {/*                    <TouchableComponent onPress={this.goToLinkedin}>*/}
                    {/*                        <IconComponent.MaterialCommunityIcons name={'linkedin'} size={28}/>*/}
                    {/*                    </TouchableComponent>*/}
                    {/*                </View>*/}
                    {/*                <View style={{flex: 1, alignItems: 'center'}}>*/}
                    {/*                    <TouchableComponent onPress={this.goToEmail}>*/}
                    {/*                        <IconComponent.MaterialCommunityIcons name={'email'} size={28}/>*/}
                    {/*                    </TouchableComponent>*/}
                    {/*                </View>*/}
                    {/*            </View>*/}
                    {/*        </CardComponent>*/}
                    {/*    </View>*/}

                    {/*    <View style={{paddingTop: 10}}>*/}
                    {/*        <CardComponent>*/}
                    {/*            <View>*/}
                    {/*                <Text style={{fontWeight: 'bold'}}>General</Text>*/}

                    {/*                <View style={{paddingVertical: 10}}>*/}
                    {/*                    <TableComponent data={this.getClubGeneralInformation()}*/}
                    {/*                                    columnRatio={[1, 2]}/>*/}
                    {/*                </View>*/}
                    {/*            </View>*/}
                    {/*            <View>*/}
                    {/*                <Text style={{fontWeight: 'bold'}}>Social</Text>*/}

                    {/*                <View style={{paddingTop: 10}}>*/}
                    {/*                    <TableComponent data={this.getClubSocialInformation()}*/}
                    {/*                                    columnRatio={[1, 2]}/>*/}
                    {/*                </View>*/}
                    {/*            </View>*/}
                    {/*        </CardComponent>*/}
                    {/*    </View>*/}

                    {/*    <View style={{paddingTop: 10}}>*/}
                    {/*        <CardComponent cardStyle={{padding: 0}}>*/}
                    {/*            {ClubDetailsService.isClubKeyOfficersAdded(this.state.directory) ? <View style={{*/}
                    {/*                padding: 15,*/}
                    {/*                borderBottomWidth: StyleSheet.hairlineWidth,*/}
                    {/*                borderBottomColor: '#dddddd',*/}
                    {/*            }}>*/}
                    {/*                <View>*/}
                    {/*                    <Text style={{fontWeight: 'bold'}}>Club Key Officers</Text>*/}
                    {/*                </View>*/}
                    {/*                <View>*/}
                    {/*                    {*/}
                    {/*                        this.state.directory.map((directoryItem, index) => {*/}
                    {/*                            return <ClubDirectoryItemComponent directoryItem={directoryItem}*/}
                    {/*                                                               key={index}*/}
                    {/*                                                               onPressProfilePicture={this.goToMemberDetails}*/}
                    {/*                            />;*/}
                    {/*                        })*/}
                    {/*                    }*/}
                    {/*                </View>*/}
                    {/*            </View> : null}*/}

                    {/*            <TouchableComponent onPress={this.goToClubMembers}>*/}
                    {/*                <View style={{padding: 15}}>*/}
                    {/*                    <Text>See All Members</Text>*/}
                    {/*                </View>*/}
                    {/*            </TouchableComponent>*/}

                    {/*            /!*<TouchableComponent>*!/*/}
                    {/*            /!*    <View style={{*!/*/}
                    {/*            /!*        padding: 15,*!/*/}
                    {/*            /!*        borderTopWidth: StyleSheet.hairlineWidth,*!/*/}
                    {/*            /!*        borderTopColor: '#dddddd',*!/*/}
                    {/*            /!*    }}>*!/*/}
                    {/*            /!*        <Text>Add Member</Text>*!/*/}
                    {/*            /!*    </View>*!/*/}
                    {/*            /!*</TouchableComponent>*!/*/}
                    {/*        </CardComponent>*/}
                    {/*    </View>*/}
                    {/*</View>*/}

                    <Text>sdsdsd</Text>
            </ScrollView>
        </>
    );
};

ClubDetailsComponent.propTypes = {};

export default ClubDetailsComponent;

