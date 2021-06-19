import { combineReducers } from "redux";
import firstReducer from "./first.reducer";
import secondReducer from "./second.reducer";

const indexReducer = combineReducers({
    'first': firstReducer,
    'second': secondReducer
});

export default indexReducer;