import { Component } from 'react'
import SearchCard from '../SearchCard/SearchCard';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            inputValue: "",
            Movies: [],
            MoviesFiltradas : []
    };
    }

    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=5c3c9ca0d0ef3d9df2c3f65cc0421b97")
        .then(resp => resp.json()) 
        .then(data =>this.setState( 
               {Movies : data.results}
                )
                )
            
       .catch((err)=> console.log(err))
     
    }


    evitarSubmit(event){
        event.preventDefault();
    }

    controlarCambios(event){
        this.setState({inputValue: event.target.value},
            ()=>console.log(event),
       //     () => this.props.filtrarPeliculas(this.state.valorInput)
          )
    }

    FilterMovies(valorInput){
        let FilterMovies = this.state.Movies.filter(
            (elm)=>elm.name.toLowerCase().includes(this.state.inputValue.toLowerCase()))
            this.setState({
                MoviesFiltradas: FilterMovies
            })
      } 
    
    render() {
        this.state.MoviesFiltradas.length> 0 ?
            this.state.MoviesFiltradas.map((elm,idx) => <SearchCard  key = {idx + elm.title} datos = {elm} />)
            :
            <h2> Cargando... </h2>
        return (
            <div>
           <form onSubmit={ (event)=> this.evitarSubmit(event)}>
            
            <input type='text' onChange={(event)=> this.controlarCambios(event)} value={this.state.valorInput} placeholder="Buscar..."/>
            <input type= 'submit' value='Submit'/>
            {console.log(this.state.valorInput)}
            </form>
           
                </div>
        );
    }
}

//{<SearchResults value= {this.state.valor}/>}

export default Search


