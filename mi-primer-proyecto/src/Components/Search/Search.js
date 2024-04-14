import { Component } from 'react'


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {valor: ''};
    }

    evitarSubmit(event){
        event.preventDefault();
    }

    controlarCambios(event){
        this.setState({valor: event.target.value},
            ()=>console.log(event))
    }
    
    render() {
        return (
           <form onSubmit={ (event)=> this.evitarSubmit(event)}>
            <label>Search Movies</label>
            <input type='text' onChange={(event)=> this.controlarCambios(event)} />
            <input type= 'submit' value='Submit'/>
            </form>
        );
    }
}

//{<SearchResults value= {this.state.valor}/>}

export default Search