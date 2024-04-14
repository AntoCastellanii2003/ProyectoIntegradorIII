import React, { Component } from "react";
import NowPlaying from "../../Components/NowPlaying/NowPlaying";


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
            <NowPlaying />
          </section>
        </main>
      );
    }
   
  
  }
  
  export default AllNowPlaying;
