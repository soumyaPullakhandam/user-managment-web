import {USER_INFO, RESET_LOADING, SET_ERROR} from './reducers';
import {getUsersInfo} from 'services/user';
import {setLoader} from 'context/loader/actions';

/**
 * @function
 * @param dispatch
 * loader reducer
 */
export const getUserDetails = (dispatch) => {
    setLoader(dispatch, true);
    getUsersInfo().then((response) => {
        dispatch(setDetails({
            loading: true,
            data: response.data,
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
 * sets user details
 * @param payload
 */
export const setDetails = (payload) => ({
    type: USER_INFO,
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
