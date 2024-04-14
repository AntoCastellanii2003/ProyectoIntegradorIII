import React, {Component} from 'react'
import 

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
            <h1>hola</h1>
       </article>)}
}

{/* <img src={this.props.datos.poster_path}/>
            <h2>{this.props.data.title}</h2>
            <img className="imgcard"src={`https://image.tmdb.org/t/p/w500/${this.props.datos.poster_path}/images`} alt={this.props.datos.title}></img>
             */}

        
export default NowPlayingCard;