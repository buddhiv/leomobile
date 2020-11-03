import UrlHelper from '../helpers/URLHelper';
import axios from 'axios';

const apiLocation = 'http://173.82.105.136:3000';

let getAxiosFunction = (api, method, params) => {
    let url = apiLocation + api;

    switch (method) {
        case 'get':
            return axios.get(url);
        case 'post':
            return axios.post(url, params, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        case 'put':
            break;
        case 'patch':
            return axios.patch(url, params);
        case 'delete':
            break;
        default:
            break;
    }
};

const WebService = {
    call: function (request, method, params) {
        method = method.toLowerCase();

        let data = params;
        if (method === 'get') {
            /* $httpParamSerializerJQLike is used in the core product. Logic is extracted here */
            if (typeof data === 'object' && Object.keys(data).length !== 0) {
                request += '?' + UrlHelper.jQueryLikeParamSerializer(data);
            }
        }

        return getAxiosFunction(request, method, params).then((response) => {
            return {
                data: response.data,
                status: response.status,
            };
        }).catch((error) => {
            console.log(error);

            if (error.response) {
                return {
                    status: error.response.status,
                    message: error.message,
                };
            } else {
                return {
                    status: undefined,
                    message: 'Request Failed',
                };
            }
        });
    },
};

export default WebService;
