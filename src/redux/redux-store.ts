import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import navigationReducer from "./navigation-reducer"
import usersReducer from "./users-reducer"
import authReducer from "./auth-reducer"
import thunkMiddlware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import appReducer from "./app-reducer"


let rootReducer = combineReducers({
    profilePage: profileReducer, 
    dialogsPage: dialogsReducer, 
    navigationData: navigationReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});

type RootReducerType = typeof rootReducer; // ()
export type AppStateType = ReturnType<RootReducerType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddlware)))

// @ts-ignore
window.__store__ = store


export default store