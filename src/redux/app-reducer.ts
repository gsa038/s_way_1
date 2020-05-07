import { getAuthUserData } from "./auth-reducer";
import { ThunkAction } from "redux-thunk";

const SET_INITIALIZED = 's_way_1/app/SET_INITIALIZED';

type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false
};

const appReducer = ( state = initialState, action): InitialStateType => {

    switch(action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
                };
        default:
            return state;
        };
};

type InitializedSuccessType = {
    type: typeof SET_INITIALIZED
}

export const setInitializedSuccess = (): InitializedSuccessType => ({type: SET_INITIALIZED});
 
export const initializeApp = (): ThunkAction<Promise<void> | void, InitialStateType, unknown, InitializedSuccessType> => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => { 
        dispatch(setInitializedSuccess());
    });
}

export default appReducer;