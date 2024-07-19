import axios from 'axios';
/**
 * @function
 */
const createClient = () => {
    const client = axios.create( {
        'baseURL': 'http://localhost:8000/',
        'headers': {
            'Content-Type': 'application/json',
        }
    } );

    client.interceptors.request.use(function (config) {
        let token = localStorage.getItem('access_token');
        if(token){
            config.headers['Authorization'] = 'Bearer ' + token;
            config.headers['Content-Type'] = 'application/json';
        }
        return config;
    });
    
    return client;
}

const instance = createClient();

export default instance;
