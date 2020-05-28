import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../redux/actions";
import AddMovie from '../components/AddMovie';
import Movie from '../components/movies/Movie';

class Movies extends Component {

    componentDidMount(){
        this.props.getMovies('_id name description imageUrl price');
    }
    renderMovies = () => {
        const moviesList = this.props.movies.map(movie => {
            return <Movie key={movie._id} movie={movie}/>
        })
        return moviesList;
    }

    render() {
        return <div className="row">
            <div className="col-md-3">
                <AddMovie/>
            </div>
            <div className="col">
                <div className="row">
                   {this.renderMovies()}
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = state => {
    return {
       movies: state.movies
    }
}

const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        getMovies: actions.getMovies
    }, dispatch)
}

export default connect(mapStateToProps, mapStateToDispatch)(Movies);