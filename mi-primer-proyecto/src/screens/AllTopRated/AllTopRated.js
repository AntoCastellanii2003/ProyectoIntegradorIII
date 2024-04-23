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
          <section>
            <h1 className="TitleHome">TOP RATED MOVIES</h1>
              < TodasTopRated />
          </section>
        </main>
      );
    }
   
  
  }
  
  export default AllTopRated;