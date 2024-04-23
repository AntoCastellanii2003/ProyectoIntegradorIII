import React, { Component } from "react";
import MovieDetails from '../../Components/MovieDetails/MovieDetails';

class ScreenMovieDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
        movie: [],
        id: this.props.match.params.id
        }
        }
    
    render() {
        return (
            <div>
        <MovieDetails match={this.props.match} />
            </div>
        );
    }
    }
export default ScreenMovieDetails
