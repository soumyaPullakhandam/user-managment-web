/**
 * @function
 * return flag true or false based on token presence
 */
export const isAuthenticated = () => {
    return !!localStorage.getItem('access_token');
}
/**
 * @function
 * returns token from local storage
 */
export const getToken = () => {
    return localStorage.getItem('access_token');
}
