import { createStore, combineReducers } from 'redux';

const counterReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state
    }
};

const mousePositionReducer = (state = {position: {x: 0, y: 0}}, action) => {
    switch (action.type) {
        case 'UPDATE':
            return {...state, position: action.value};
        default:
            return state;
    }
}

const rootReducer = combineReducers({counterReducer, mousePositionReducer})

const store = createStore(rootReducer)

export default store;