import { Component } from 'react'


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            inputValue: "",
            Movies: [],
    };
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
                Movies: FilterMovies
            })
      } 
    
    render() {
        return (
           <form onSubmit={ (event)=> this.evitarSubmit(event)}>
            
            <input type='text' onChange={(event)=> this.controlarCambios(event)}/>
            <input type= 'submit' value='Submit'/>
            {console.log(this.state.valorInput)}
            </form>
        );
    }
}

//{<SearchResults value= {this.state.valor}/>}

export default Search


