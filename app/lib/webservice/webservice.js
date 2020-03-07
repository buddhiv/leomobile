import axios from 'axios';

let getAxiosFunction = (webserviceName, method, params) => {
    let url = 'https://demo1583219.mockable.io/' + webserviceName;

    switch (method) {
        case 'get':
            return axios.get(url);
        case 'post':
            break;
        case 'put':
            break;
        case 'patch':
            break;
        case 'delete':
            break;
        default:
            break;
    }
};

export const webservice = {
    call: (webserviceName, method, params) => {
        return getAxiosFunction(webserviceName, method, params);
    }
};