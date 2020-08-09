import React from 'react';
import {View, Image} from 'react-native';
import ProfilePictureService from '../../../common/services/ProfilePictureService';

class MemberProfilePictureComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            memberBase64Image: props.memberBase64Image,
        };
    }

    componentDidMount(): void {
        if (this.props.loadAutomatically) {
            this.getEmployeeProfilePicture();
        }
    }

    getEmployeeProfilePicture = async () => {
        try {
            let profilePictureResult = await ProfilePictureService.getProfilePictureByEmployeeId(this.props.memberId);

            await this.setState({memberBase64Image: profilePictureResult.data.data[0].profilePicture});
        } catch (e) {
            // console.log(e);
        }
    };

    static getDerivedStateFromProps(props, state) {
        if (props.memberBase64Image) {
            return {memberBase64Image: props.memberBase64Image};
        }
        return null;
    }

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
                        this.state.memberBase64Image ? <Image
                            source={{uri: this.state.memberBase64Image}}
                            style={{
                                width: this.props.size,
                                height: this.props.size,
                                resizeMode: 'cover',
                            }}/> : <Image
                            source={require('../../../assets/default-photo.png')}
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

export default MemberProfilePictureComponent;

