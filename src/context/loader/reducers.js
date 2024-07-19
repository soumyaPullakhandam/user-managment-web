export const SET_LOADING = 'loading.SET_LOADING';

/**
 * @function
 * returns loader state
 */
export const loadingInitial = {
    loading: false,
};

/**
 * @function
 * loader reducer
 * @param state
 * @param action
 */
export const loaderReducer = (state, action) => {
    const {payload} = action;
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                ...{
                    loading: payload,
                },
            };
        default:
            return state;
    }
};

export default loaderReducer;
