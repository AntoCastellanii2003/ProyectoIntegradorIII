import React, { Component } from "react";
import TopRated from "../../Components/TopRated/TopRated";
import NowPlaying from "../../Components/NowPlaying/NowPlaying";
import home from "./home.css";
import {Link} from 'react-router-dom'
import Search from "../../Components/Search/Search";

class Home extends Component {
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
          <h1 className="TitleHome"><Link to="/AllTopRated"> TOP RATED </Link></h1>
            <TopRated />
            <h1 className="TitleHome"><Link to="/AllNowPlaying"> NOW PLAYING </Link></h1>
            <NowPlaying />
          </section>
        </main>
      );
    }
   
  
  }
  
  export default Home;

