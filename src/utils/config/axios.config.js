import axios from 'axios';

//Default configuration for AXIOS

export default axios.create(
    {
        baseURL: 'https://randomuser.me/api',
        responseType: 'json',
        timeout: 6000        
    }
)