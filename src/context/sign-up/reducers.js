export const SIGN_UP = 'signUp.SIGN_UP';
export const CREATE_USER = 'signUp.CREATE_USER';
export const SET_ERROR = 'signUp.SET_ERROR';
export const RESET_LOADING = 'signUp.RESET_LOADING';

export const signUpInitial = {
    registered: false,
    message: '',
    type: '',
    created: false
};

/**
 * @function
 * @param state
 * @param action
 */
export const signUpReducer = (state, action) => {
    const {payload} = action;
    switch (action.type) {
        case RESET_LOADING:
            return signUpInitial;
        case SIGN_UP:
            return {
                ...state,
                ...{
                    registered: true,
                    message: 'Please check you email to verify',
                    type: 'success',
                    created: false
                },
            };
        case CREATE_USER:
            localStorage.setItem('access_token', payload?.data?.access_token);
            return {
                ...state,
                ...{
                    registered: true,
                    message: 'User created successfully',
                    type: 'success',
                    created: true
                },
            };
        case SET_ERROR:
            return {
                ...state,
                ...{
                    registered: false,
                    message: payload.message,
                    type: 'error',
                    created: false
                }
            }
        default:
            return state;
    }
};

export default signUpReducer;
