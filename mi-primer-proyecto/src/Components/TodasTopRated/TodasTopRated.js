import React, {Component} from 'react';
import TodasTopRatedCard from "../TodasTopRatedCard/TodasTopRatedCard";
import  "./todasTopRated.css";

class TodasTopRated extends Component {

    constructor (props) {
        super(props)
        this.state = {
            TopRatedMovies: [],
            Page: 1,
            filtro: ""
        }
    }

    traerInfo(page) {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=5c3c9ca0d0ef3d9df2c3f65cc0421b97&page=" + page)
            .then((resp) => resp.json()) 
            .then((data) => {
                this.setState({TopRatedMovies : this.state.TopRatedMovies.concat(data.results)})
            })
            .catch((err)=> console.log(err))
    }

    componentDidMount(){
        this.traerInfo(1)
    }
    
    filtro() {
        let filtradas = this.state.TopRatedMovies.filter(elm => elm.title.toLowerCase().includes(this.state.filtro.toLowerCase()))
        this.setState({ TopRatedMovies: filtradas })
    }
 
    render(){
        let peliculas = this.state.TopRatedMovies
        console.log(this.state.TopRatedMovies)
        return (
            <>
                <input onChange={(e) => this.setState({ filtro: e.target.value }, () => this.filtro()) } type="text" placeholder="Buscar Pelicula" />
            
                <div className="todas-top-rated-container">   
                    {
                        peliculas.length > 0 ?  
                        peliculas.map((elm,idx) => <TodasTopRatedCard  key = {idx + elm.title} datos = {elm} />) :
                        <h2> Cargando.. </h2>
                    }
                </div>    
                <button onClick={() => {
                    let npage = this.state.Page;
                    npage = npage + 1
                    this.traerInfo(npage)
                    this.setState({Page: npage})
                }}>Show More</button>
            </>
        )
    }
}


export default TodasTopRated
