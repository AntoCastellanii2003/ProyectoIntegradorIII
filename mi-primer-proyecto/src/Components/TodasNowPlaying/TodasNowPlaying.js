
import React, {Component} from 'react';
import TodasNowPlayingCard from "../TodasNowPlayingCard/TodasNowPlayingCard";
import Loader from '../Loader/Loader'


class TodasNowPlaying extends Component {

    constructor (props) {
        super(props)
        this.state = {
            NowPlayingMovies: [],
            Page: 1,
            filtro: ""
        }
    }

    traerInfo(page) {
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=5c3c9ca0d0ef3d9df2c3f65cc0421b97&page=" + page)
            .then((resp) => resp.json()) 
            .then((data) => {
                this.setState({NowPlayingMovies : this.state.NowPlayingMovies.concat(data.results)})
            })
            .catch((err)=> console.log(err))
    }

    componentDidMount(){
        this.traerInfo(1)
    }
    
    filtro() {
        let filtradas = this.state.NowPlayingMovies.filter(elm => elm.title.toLowerCase().includes(this.state.filtro.toLowerCase()))
        this.setState({ NowPlayingMovies: filtradas })
    }
 
    render(){
        let peliculas = this.state.NowPlayingMovies
        console.log(this.state.NowPlayingMovies)
        return (
            <>
                <input onChange={(e) => this.setState({ filtro: e.target.value }, () => this.filtro()) } type="text" placeholder="Buscar Pelicula" />
            
                <div className="todas-top-rated-container">   
                    {
                        peliculas.length > 0 ?  
                        peliculas.map((elm,idx) => <TodasNowPlayingCard  key = {idx + elm.title} datos = {elm} />) :
                        <h2> <Loader/> </h2>
                    }
                </div>    
                <button onClick={() => {
                    let npage = this.state.Page;
                    npage = npage + 1
                    this.traerInfo(npage)
                    this.setState({Page: npage})
                }}>Show More</button>
            </>
        )
    }
}


export default TodasNowPlaying
