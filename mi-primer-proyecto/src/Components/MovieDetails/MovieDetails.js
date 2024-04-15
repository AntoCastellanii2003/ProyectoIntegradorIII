import React, { Component } from "react";


class MovieDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movie: {
                genres: [] 
            }
            
        }
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
        console.log(this.state.movie);
        return (
            <div>
                {this.state.movie.genres.length> 0 ?
                <article>
                    <h1> {this.state.movie.title}</h1>
                    <img src={`https://image.tmdb.org/t/p/w500/${this.state.movie.poster_path}/images`} alt={this.state.movie.title}></img>
                     <h3>Sinopsis: </h3><p> {this.state.movie.overview}: </p>
                     <h3>Genres: </h3><p> {this.state.movie.genres.map((elm, idx) => elm.name + ", ")}</p>
                     <h3>Ratings: </h3><p> {this.state.movie.popularity}</p>
                     <h3>Release date:</h3><p>{this.state.movie.release_date}</p>
                     <h3>Movie length:  </h3><p> {this.state.movie.runtime}</p>
                </article>
                :
            <h2> Cargando.. </h2>
            }
            </div>
        )
    }
}



export default MovieDetails;