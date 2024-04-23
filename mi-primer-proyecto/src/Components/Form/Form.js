import { Component } from 'react';
import "./Form.css";


class Form extends Component {
    constructor(props) {
        console.log('props header',props)
        super(props);
        this.state = { 
            inputValue: "",
            Movies: [],
    };
    }

    evitarSubmit(event){
        event.preventDefault();
        this.props.history.push(`/SearchResults/${this.state.inputValue}`)
    }

    controlarCambios(event){
        this.setState({inputValue: event.target.value},
            ()=>console.log(event),
          )
    }

    render() {
     
            
        return (
            <div className="formContainer">

                <form className="searchForm" onSubmit={(event) => this.evitarSubmit(event)}>

                    <input type='text' className="searchInput" onChange={(event) => this.controlarCambios(event)} value={this.state.valorInput} placeholder="Buscar..." />
                    <button type="submit"className="searchButton">Submit</button>
                    {console.log(this.state.valorInput)}
                </form>




            </div>
        );
    }
}





export default Form