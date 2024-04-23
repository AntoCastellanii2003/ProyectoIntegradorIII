import { Component } from 'react'


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
            <div>

                <form onSubmit={(event) => this.evitarSubmit(event)}>

                    <input type='text' onChange={(event) => this.controlarCambios(event)} value={this.state.valorInput} placeholder="Buscar..." />
                    <button type="submit">Submit</button>
                    {console.log(this.state.valorInput)}
                </form>




            </div>
        );
    }
}





export default Form