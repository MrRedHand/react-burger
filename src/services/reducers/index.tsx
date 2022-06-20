import { combineReducers } from 'redux';
import {mainReducer} from "./main";
import {userReducer} from "./user-behavior";

export const rootReducer = combineReducers({
    main: mainReducer,
    user: userReducer
})
