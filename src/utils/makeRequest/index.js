import axios from 'axios';
import { BACKEND_URL } from '../../constants/apiEndPoints';

const makeRequest = async (endPoint, dynamicConfig = {}) => {
    const requestDetails = {
        baseURL: `${BACKEND_URL}${endPoint.url}`,
        method: endPoint.method,
        ...dynamicConfig,
    };
    const { data } = await axios(requestDetails);
    return data;
}

export default makeRequest;