import React, { Component } from "react";
import TopRatedCard from '../TopRatedCard/TopRatedCard'

class TopRated extends Component {

    constructor (props) {
        super(props)
        this.state = {
            TopRatedMovies: []
        }
    }

    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=5c3c9ca0d0ef3d9df2c3f65cc0421b97")
        .then(resp => resp.json()) 
        .then(data =>this.setState( 
               {TopRatedMovies : data.results}
                )
                )
            
       .catch((err)=> console.log(err))
     
    }

    //this.setState( 
    //    {movies : data.results}
    //     ))

    render(){
        //let cincoPelis = this.state.TopRated.slice(0,5)
        console.log(this.state.TopRatedMovies)
        return (
            <div>
        <h1>hola</h1>
            </div>

            
        )
    }

}

//{this.state.TopRatedMovies.length> 0 ?
//this.state.TopRatedMovies.map((elm,idx) => <TopRatedCard  key = {idx + elm.title} datos = {elm} />)
//:
//<h2> Cargando.. </h2>}


export default TopRated;