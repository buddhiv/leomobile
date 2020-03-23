import WebService from '../../../lib/webservice/WebService';

const ClubsAPIService = {
    getClubsListApi: () => {
        return WebService.call('/api/leoDistrict/2/clubs', 'GET');
    },
};

export default ClubsAPIService;
