import React from 'react';
import {View, Image} from 'react-native';
import ProfilePictureService from '../../../common/services/ProfilePictureService';

class MemberProfilePictureComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            memberImageData: null,
        };
    }

    componentDidMount(): void {
        this.getEmployeeProfilePicture();
    }

    getEmployeeProfilePicture = async () => {
        try {
            let profilePictureResult = await ProfilePictureService.getProfilePictureByEmployeeId(this.props.memberId);

            console.log('profilePictureResult');
            console.log(profilePictureResult);
        } catch (e) {
            console.log(e);
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
                        this.state.memberImageData ? <Image
                            source={{uri: this.state.memberImageData}}
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

