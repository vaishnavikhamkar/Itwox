import {combineReducers} from "redux";
import logReducers from "./logReducers";

const reducers=combineReducers({
    status:logReducers
})

export default reducers;