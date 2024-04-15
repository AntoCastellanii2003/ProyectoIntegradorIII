import React, {Component} from 'react';
import TodasTopRatedCard from "../TodasTopRatedCard/TodasTopRatedCard";
import todasTopRated from "./todasTopRated.css";

class TodasTopRated extends Component {

    constructor (props) {
        super(props)
        this.state = {
            TopRatedMovies: [],
            Page: 1
        }
    }

    componentDidMount(){
        console.log('pasa por el didmount')
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=5c3c9ca0d0ef3d9df2c3f65cc0421b97")
        .then(resp => resp.json()) 
        .then(data =>this.setState({TopRatedMovies : data.results}, ()=> console.log('state', this.state)))
       .catch((err)=> console.log(err))
     
    }

 
    render(){
        let peliculas = this.state.TopRatedMovies
        console.log(this.state.TopRatedMovies)
        return (
            <div className="todas-top-rated-container">   
        {peliculas.length> 0 ?  
        peliculas.map((elm,idx) => <TodasTopRatedCard  key = {idx + elm.title} datos = {elm} />)
        :
        <h2> Cargando.. </h2>}
            </div>

            
        )
    }

}


export default TodasTopRated
