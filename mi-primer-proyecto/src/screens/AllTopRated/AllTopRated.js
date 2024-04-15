import React, { Component } from "react";
import TodasTopRatedCard from "../../Components/TodasTopRatedCard/TodasTopRatedCard"


class AllTopRated extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }


    render() {
      return (
        <main>
          <section>
            <h1 className="TitleHome">NOW PLAYING</h1>
              < TodasTopRatedCard />
              <button> Ver Mas</button>
          </section>
        </main>
      );
    }
   
  
  }
  
  export default AllTopRated;
