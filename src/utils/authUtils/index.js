import axios from 'axios';
import { AUTH_URL } from '../../constants/apiEndPoints';

const authRequest = async (endPoint, dynamicConfig = {}) => {
    const requestDetails = {
        baseURL: `${AUTH_URL}${endPoint.url}`,
        method: endPoint.method,
        ...dynamicConfig,
    };
    const { data } = await axios(requestDetails);
    return data;
};

export default authRequest;