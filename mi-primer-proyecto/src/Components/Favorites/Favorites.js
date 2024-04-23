import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./Favorites.css";

class Favorites extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showMore: false,
            favorites: [],
            listadoFavoritos: [],
        }
    }

    componentDidMount() {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        this.setState({
            favorites: favorites,
        })

        let nuevolistadoFavoritos = [];

        favorites.map((id) => {
            fetch(`https://api.themoviedb.org/3/movie/${parseInt(id)}?api_key=5c3c9ca0d0ef3d9df2c3f65cc0421b97`)
                .then((resp) => resp.json())
                .then((data) => {
                    nuevolistadoFavoritos.push(data)
                    this.setState({
                        listadoFavoritos: nuevolistadoFavoritos
                    })
                })
                .catch((err) => {console.log(err)})
        })
        
    }

    removeFromFavorites = (paramId) => {
        let favorites = this.state.favorites;
        let filteredFavorites = favorites.filter(id => id !== paramId.toString());
        localStorage.setItem('favorites', JSON.stringify(filteredFavorites));
        this.setState({ favorites: filteredFavorites }) 
    };

    print() {
        console.log(this.state.favorites);
        console.log(this.state.listadoFavoritos);
    }

    render() {
        return(
            <div className="favorites-container">
                {
                    this.state.listadoFavoritos.length > 0 ?
                        this.state.listadoFavoritos.map((data) => {
                            if (this.state.favorites.includes(data.id.toString())) {
                                return(
                                    <article className="favoritesCard" key={data.id}>
                                        <Link to={`/MovieDetails/id/${data.id}`}>
                                            <img className="imgcard" src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt={data.title}></img>
                                            <h2>{data.title}</h2>
                                        </Link>
                                        {
                                            this.state.showMore ?
                                            <p>{data.overview}</p> :
                                            null
                                        }
                                        
                                        <button onClick={() => this.removeFromFavorites(data.id)}>Remove from Favorites</button>
                                    </article>
                                )
                            } else {
                                return null
                            }
                        }): 
                        <>
                            <p>No hay favoritos</p>
                        </>
                }
            </div>
        )
    }
}

export default Favorites;
