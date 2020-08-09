import React from 'react';
import {
    View,
    FlatList,
    Text,
} from 'react-native';
import Layout from '../../common/Layout';
import CardComponent from '../../common/components/CardComponent';
import HTML from 'react-native-render-html';


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

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

        let tagsStyles = {
            p: {
                // fontSize: 20
            }
        }
        let classStyles = { 'ttt': { textAlign: 'right', color: 'teal', fontWeight: '800' } }
        return (
            <Layout loading={false} scrollEnabled={true}>
                <View style={{paddingHorizontal: 15, paddingVertical: 10}}>

                    <View style={{marginTop: 10}}>
                        <View>
                            <CardComponent>
                                <HTML tagsStyles={tagsStyles} classStyles={classStyles}
                                      html={this.state.languageSwitchAvailable ? this.state.selectedLanguage == 'en' ? this.document.en.content : this.document.si.content : this.document.content}/>
                            </CardComponent>
                        </View>
                    </View>
                </View>
            </Layout>
        );
    }
};

export default SingleDocumentsScreen;
