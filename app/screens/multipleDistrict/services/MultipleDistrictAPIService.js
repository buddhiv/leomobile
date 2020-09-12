import WebService from '../../../lib/webservice/WebService';

const MultipleDistrictAPIService = {
    getMultipleDistrictDetailsApi: (multipleDistrictId) => {
        return WebService.call('/api/v1/leoMultiple/' + multipleDistrictId + '?includedirectory=true', 'GET');
    },
    getSaveMultipleDistrictDetailsAPI: (districtData) => {
        return WebService.call('/api/v1/leoMultiple/' + districtData.id, 'PATCH', districtData);
    },
};

export default MultipleDistrictAPIService;
