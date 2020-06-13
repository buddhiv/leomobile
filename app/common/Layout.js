import React from 'react';
import PropTypes from 'prop-types';
import {
    SafeAreaView,
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

const LayoutContainerComponent: () => React$Node = (props) => {
    if (props.scrollEnabled) {
        return (
            <ScrollView bounces={false} contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps={'handled'}>
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
            is_connected: GlobalService.get('connected_to_internet'),
        };
    }

    componentDidMount(): void {
        // InitService.getGlobalEventEmitter().on('connection_change', (payload) => {
        //     if (payload.connection_changed !== this.state.is_connected) {
        //         this.setState({is_connected: payload.connection_changed});
        //     }
        // });
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <>
                <SafeAreaView style={{flex: 1}}>
                    {this.props.messages ? <View>
                        {
                            this.props.messages.map((message, i) => {
                                return <MessageComponent text={message} key={i}/>;
                            })
                        }
                    </View> : null}


                    <LayoutContainerComponent scrollEnabled={this.props.scrollEnabled}>
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
