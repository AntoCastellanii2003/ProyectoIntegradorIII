import React, { Component } from "react";
import TodasNowPlayingCard from "../../Components/TodasNowPlayingCard/TodasNowPlayingCard"


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
              < TodasNowPlayingCard />
              <button> Buscar Mas</button>
          </section>
        </main>
      );
    }
   
  
  }
  
  export default AllNowPlaying;
