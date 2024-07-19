import {SIGN_IN, RESET_LOADING, SET_ERROR} from './reducers';
import {signIn} from 'services/signIn';
import {setLoader} from 'context/loader/actions';

/**
 * @function
 * @param dispatch
 * @param {string} email
 * @param {string} password
 * loader reducer
 */
export const performSignIn = (dispatch, email, password) => {
    setLoader(dispatch, true);
    signIn({email, password}).then((response) => {
        dispatch(setToken({
            loading: true,
            access_token: response.data,
        }))
        setLoader(dispatch, false);
    }).catch((e) => {
        dispatch(setError({
            loading: true,
            message: e?.response?.data?.detail ? e.response.data.detail : e.message
        }));
        console.error(e.message);
        setLoader(dispatch, false);
    })
};

/**
 * @function
 * @param dispatch
 */
export const resetSignIn = (dispatch) => {
    dispatch(resetLoading());
}

/**
 * @function
 * Error
 * @param payload
 */
export const setError = (payload) => {
    return {
        type: SET_ERROR,
        payload
    };
};

/**
 * @function
 * To set Token
 * @param payload
 */
export const setToken = (payload) => ({
    type: SIGN_IN,
    payload,
});

/**
 * @function
 * resets loader and data
 */
export const resetLoading = () => {
    return {
        type: RESET_LOADING,
    };
};
