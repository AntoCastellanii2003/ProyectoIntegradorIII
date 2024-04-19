import React, { Component } from "react";
import TodasTopRated from "../../Components/TodasTopRated/TodasTopRated";
import Search from "../../Components/Form/Form";


class AllTopRated extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }


    render() {
      return (
        <main>
          <Search history= {this.props.history} />
          <section>
            <h1 className="TitleHome">NOW PLAYING</h1>
              < TodasTopRated />
              <button> Cargar Mas</button>
          </section>
        </main>
      );
    }
   
  
  }
  
  export default AllTopRated;
