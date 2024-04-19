import React, {Component} from 'react'


class NowPlayingCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFavorite: localStorage.getItem('favorites') && localStorage.getItem('favorites').includes(this.props.datos.id.toString())
        };
    }

    addToFavorites = () => {
        let favorites = localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [];
        favorites.push(this.props.datos.id.toString());
        localStorage.setItem('favorites', JSON.stringify(favorites));
        this.setState({ isFavorite: true });
    };

    removeFromFavorites = () => {
        let favorites = JSON.parse(localStorage.getItem('favorites'));
        let filteredFavorites = favorites.filter(id => id !== this.props.datos.id.toString());
        localStorage.setItem('favorites', JSON.stringify(filteredFavorites));
        this.setState({ isFavorite: false });
    };

    render() {
        return (
            <article className="NowPlayingCard">
                <Link to={`/MovieDetails/id/${this.props.datos.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w500/${this.props.datos.poster_path}`} alt={this.props.datos.title} />
                    <h2>{this.props.datos.title}</h2>
                </Link>
                {this.state.isFavorite ? (
                    <button onClick={this.removeFromFavorites}>Remove from Favorites</button>
                ) : (
                    <button onClick={this.addToFavorites}>Add to Favorites</button>
                )}
            </article>
        );
    }
}

export default NowPlayingCard;
