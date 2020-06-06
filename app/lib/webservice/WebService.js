import UrlHelper from '../helpers/URLHelper';
import axios from 'axios';

const apiLocation = 'https://64bef4cdcdb0.ngrok.io';

let getAxiosFunction = (api, method, params) => {
    let url = apiLocation + api;

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

const WebService = {
    call: function (request, method, params) {
        method = method.toLowerCase();

        let contentType;
        let data = params;
        if (
            method === 'post' ||
            method === 'delete' ||
            method === 'patch' ||
            method === 'put'
        ) {
            contentType = 'application/json';
            data = JSON.stringify(data);
        } else {
            contentType = 'application/x-www-form-urlencoded';

            /* $httpParamSerializerJQLike is used in the core product. Logic is extracted here */
            if (typeof data === 'object' && Object.keys(data).length !== 0) {
                request += '?' + UrlHelper.jQueryLikeParamSerializer(data);
            }
        }

        let requestData = {
            method: method,
            headers: {
                'Content-Type': contentType,
            },
        };

        /* Body not allowed in GET or HEAD requests  */
        if (
            method === 'post' ||
            method === 'delete' ||
            method === 'patch' ||
            method === 'put'
        ) {
            requestData.body = data;
        }

        return getAxiosFunction(request, method, requestData).then((response) => {
            return {
                data: response.data,
                status: response.status,
            };
        }).catch((error) => {
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
