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

const comments = (state = [], action) => {
    if (action.type === "COMMENT"){
        return [...state, action.payload];
    }
    return state;
};

const storeInstance = createStore(
    combineReducers({
        feeling,
        understanding,
        support,
        comments
    }),
    applyMiddleware(logger)
)