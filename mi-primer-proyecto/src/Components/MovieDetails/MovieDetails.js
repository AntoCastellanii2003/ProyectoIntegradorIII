import React, { Component } from "react";


class MovieDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movie: {
                genres: [] 
            },
            favorites: localStorage.getItem('favorites')
            
        }
    }

    addToFavorites(movieId){
        let storage = localStorage.getItem('favorites')
    
        if(storage !== null){
            let storageParseado = JSON.parse(storage)
            storageParseado.push(movieId)
            let storageStringificado = JSON.stringify(storageParseado)
            localStorage.setItem('favorites', storageStringificado)
            this.setState({ favorites: storageStringificado }) 
        }else{
            let favoriteMovies=[movieId]
            let favoritesStringificado = JSON.stringify(favoriteMovies)
            localStorage.setItem('favorites', favoritesStringificado)
            this.setState({ favorites: favoritesStringificado }) 
        }
    }
    
    removeFromFavorites(movieId){
        let storage = localStorage.getItem('favorites')
        let storageParseado = JSON.parse(storage)
        let filteredStorage = storageParseado.filter((elm)=> elm !== movieId)
        let storageStringificado = JSON.stringify(filteredStorage)
        localStorage.setItem('favorites', storageStringificado)
        this.setState({ favorites: storageStringificado }) 
    }
    

    componentDidMount() {
        let storage = localStorage.getItem('favorites')
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
        const isFavorite = this.state.favorites && this.state.favorites.includes(this.state.movie.id);
    
        return (
            <div>
                {this.state.movie.genres.length > 0 ?
                    <article>
                        <h1> {this.state.movie.title}</h1>
                        <img src={`https://image.tmdb.org/t/p/w500/${this.state.movie.poster_path}`} alt={this.state.movie.title}></img>
                        <h3>Sinopsis: </h3><p> {this.state.movie.overview}: </p>
                        <h3>Genres: </h3><p> {this.state.movie.genres.map((elm, idx) => elm.name + ", ")}</p>
                        <h3>Ratings: </h3><p> {this.state.movie.popularity}</p>
                        <h3>Release date:</h3><p>{this.state.movie.release_date}</p>
                        <h3>Movie length:  </h3><p> {this.state.movie.runtime}</p>
    
                        {isFavorite ?
                            <button onClick={() => this.removeFromFavorites(this.state.movie.id)}> Remove from favorites</button>
                            :
                            <button onClick={() => this.addToFavorites(this.state.movie.id)}>Add to favorites</button>
                        }
                    </article>
                    :
                    <h2> Cargando.. </h2>
                }
            </div>
        )
    }
    
}



export default MovieDetails;