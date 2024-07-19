export const USER_INFO = 'userInfo.USER_INFO';
export const SET_ERROR = 'userInfo.SET_ERROR';
export const RESET_LOADING = 'userInfo.RESET_LOADING';

export const userInfoInitial = {
    data: {},
    message:'',
    type: ''
};

/**
 * @function
 * Login Reducer
 * @param state
 * @param action
 */
export const userReducer = (state, action) => {
    const {payload} = action;
    switch (action.type) {
        case RESET_LOADING:
            return userInfoInitial;
        case USER_INFO:
            const data = payload;
            return {
                ...state,
                ...{
                    data : data,
                    message: '',
                    type: 'success'
                },
            };
        case SET_ERROR:
            localStorage.removeItem('access_token');
            return {
                ...state,
                ...{
                    message: payload.message,
                    type: 'error'
                }
            }
        default:
            return state;
    }
};

export default userReducer;
