import {CREATE_USER, RESET_LOADING, SET_ERROR, SIGN_UP} from './reducers';
import {createUser, signUp} from 'services/signUp';
import {setLoader} from "../loader/actions";


/**
 * @function
 * @param {function} dispatch
 * @param {string} fullname
 * @param {string} email
 * Action for Sign Up
 */
export const performSignUp = (dispatch, fullname, email) => {
    setLoader( dispatch, true );
    signUp( {fullname, email} ).then( (response) => {
        dispatch( setToken( {
            loading: true,
            data: response.data,
        } ) )
        setLoader( dispatch, false );
    } ).catch( (e) => {
        dispatch( setError( {
            loading: true,
            message: e?.response?.data?.detail ? e.response.data.detail : e.message
        } ) );
        setLoader( dispatch, false );
    } )
};

/**
 * @function
 * @param{function}  dispatch
 * @param {string} password
 * @param {string} email_token
 * loader reducer
 */
export const createUserPassword = (dispatch, password, email_token) => {
    setLoader( dispatch, true );
    createUser( {password, email_token} ).then( (response) => {
        dispatch( setPassword( {
            loading: true,
            data: response.data,
        } ) )
        setLoader( dispatch, false );
    } ).catch( (e) => {
        dispatch( setError( {
            loading: true,
            message: e?.response?.data?.detail ? e.response.data.detail : e.message
        } ) );
        setLoader( dispatch, false );
    } )
}

/**
 * @function
 * @param {function} dispatch
 * Resets Signup data
 */
export const resetSignUp = (dispatch) => {
    dispatch( resetLoading() );
}

/**
 * @function
 * @param {payload} payload
 * Sets Error
 */
export const setError = (payload) => {
    return {
        type: SET_ERROR,
        payload
    };
};

/**
 * @function
 * @param {payload} payload
 */
export const setToken = (payload) => ({
    type: SIGN_UP,
    payload,
});

/**
 * @function
 * @param {payload} payload
 */
export const setPassword = (payload) => ({
    type: CREATE_USER,
    payload,
});

export const resetLoading = () => {
    return {
        type: RESET_LOADING,
    };
};
