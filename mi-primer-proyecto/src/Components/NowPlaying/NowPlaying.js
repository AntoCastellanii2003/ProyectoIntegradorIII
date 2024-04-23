import React, { Component } from "react";
import NowPlayingCard from '../TopRatedCard/TopRatedCard';
import "./nowplaying.css";
import nowplaying from "./nowplaying.css";
import Loader from "../Loader/Loader";

class NowPlaying extends Component {

    constructor (props) {
        super(props)
        this.state = {
            NowPlayingMovies: []
        }
    }

    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=5c3c9ca0d0ef3d9df2c3f65cc0421b97")
        .then(resp => resp.json()) 
        .then(data =>this.setState( 
               {NowPlayingMovies : data.results}
                )
                )
            
       .catch((err)=> console.log(err))
     
    }

    

    render(){
        let cincoPelis = this.state.NowPlayingMovies.slice(0,5)
        console.log(this.state.NowPlayingMovies)
        return (
            <div className="nowPlaying">
                {cincoPelis.length> 0 ?
                cincoPelis.map((elm,idx) => <NowPlayingCard  key = {idx + elm.title} datos = {elm} />)
                :
                <h2> <Loader/> </h2>}
            </div>

            
        )
    }

}




export default NowPlaying;
