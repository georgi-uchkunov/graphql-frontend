import types from './action-types';
import graphQLService from '../network/graphql-service';


export function setError (error) {
    return { type: types.SET_ERROR, payload: error };
}

export const getMovies = (responseFields = "_id") => async dispatch => {
    try {
        const response = await graphQLService.getMovies(responseFields);
        dispatch(setMovies(response.data.movies));
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}))
    }
};

export function setMovies (movies) {
    return {type: types.SET_MOVIES, payload: movies}
}

export function addMovieToStore (movie) {
    return {type: types.ADD_MOVIE, payload: movie}
}

export const addMovie = (variables, responseFields = "_id") => async dispatch => {
    try {
        const response = await graphQLService.addMovie(variables, responseFields);
        dispatch(addMovieToStore(response.data.addMovie));
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}))
    }
};

export const addUser = variables => async dispatch => {
    try {
        const response = await graphQLService.addUser(variables);
        dispatch(getCurrentUser());
        dispatch(saveToken(response.data.addUser));
    } catch(e){
        e.graphQLErrors.forEach(error => {
            console.log(error)
        })
        dispatch(setGraphQLError({request: "addUser", errors: []}))
    }
}


export const editUser = (variables, responseFields = "_id firstName lastName email userType movies {name}") => async dispatch => {
    try {
        const response = await graphQLService.editUser(variables, responseFields);
        dispatch(getCurrentUser());
    } catch(e){
        console.log(e);
        dispatch(setGraphQLError({request: "editUser", errors: []}))
    }
}

export const login = variables => async dispatch => {
    try {
        const response = await graphQLService.login(variables);
        dispatch(getCurrentUser());
        dispatch(saveToken(response.data.login));
    } catch(e){
        console.log(e);
        dispatch(setGraphQLError({request: "login", errors: []}))
    }
}
export function saveToken(token){
    return {type: types.SAVE_TOKEN, payload: token}
}

export function setUserLoaded(){
    return {type: types.SET_USER_LOADED, payload: true}
}

export function setGraphQLError (error) {
    return { type: types.ADD_GRAPHQL_ERROR, payload: error };
}

export const getCurrentUser = () => async dispatch => {
    try {
        const response = await graphQLService.currentUser();
        dispatch(saveCurrentUser(response.data.currentUser));
        dispatch(setUserLoaded())
    } catch(e){
        dispatch(saveToken(''));
        dispatch(setUserLoaded())
    }
}

export function saveCurrentUser(user){
    return {type: types.SET_USER, payload: user}
}

export const deleteMovie = (variables, responseFields = "_id") => async dispatch => {
    try {
        const response = await graphQLService.deleteMovie(variables, responseFields);
        dispatch(deleteMovieFromStore(response.data.deleteMovie._id));
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}))
    }
};

export function deleteMovieFromStore (movie) {
    return {type: types.DELETE_MOVIE, payload: movie}
}

export const addMovieToUser = (variables, responseFields = "_id") => async dispatch => {
    try {
        const response = await graphQLService.editUser(variables, responseFields);
        dispatch(saveCurrentUser(response.data.editUser));
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}))
    }
};

