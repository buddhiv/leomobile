import WebService from '../../../lib/webservice/WebService';

const MembersAPIService = {
    getMembersListApi: () => {
        return WebService.call('/api/v1/leoMember', 'GET');
    },
    getMemberDetailsApi: (memberId) => {
        return WebService.call('/api/v1/leoMember/' + memberId, 'GET');
    },
};

export default MembersAPIService;
