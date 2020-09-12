import WebService from '../../../lib/webservice/WebService';

const ClubsAPIService = {
    getClubsListApi: (filters) => {
        return WebService.call('/api/v1/leoClubs', 'GET', filters);
    },
    getClubDetailsApi: (clubId) => {
        return WebService.call('/api/v1/leoClubs/' + clubId + '?includedirectory=true', 'GET');
    },
    getSaveClubDetailsApi: (clubData) => {
        return WebService.call('/api/v1/leoClubs/' + clubData.id, 'PATCH', clubData);
    },
};

export default ClubsAPIService;
