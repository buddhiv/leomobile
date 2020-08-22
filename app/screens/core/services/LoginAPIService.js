import WebService from '../../../lib/webservice/WebService';

const LoginAPIService = {
    getAuthUserApi: (email) => {
        return WebService.call('/api/v1/auth/user?email=' + email, 'GET');
    },
    getLoginAPI: (loginCredentials) => {
        return WebService.call('/api/v1/auth/login', 'POST', loginCredentials);
    },
    getGenerateResetPasswordTokenAPI: (data) => {
        return WebService.call('/api/v1/auth/generateResetPasswordToken', 'POST', data);
    },
    forgetPasswordResetAPI: (data) => {
        return WebService.call('/api/v1/auth/forgetPasswordReset', 'POST', data);
    },
};

export default LoginAPIService;
