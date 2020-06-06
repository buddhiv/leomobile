import WebService from '../../../lib/webservice/WebService';

const MembersAPIService = {
    getMembersListApi: (filters) => {
        return WebService.call('/api/v1/leoMember', 'GET', filters);
    },
    getMemberDetailsApi: (memberId) => {
        return WebService.call('/api/v1/leoMember/' + memberId, 'GET');
    },
};

export default MembersAPIService;
