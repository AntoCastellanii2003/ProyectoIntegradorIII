import { Component } from 'react'


class Search extends Component {
    render() {
        return (
            <div className="searchForm">
                
                <form>
                    <input type="buscar" className="buscador" name="busqueda" placeholder="Search..." />
                    <button className="buscador" type="enviar"><i
                        className="fa-solid fa-magnifying-glass fa-beat-fade"></i></button>
                </form>
            </div>
        )
    }
}

export default Search