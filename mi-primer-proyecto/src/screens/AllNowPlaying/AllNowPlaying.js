import React, { Component } from "react";
import TodasNowPlaying from "../../Components/TodasNowPlaying/TodasNowPlaying"


class AllNowPlaying extends Component {
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
              < TodasNowPlaying />
              <button> Ver Mas</button>
          </section>
        </main>
      );
    }
   
  
  }
  
  export default AllNowPlaying;
