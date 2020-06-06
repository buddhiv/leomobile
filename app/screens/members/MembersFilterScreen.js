import React from 'react';
import {
    View,
    Text, StyleSheet, Linking, TextInput, Button,
} from 'react-native';
import Layout from '../../common/Layout';
import CardComponent from '../../common/components/CardComponent';
import TextWidget from '../../common/widgets/TextWidget';
import PickerWidget from '../../common/widgets/PickerWidget';

class MembersFilterScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
        };
    }

    componentDidMount(): void {

    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Layout loading={this.state.loading} scrollEnabled={true}>
                <View style={{padding: 15, flex: 1, justifyContent: 'space-between'}}>
                    <CardComponent>
                        <View>
                            <View>
                                <TextWidget label={'Member Name'}/>
                            </View>

                            <View style={{marginTop: 20}}>
                                <TextWidget label={'Member LCI'}/>
                            </View>

                            <View style={{marginTop: 20}}>
                                <PickerWidget label={'Club'}/>
                            </View>
                        </View>
                    </CardComponent>

                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 1, marginRight: 5}}>
                            <Button title={'RESET'}/>
                        </View>
                        <View style={{flex: 1, marginLeft: 5}}>
                            <Button title={'FILTER'}/>
                        </View>
                    </View>
                </View>
            </Layout>
        );
    }
};

export default MembersFilterScreen;
