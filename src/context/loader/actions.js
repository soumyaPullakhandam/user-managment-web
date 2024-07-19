import {SET_LOADING} from './reducers';

/**
 * @function
 * @param {boolean} payload
 * returns loader state
 */
export const setLoading = (payload) => {
    return {
        type: SET_LOADING,
        payload
    };
};

/**
 * @function
 * @param dispatch
 * @param {boolean} load
 * action to open & close loader
 */
export const setLoader = (dispatch, load) => {
    dispatch(setLoading(load));
};
