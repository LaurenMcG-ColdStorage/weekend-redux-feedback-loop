import { createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';

const feeling = (state = 1, action) => {
    if(action.type === "CURRENT_FEELING"){
        return state = action.payload;
    }
    return state;
};

const understanding = (state = 1, action) => {
    if (action.type === "CURRENT_UNDERSTANDING"){
        return state = action.payload;
    }
    return state;
};

const support = (state = 1, action) => {
    if (action.type === "CURRENT_SUPPORT"){
        return state = action.payload;
    }
    return state;
};

const comments = (state = '', action) => {
    if (action.type === "COMMENT"){
        return [...state, action.payload];
    }
    return state;
};

const log = (state = [], action) => {
    if (action.type === "LOG"){
        const newLog = action.payload;
        return [...state, newLog]
    }
    return state;
};

export const store = createStore(
    combineReducers({
        feeling,
        understanding,
        support,
        comments,
        log
    }),
    applyMiddleware(logger),
);