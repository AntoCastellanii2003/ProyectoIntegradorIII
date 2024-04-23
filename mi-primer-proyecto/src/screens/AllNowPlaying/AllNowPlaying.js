import React, { Component } from "react";
import TodasNowPlaying from "../../Components/TodasNowPlaying/TodasNowPlaying"
import Search from "../../Components/Form/Form";


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
          </section>
        </main>
      );
    }
   
  
  }
  
  export default AllNowPlaying;
