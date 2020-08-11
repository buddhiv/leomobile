import React from 'react';
import {
    View,
    FlatList,
    Text
} from 'react-native';
import Layout from '../../common/Layout';
import CardComponent from '../../common/components/CardComponent';
import Markdown from 'react-native-markdown-display';
import { Switch } from 'react-native-switch';



class SingleDocumentsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.document = props.route.params.document;
        this.state = {
            languageSwitchAvailable: !!(this.document.en && this.document.si),
            selectedLanguage: 'en',
        };
    }

    componentDidMount(): void {
    }

    onToggleLanguage = () => {
        if(this.state.selectedLanguage == 'en'){
            this.setState({selectedLanguage: 'si'})
        }else {
            this.setState({selectedLanguage: 'en'})
        }
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

        return (
            <Layout loading={false} scrollEnabled={true}>
                <View style={{paddingHorizontal: 15, paddingVertical: 10}}>

                    <View style={{marginTop: 10}}>
                        <View>
                            <CardComponent>
                                {this.state.languageSwitchAvailable?
                                    <View style={{paddingVertical: 10}}>
                                        <View style={{flexDirection: 'row-reverse'}}>
                                            <View>
                                                <Switch
                                                    value={this.state.selectedLanguage !== 'en'}
                                                    onValueChange={this.onToggleLanguage}
                                                    disabled={false}
                                                    activeText={'සිං'}
                                                    inActiveText={'En'}
                                                    circleSize={30}
                                                    changeValueImmediately={true}
                                                    switchLeftPx={5}
                                                    switchRightPx={5}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    : null}

                                <Markdown>
                                    {this.state.languageSwitchAvailable ? this.state.selectedLanguage == 'en' ? this.document.en.content : this.document.si.content : this.document.content}
                                </Markdown>
                            </CardComponent>
                        </View>
                    </View>
                </View>
            </Layout>
        );
    }
};

export default SingleDocumentsScreen;
