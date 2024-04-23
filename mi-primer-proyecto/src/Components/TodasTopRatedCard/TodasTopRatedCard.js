import React, { Component } from "react";
import todasTopRatedCard from "./todasTopRatedCard.css"
import {Link} from 'react-router-dom'

class TodasTopRatedCard extends Component {

    constructor(props){
        console.log('props', props)
        super(props)
        this.state = {
            
        }
    }

    render()
     { 
    return(
        <article className= "TopRatedcard">
          <h2>{this.props.datos.title}</h2>
          <img className="imgcard"src={`https://image.tmdb.org/t/p/w500${this.props.datos.poster_path}`} alt={this.props.datos.title}></img>

       </article>)}
}

export default TodasTopRatedCard;

