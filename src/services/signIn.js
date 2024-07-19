import http from 'interfaces/http';
/**
 * @function
 */
const createUser = ({
                        name: full_name,
                        email,
                        password
                    }) => {
    const body = {
        full_name,
        email,
        password,
    };
    return http.post('/Register', body);
};

/**
 * @function
 */
const signIn = ({
                email,
                 password
               }) => {
    const body = {
        email,
        password,
    };
    return http.post('sign-in/', body);
}

export {
    createUser,
    signIn
}
