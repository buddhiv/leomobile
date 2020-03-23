import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
    ScrollView,
    Text,
    View
} from 'react-native';
import InitService from '../lib/services/InitService';
import GlobalService from '../lib/services/GlobalService';

class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            is_connected: GlobalService.get('connected_to_internet')
        }
    }

    componentDidMount(): void {
        InitService.getGlobalEventEmitter().addListener('connection_change', (payload) => {
            if(payload.connection_changed !== this.state.is_connected){
                this.setState({is_connected: payload.connection_changed});
            }
        });
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <>
                <StatusBar barStyle="light-content"/>

                {!this.state.is_connected ? <View style={{backgroundColor: 'red', paddingHorizontal: 15}}>
                    <Text style={{color: 'white'}}>No Network Connection</Text>
                </View>: null}

                <SafeAreaView>
                    <ScrollView
                        contentInsetAdjustmentBehavior="automatic">

                        {this.props.children}

                    </ScrollView>
                </SafeAreaView>
            </>
        )
    }
};

const styles = StyleSheet.create({});

export default Layout;
