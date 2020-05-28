import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {addMovie} from '../redux/actions';

const AddMovie = () => {

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [price, setPrice] = useState(0);

    const dispatchAddMovie = () => {
        dispatch(addMovie({
            name,
            description,
            imageUrl,
            price
        }, '_id name description imageUrl price'));
    }

    return <form>
        <div className="form-group text-white">
            <label htmlFor="movie-name">Title</label>
            <input type="text"
                className="form-control"
                onChange={e => setName(e.target.value)}
                id="movie-name" 
                placeholder="Insert movie title here"/>
        </div>
            <div className="form-group text-white">
            <label htmlFor="description">Description</label>
            <input 
                type="text"
                onChange={e => setDescription(e.target.value)}
                className="form-control" 
                id="description" 
                placeholder="Insert movie description here"/>
        </div>
        <div className="form-group text-white">
            <label htmlFor="image">Thumbnail URL</label>
            <input 
                type="text" 
                className="form-control" 
                onChange={e => setImageUrl(e.target.value)}
                id="image"
                placeholder="Insert thumbnail URL here"/>
            <img src={imageUrl} className="d-block img-fluid" alt=""/>
        </div>
        <div className="form-group text-white">
            <label htmlFor="price">Price</label>
            <input 
                type="text" 
                className="form-control" 
                onChange={e => setPrice(Number(e.target.value))}
                id="price" 
                placeholder="Insert price here"/>
        </div>
        <button type="button" className="btn btn-success mb-2 ml-2" onClick={dispatchAddMovie}>Save</button>
    </form>
}

export default AddMovie;