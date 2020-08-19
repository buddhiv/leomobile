import React from 'react';
import {
    View, Text, StyleSheet, Image, Button,
} from 'react-native';
import Layout from '../../common/Layout';
import CardComponent from '../../common/components/CardComponent';
import TextWidget from '../../common/widgets/TextWidget';
import ColorService from '../../common/services/ColorService';
import LoginService from '../../lib/services/LoginService';
import ToastService from '../../common/services/ToastService';

class ForgotPasswordScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
        };
    }

    componentDidMount(): void {

    }

    generateResetPasswordToken = async () => {
        if (this.state.email) {
            await this.setState({loading: true});

            let tokenResult = await LoginService.generateResetPasswordToken(this.state.email);

            await this.setState({loading: false});

            if (!tokenResult.data.error) {
                ToastService.showSuccessToast(tokenResult.data.message);
            } else {
                ToastService.showErrorToast('Error');
            }
        }
    };

    resetPassword = async () => {
        if (this.state.verificationCode) {
            if (this.state.password === this.state.repeatedPassword) {

                let resetPassswordResult = await LoginService.resetPasswordResult(this.state.verificationCode, this.state.password);

            } else {
                ToastService.showErrorToast('Passwords are not Equal.');
            }
        } else {
            ToastService.showInfoToast('Please Obtain a Verification Code First.');
        }
    };

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Layout loading={this.state.loading} scrollEnabled={true}>
                <View style={{flex: 1, padding: 15}}>
                    <View style={{flex: 1}}>
                        <View style={{alignItems: 'center'}}>
                            <Image source={require('../../assets/app-logo.png')}
                                   style={{
                                       height: 100,
                                       resizeMode: 'contain',
                                   }}/>
                        </View>

                        <CardComponent>
                            <View>
                                <Text>Enter Your Email to Receieve a Verification Code</Text>
                            </View>

                            <View style={{marginTop: 20}}>
                                <TextWidget label={'Email'}
                                            value={this.state.email}
                                            onChangeText={(text) => {
                                                this.setState({
                                                    email: text,
                                                });
                                            }}/>
                            </View>

                            <View style={{marginTop: 15}}>
                                <Button title={'Send Verification Code'} onPress={this.generateResetPasswordToken}
                                        color={ColorService.PRIMARY_COLOR}/>
                            </View>

                        </CardComponent>

                        <CardComponent cardStyle={{marginTop: 15}}>
                            <View>
                                <Text>Enter New Password</Text>
                            </View>

                            <View style={{marginTop: 20}}>
                                <TextWidget label={'Verification Code'}
                                            value={this.state.verificationCode}
                                            onChangeText={(text) => {
                                                this.setState({
                                                    verificationCode: text,
                                                });
                                            }}/>
                            </View>

                            <View style={{marginTop: 20}}>
                                <TextWidget label={'Password'}
                                            value={this.state.password}
                                            onChangeText={(text) => {
                                                this.setState({
                                                    password: text,
                                                });
                                            }}/>
                            </View>

                            <View style={{marginTop: 20}}>
                                <TextWidget label={'Repeat Password'}
                                            value={this.state.repeatedPassword}
                                            onChangeText={(text) => {
                                                this.setState({
                                                    repeatedPassword: text,
                                                });
                                            }}/>
                            </View>

                            <View style={{marginTop: 15}}>
                                <Button title={'Reset Password'} onPress={this.resetPassword}
                                        color={ColorService.PRIMARY_COLOR}/>
                            </View>

                        </CardComponent>

                    </View>
                    <View style={{alignItems: 'center', marginTop: 10}}>
                        <Text>MyLeo</Text>
                        <Text style={{color: '#777777'}}>Powered by PulseQue.</Text>
                    </View>
                </View>
            </Layout>
        );
    }
};

export default ForgotPasswordScreen;
