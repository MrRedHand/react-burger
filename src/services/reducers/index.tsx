import { combineReducers } from 'redux';
import {mainReducer} from "./main";
import {userReducer} from "./user-behavior";
import {wsReducer} from "./ws-reducer";

export const rootReducer = combineReducers({
    main: mainReducer,
    user: userReducer,
    websocket : wsReducer
})
