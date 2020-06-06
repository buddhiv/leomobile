import WebService from '../../../lib/webservice/WebService';

const ClubsAPIService = {
    getClubsListApi: () => {
        return WebService.call('/api/v1/leoClubs', 'GET');
    },
    getClubDetailsApi: (clubId) => {
        return WebService.call('/api/v1/leoClubs/' + clubId + '?includedirectory=true', 'GET');
    },
};

export default ClubsAPIService;
