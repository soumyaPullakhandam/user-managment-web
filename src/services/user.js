import http from 'interfaces/http';

const getUsersInfo = () => http.get('user-info/');

export {
    getUsersInfo
}
