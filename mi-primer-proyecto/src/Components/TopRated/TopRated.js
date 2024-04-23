import React, { Component } from "react";
import TopRatedCard from "../TopRatedCard/TopRatedCard";
import "./toprated.css"

class TopRated extends Component {

    constructor(props) {
        super(props)
        this.state = {
            TopRatedMovies: [],
            filtro: ""
        }
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=5c3c9ca0d0ef3d9df2c3f65cc0421b97")
            .then(resp => resp.json())
            .then(data => this.setState(
                { TopRatedMovies: data.results }
            )
            )

            .catch((err) => console.log(err))

    }

    filtro() {
        let filtradas = this.state.TopRatedMovies.filter(elm => elm.title.toLowerCase().includes(this.state.filtro.toLowerCase()))
        this.setState({ TopRatedMovies: filtradas })
    }

    render() {
        let cincoPelis = this.state.TopRatedMovies.slice(0, 5)
        console.log(this.state.TopRatedMovies)
        return (
            <>
                <input onChange={(e) => this.setState({ filtro: e.target.value })} type="text" placeholder="Buscar Pelicula" />
                <div className="topRated">
                    {cincoPelis.length > 0 ?
                        cincoPelis.map((elm, idx) => <TopRatedCard key={idx + elm.title} datos={elm} />)
                        :
                        <h2> Cargando.. </h2>}
                </div>
            </>


        )
    }

}




export default TopRated;