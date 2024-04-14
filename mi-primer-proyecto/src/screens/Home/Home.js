import React, { Component } from "react";
import TopRated from "../../Components/TopRated/TopRated";
import NowPlaying from "../../Components/NowPlaying/NowPlaying";
import home from "./home.css";

class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }


    render() {
      return (
        <main>
          <section>
            <h1 className="TitleHome">TOP RATED</h1>
            <TopRated />
            <h1 className="TitleHome">NOW PLAYING</h1>
            <NowPlaying />
          </section>
        </main>
      );
    }
   
  
  }
  
  export default Home;

