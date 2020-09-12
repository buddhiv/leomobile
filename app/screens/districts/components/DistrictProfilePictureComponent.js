import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, ScrollView, View, Text, Image} from 'react-native';
import ProfilePictureService from '../../../common/services/ProfilePictureService';

class DistrictProfilePictureComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            districtBase64Image: null,
        };
    }

    componentDidMount(): void {
        this.getDistrictProfilePicture();
    }

    getDistrictProfilePicture = async () => {
        try {
            let profilePictureResult = await ProfilePictureService.getProfilePictureByDistrictId(this.props.districtId);

            await this.setState({districtBase64Image: profilePictureResult.data.data[0].logo});
        } catch (e) {
            // console.log(e);
        }
    };

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <>
                <View style={[{
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    width: this.props.size,
                    height: this.props.size,
                    borderRadius: this.props.size / 2,
                    backgroundColor: 'white',
                }, this.props.border ? {
                    width: this.props.size + (this.props.borderWidth * 2),
                    height: this.props.size + (this.props.borderWidth * 2),
                    borderRadius: this.props.size + (this.props.borderWidth * 2) / 2,
                    borderWidth: this.props.borderWidth,
                    borderColor: this.props.borderColor,
                } : {}]}>
                    {
                        this.state.districtBase64Image ? <Image
                            source={{uri: this.state.districtBase64Image}}
                            style={{
                                width: this.props.size,
                                height: this.props.size,
                                resizeMode: 'cover',
                            }}/> : <Image
                            source={require('../../../assets/leo-logo.png')}
                            style={{
                                width: this.props.size,
                                height: this.props.size,
                                resizeMode: 'contain',
                            }}/>
                    }
                </View>
            </>
        );
    }
};

DistrictProfilePictureComponent.propTypes = {};

export default DistrictProfilePictureComponent;

