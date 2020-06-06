import WebService from '../../../lib/webservice/WebService';

const DistrictsAPIService = {
    getDistrictsListApi: () => {
        return WebService.call('/api/v1/leoDistrict', 'GET');
    },
    getDistrictDetailsApi: (districtId) => {
        return WebService.call('/api/v1/leoDistrict/' + districtId, 'GET');
    },
};

export default DistrictsAPIService;
