import React from 'react';
import PropTypes from 'prop-types';
import {
    SafeAreaView,
    KeyboardAvoidingView,
    StyleSheet,
    StatusBar,
    ScrollView,
    Text,
    View,
    ActivityIndicator,
    TouchableWithoutFeedback,
    Modal,
} from 'react-native';
import InitService from '../lib/services/InitService';
import GlobalService from '../lib/services/GlobalService';
import MessageComponent from './components/MessageComponent';
import NetInfo from '@react-native-community/netinfo';
import Toast from 'react-native-toast-message';
import ToastService from './services/ToastService';

const LayoutContainerComponent: () => React$Node = (props) => {
    if (props.scrollEnabled) {
        return (
            <ScrollView bounces={false} contentContainerStyle={{flexGrow: 1}}
                        keyboardShouldPersistTaps={'handled'} {...props}>
                <View style={{flex: 1}}>
                    {props.children}
                </View>
            </ScrollView>
        );
    } else {
        return (
            <View style={{flex: 1}}>
                {props.children}
            </View>
        );
    }
};

class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
        };
    }

    componentDidMount(): void {
        // this.netInfoListener = NetInfo.addEventListener(state => {
        //     GlobalService.set('connected_to_internet', state.isConnected);
        //
        //     let messages = this.state.messages;
        //     if (!state.isConnected) {
        //         messages.push('Not Connected to Internet');
        //     }
        //     this.setState({
        //         messages: messages,
        //     });
        // });
    }

    componentWillUnmount(): void {
        // this.netInfoListener();
    }

    // getMessagesArray = () => {
    //     if (this.props.messages) {
    //         return this.state.messages.concat(this.props.messages);
    //     } else {
    //         return this.state.messages;
    //     }
    // };

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <>
                <SafeAreaView style={{flex: 1}}>
                    <KeyboardAvoidingView style={{flex: 1}}
                                          behavior={'padding'}>

                        {/*<View>*/}
                        {/*    {*/}
                        {/*        this.getMessagesArray().map((message, i) => {*/}
                        {/*            return <MessageComponent text={message} key={i}/>;*/}
                        {/*        })*/}
                        {/*    }*/}
                        {/*</View>*/}

                        <LayoutContainerComponent scrollEnabled={this.props.scrollEnabled} {...this.props}>
                            {this.props.children}

                            {this.props.loading ?
                                <Modal visible={this.props.loading}
                                       transparent={true}
                                       animationType={'none'}>
                                    <View style={{
                                        backgroundColor: 'rgba(0,0,0, 0.3)',
                                        flex: 1,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                        <ActivityIndicator size={'large'} color={'white'}/>
                                    </View>
                                </Modal> : null}

                        </LayoutContainerComponent>

                        <Toast ref={(ref) => Toast.setRef(ref)}/>

                    </KeyboardAvoidingView>
                </SafeAreaView>
            </>
        );
    }
}

Layout.propTypes = {
    scrollEnabled: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

LayoutContainerComponent.propTypes = {
    scrollEnabled: PropTypes.bool.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

export default Layout;
