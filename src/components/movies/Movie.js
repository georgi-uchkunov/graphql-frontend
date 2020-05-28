import React from 'react';
import {useDispatch} from 'react-redux';
import {deleteMovie} from '../../redux/actions';
import {addMovieToUser} from '../../redux/actions';

const Movie = props => {

    const dispatch = useDispatch();

    const dispatchDeleteMovie = () => {
        dispatch(deleteMovie({
            _id: props.movie._id
        }, '_id name description imageUrl price'));
    }

    const dispatchAddMovieToUser = () => {
        const movieToAdd = Object.assign({}, props.movie);
        delete movieToAdd.__typename;

        dispatch(addMovieToUser({
            _id: '5e91be2a9ba571056c85b42d',
            movies: [movieToAdd],
        }, '_id name description imageUrl price'));
    }

    return <div className="col-md-4 mb-3">
        <div className="card">
        <img src={props.movie.imageUrl} className="card-img-top" alt={props.movie.name}/>
        <div className="card-body text-white">
            <h5 className="card-title">{props.movie.name}</h5>
            <p className="card-text">{props.movie.description}</p>
            <button type="button" className="btn btn-success" onClick={dispatchAddMovieToUser}>Add movie to user list</button>
            <button type="button" className="btn btn-danger mb-1 mt-2" onClick={dispatchDeleteMovie}>Delete</button>
        </div>
    </div>
</div>
}

export default Movie;