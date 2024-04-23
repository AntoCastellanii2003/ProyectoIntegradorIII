import React, {Component} from 'react'
import SearchCard from '../SearchCard.js/SearchCard'

class Search extends Component{

    constructor(props){
        super(props)
        this.state = {
                Movies: [],
                MoviesFiltradas: []
        }
        console.log('params', props)
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.match.params.search}&api_key=5c3c9ca0d0ef3d9df2c3f65cc0421b97`)
        .then(resp => resp.json()) 
        .then(data =>this.setState( 
               {Movies : data.results}
                )
                )
            
       .catch((err)=> console.log(err))
     
    }


    render()
     { 
        console.log(this.props.datos) 
    return(
        <article>
        { this.state.Movies.length> 0 ?
            this.state.Movies.map((elm,idx) => <SearchCard  key = {idx + elm.title} datos = {elm} />)
            :
            <h2> No hay ningun pelicula relacionada a lo ingresado </h2>}
            <article/>
   
       </article>)}
}
        
export default Search;

