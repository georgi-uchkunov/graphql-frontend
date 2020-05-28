import {combineReducers} from "redux";
import types from "./action-types";

function movies(state = [], action) {
    switch (action.type) {
        case types.SET_MOVIES: {
            return [...action.payload];
        }
        case types.ADD_MOVIE: {
            const currentMovies = state.slice();
            currentMovies.push(action.payload);
            return [...currentMovies];
        }
        case types.DELETE_MOVIE: {
            return state.filter(item => item._id !== action.payload)
        }
        default:
            return state;
    }
}

function error(state = {}, action) {
    switch (action.type) {
        case types.SET_ERROR: {
            return {...action.payload};
        }
        default:
            return state;
    }
}

function userLoaded(state = false, action) {
    switch (action.type) {
        case types.SET_USER_LOADED: {
            return action.payload;
        }
        default:
            return state;
    }
}
function currentUser(state = {}, action) {
    switch (action.type) {
        case types.SET_USER: {
            return {...action.payload};
        }
        default:
            return state;
    }
}

function token(state = localStorage.getItem('token') ? localStorage.getItem('token') : '', action) {
    switch (action.type) {
        case types.SAVE_TOKEN: {
            localStorage.setItem('token', action.payload);
            return action.payload
        }
        default:
            return state;
    }
}


function graphQLErrors(state = [], action) {
    switch (action.type) {
        case types.ADD_GRAPHQL_ERROR: {
            return [...state, action.payload]
        }
        default:
            return state;
    }
}


export default combineReducers({
    movies,
    error, 
    token,
    graphQLErrors,
    currentUser,
    userLoaded,
});