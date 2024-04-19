import React, {Component} from 'react'
import nowplayingcard from "./nowplayingCard.css";

class NowPlayingCard extends Component{

    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render()
     { 
        console.log(this.props.datos) 
    return(<article className= "NowPlayingCard">
        <Link to={"/MovieDetails/id/" + this.props.datos.id}>
            <img src={this.props.datos.poster_path}/>
            <h2>{this.props.datos.title}</h2>
            <img className="imgcard"src={`https://image.tmdb.org/t/p/w500/${this.props.datos.poster_path}/images`} alt={this.props.datos.title}></img>
            </Link>
       </article>)}
}

{/* <img src={this.props.datos.poster_path}/>
            <h2>{this.props.data.title}</h2>
            <img className="imgcard"src={`https://image.tmdb.org/t/p/w500/${this.props.datos.poster_path}/images`} alt={this.props.datos.title}></img>
             */}

        
export default NowPlayingCard;