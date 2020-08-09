import React from 'react';
import {
    View,
    FlatList,
    Text
} from 'react-native';
import Layout from '../../common/Layout';
import CardComponent from '../../common/components/CardComponent';
import TouchableComponent from '../../common/components/TouchableComponent';
import LeoPledge from '../../assets/documents/LeoPledge';
import BoardMeetingAgenda from '../../assets/documents/BoardMeetingAgenda';
import EnvironmentalPledge from '../../assets/documents/EnvironmentalPledge';
import GeneralMeetingAgenda from '../../assets/documents/GeneralMeetingAgenda';
import InitiationCeremonyOfNewMembers from '../../assets/documents/InitiationCeremonyOfNewMembers';
import InstallationCeremonyOfLeoClubOfficers from '../../assets/documents/InstallationCeremonyOfLeoClubOfficers';
import LeoClubProtocol from '../../assets/documents/LeoClubProtocol';
import LeoHistory from '../../assets/documents/LeoHistory';
import NationalAnthem from '../../assets/documents/NationalAnthem';
import PledgeOfAllegiance from '../../assets/documents/PledgeOfAllegiance';
import StandardLeoClubConstitution from '../../assets/documents/StandardLeoClubConstitution';


class DocumentsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            documents: [
                LeoPledge,
                PledgeOfAllegiance,
                EnvironmentalPledge,
                BoardMeetingAgenda,
                GeneralMeetingAgenda,
                InitiationCeremonyOfNewMembers,
                InstallationCeremonyOfLeoClubOfficers,
                LeoClubProtocol,
                LeoHistory,
                StandardLeoClubConstitution.en,
            ]
        }
    }

    goToDocument = (type) => {
        this.props.navigation.navigate('Document', {
            document: type,
        });
    };

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Layout loading={false} scrollEnabled={true}>
                <View style={{paddingHorizontal: 15, paddingVertical: 10}}>

                    {this.state.documents.map((doc, idx) => (
                        <View style={{marginTop: 10}}>
                            <TouchableComponent onPress={()=>{
                                this.goToDocument(doc)
                            }}>
                                <View>
                                    <CardComponent>
                                        <Text style={{fontSize: 18}}>{doc.en? doc.en.title: doc.si? doc.si.title:doc.title}</Text>
                                    </CardComponent>
                                </View>
                            </TouchableComponent>
                        </View>
                    ))}
                </View>
            </Layout>
        );
    }
};

export default DocumentsScreen;
