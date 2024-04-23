import React, {Component} from 'react';
import TodasNowPlayingCard from "../TodasNowPlayingCard/TodasNowPlayingCard";

class TodasNowPlaying extends Component {

    constructor (props) {
        super(props)
        this.state = {
            NowPlayingMovies: [],
            Page: 1,
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

    render(){
        
        console.log(this.state.NowPlayingMovies)
        return (
            <>
                <div>   
                    {
                        this.state.NowPlayingMovies.length> 0 ?  
                        this.state.NowPlayingMovies.map((elm,idx) => <TodasNowPlayingCard  key = {idx + elm.title} datos = {elm} />) :
                        <h2> Cargando.. </h2>
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


