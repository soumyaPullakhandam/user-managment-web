export const SIGN_IN = 'signIn.SIGN_IN';
export const SET_ERROR = 'signIn.SET_ERROR';
export const RESET_LOADING = 'signIn.RESET_LOADING';

export const loginInitial = {
    loggedIn: false,
    message: '',
    type: ''
};

/**
 * @function
 * Login Reducer
 * @param state
 * @param action
 */
export const loginReducer = (state, action) => {
    const {payload} = action;
    switch (action.type) {
        case RESET_LOADING:
            return loginInitial;
        case SIGN_IN:
            const data = payload?.access_token;
            localStorage.setItem('access_token', data.access_token);
            return {
                ...state,
                ...{
                    loggedIn: true,
                    message: 'Successfully logged in',
                    type: 'success'
                },
            };
        case SET_ERROR:
            localStorage.removeItem('access_token');
            return {
                ...state,
                ...{
                    loggedIn: false,
                    message: payload.message,
                    type: 'error'
                }
            }
        default:
            return state;
    }
};

export default loginReducer;
