import { Component } from 'react'
import SearchCard from '../Search/Search';
import {Link} from 'react-router-dom'


class Form extends Component {
    constructor(props) {
        console.log('props header',props)
        super(props);
        this.state = { 
            inputValue: "",
            Movies: [],
           // MoviesFiltradas : []
    };
    }

  /*   componentDidMount(){
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.inputValue}api_key=5c3c9ca0d0ef3d9df2c3f65cc0421b97`)
        .then(resp => resp.json()) 
        .then(data =>this.setState( 
               {Movies : data.results}
                )
                )
            
       .catch((err)=> console.log(err))
     
    } */


    evitarSubmit(event){
        event.preventDefault();
        this.props.history.push(`/SearchResults/${this.state.inputValue}`)
    }

    controlarCambios(event){
        this.setState({inputValue: event.target.value},
            ()=>console.log(event),
       //     () => this.props.filtrarPeliculas(this.state.valorInput)
          )
    }

    FilterMovies(inputValue){
        let FilterMovies = this.state.Movies.filter(
            (elm)=>elm.name.toLowerCase().includes(this.state.inputValue.toLowerCase()))
            this.setState({
                MoviesFiltradas: FilterMovies
            })
      } 
    
    render() {
     
            
        return (
            <div>

           <form onSubmit={ (event)=> this.evitarSubmit(event)}>
            
            <input type='text' onChange={(event)=> this.controlarCambios(event)} value={this.state.valorInput} placeholder="Buscar..."/>
                <button type="submit">Submit</button>
            {console.log(this.state.valorInput)}
            </form>
            
            
            
           
                </div>
        );
    }
}




//{<SearchResults value= {this.state.valor}/>}

export default Form

/* 
import { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './formbusqueda.css'

class FormBusqueda extends Component {
    constructor(props){
        super(props)
        this.state = {
            valorInput: ''
        }
    }

    evitarSubmit(event){
        event.preventDefault()
    }

    guardarValor(event){
        this.setState({
            valorInput: event.target.value
        },
        ()=> this.props.filtrarPeliculas(this.state.valorInput))
    }

    render(){
        return(
            <form
                onSubmit={(event)=> this.evitarSubmit(event)}
            >
                <input
                onChange={(event)=> this.guardarValor(event)}
                placeholder="Busca una pelicula" />
                <Link to={`/resultadosBusqueda/${this.state.valorInput}`}>
                    <button type="submit">Buscar</button>
                </Link>
            </form>
        )
    }
}

export default FormBusqueda */