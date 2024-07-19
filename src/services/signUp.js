import http from 'interfaces/http';
/**
 * @function
 */
const signUp = ({
                    fullname,
                    email
                }) => {
    const body = {
        fullname,
        email,
    };
    return http.post( 'sign-up/', body );
}

/**
 * @function
 */
const createUser = ({
                        password,
                        email_token
                    }) => {
    const body = {
        password,
        email_token,
    };
    return http.post( 'verify/', body );
}


export {
    signUp,
    createUser
}
