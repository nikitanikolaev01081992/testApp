import { CURRENT_ID, SCREEN_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from "../actions/actions";

export const idReducer = (state = "", action) => {
    switch (action.type) {
        case CURRENT_ID:
            return action.id;
        default:
            return state;
    }
};

export const screenReducer = (state = { screen: "", navObj: null }, action) => {
    switch (action.type) {
        case SCREEN_DATA:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
};

export const dataReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_DATA_SUCCESS:
        case FETCH_DATA_ERROR:
            return action.payload;
        default:
            return state;
    }
};
