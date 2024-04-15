import React, { Component } from "react";


class MovieDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movie: {
                genres: [] 
            }
            
        }
        {/* PREGUNTAR SOBRE ESTO!!! */}
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=5c3c9ca0d0ef3d9df2c3f65cc0421b97`)
            .then(resp => resp.json())
            .then(datos => {
                console.log(this.props.match.params.id)
                this.setState({
                    movie: datos
                })
            })
            .catch(err => console.log(err))

    }
    



    render() {
        
        return (
            
            <div>
                {console.log(this.state.movie)}
                <img src={`https://image.tmdb.org/t/p/w500/${this.state.movie.poster_path}/images`} alt={this.state.movie.title}></img>
                <p> {this.state.movie.title}</p>
                {console.log(this.state.movie.data)}
                <p> Genres: </p> {this.state.movie.genres.map((elm, idx) => elm.name)} {/* PREGUNTAR SOBRE ESTO!!! */}
                <p> Sinopsis: {this.state.movie.overview}: </p>
                <p> Rating: {this.state.movie.popularity}</p>
                <p> Release date: {this.state.movie.release_date}</p>
                <p> Movie length: {this.state.movie.runtime}</p>
            </div>
        )
    }
}



export default MovieDetails;