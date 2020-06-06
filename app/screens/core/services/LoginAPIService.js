import WebService from '../../../lib/webservice/WebService';

const LoginAPIService = {
    getAuthUserApi: (email) => {
        return WebService.call('/api/v1/auth/user?email=' + email, 'GET');
    },
};

export default LoginAPIService;
