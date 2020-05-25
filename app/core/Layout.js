import React from 'react';
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

class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            is_connected: GlobalService.get('connected_to_internet'),
        };
    }

    componentDidMount(): void {
        InitService.getGlobalEventEmitter().addListener('connection_change', (payload) => {
            if (payload.connection_changed !== this.state.is_connected) {
                this.setState({is_connected: payload.connection_changed});
            }
        });
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <>
                <SafeAreaView style={{flex: 1}}>
                    {!this.state.is_connected ? <View style={{backgroundColor: 'red', paddingHorizontal: 15}}>
                        <Text style={{color: 'white'}}>No Network Connection</Text>
                    </View> : null}

                    <ScrollView contentContainerStyle={{flex: 1}}
                                contentInsetAdjustmentBehavior="automatic" bounces={false}>

                        <View style={{flex: 1}}>

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
                        </View>

                    </ScrollView>
                </SafeAreaView>
            </>
        );
    }
};

const styles = StyleSheet.create({});

export default Layout;
