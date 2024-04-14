import React, { Component } from "react";
import NowPlayingCard from '../TopRatedCard/TopRatedCard'

class NowPlaying extends Component {

    constructor (props) {
        super(props)
        this.state = {
            movies: ''
        }
    }

 //   componentDidMount(){
//        fetch('https://rickandmortyapi.com/api/character')
//       .then((resp) => resp.json()) 
//        .then((data) => this.setState( 
//           {movies : data.results}
//            ))
 //       .catch((err)=> console.log(err))
     
  //  }

    render(){
        return (
            
            
            <h2> Cargando.. </h2>
        )
    }

}



export default NowPlaying;