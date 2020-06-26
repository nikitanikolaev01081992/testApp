import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { idReducer, screenReducer, dataReducer } from "../reducers/reducers";

const store = createStore(
    combineReducers({
        idState: idReducer,
        screenState: screenReducer,
        dataState: dataReducer,
    }),
    applyMiddleware(thunk)
);

export default store;
