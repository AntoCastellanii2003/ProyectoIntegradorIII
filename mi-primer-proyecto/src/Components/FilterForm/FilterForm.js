import { Component } from 'react'


class Form extends Component {
    constructor(props) {
        console.log('props header',props)
        super(props);
        this.state = { 
            inputValue: "",
            Movies: [],
            MoviesFiltradas : []
    };
    }




    evitarSubmit(event){
        event.preventDefault();
        this.props.history.push(`/TodasNowPlaying/${this.state.inputValue}`)
    }

    controlarCambios(event){
        this.setState({inputValue: event.target.value},
            ()=>console.log(event),
             () => this.props.filtrarPeliculas(this.state.inputValue)
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





export default Form