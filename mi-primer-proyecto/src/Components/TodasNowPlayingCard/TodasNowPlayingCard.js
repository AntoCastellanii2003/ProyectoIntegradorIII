import React, { Component } from "react";
import {Link} from 'react-router-dom'

class TodasNowPlayingCard extends Component {

    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render()
     { 
        console.log(this.props.datos) 
    return(
    <article className= "TopRatedcard">
        <Link to={"/MovieDetails/id/" + this.props.datos.id}>
            <h2>{this.props.datos.title}</h2>
            <img className="imgcard"src={`https://image.tmdb.org/t/p/w500${this.props.datos.poster_path}`} alt={this.props.datos.title}></img>
          </Link>
    </article>)}
}

export default TodasNowPlayingCard;
     