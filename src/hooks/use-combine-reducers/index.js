import {useReducer} from 'react';
import loginReducer, {loginInitial} from "context/sign-in/reducers";
import signUpReducer, {signUpInitial} from "context/sign-up/reducers";
import loaderReducer, {loadingInitial} from "context/loader/reducers";
import userReducer, {userInfoInitial} from "context/user-info/reducers";

/**
 * @function
 */
const useCombinedReducers = () => {
    const init = initialState => initialState;
    const [signInStore, signIn] = useReducer( loginReducer, loginInitial, init );
    const [signUpStore, signUp] = useReducer( signUpReducer, signUpInitial, init );
    const [loaderStore, load] = useReducer( loaderReducer, loadingInitial, init );
    const [userStore, userInfo] = useReducer( userReducer, userInfoInitial, init );

    return {
        store: {
            signIn: signInStore,
            signUp: signUpStore,
            load: loaderStore,
            userInfo: userStore
        },
        reducers: [
            signIn,
            signUp,
            load,
            userInfo
        ],
    };
}

export default useCombinedReducers;
