import React from 'react' ;
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import TopRatedCard from  './Components/TopRatedCard/TopRatedCard'
import TopRated from './Components/TopRated/TopRated'
import {Route, Switch} from 'react-router-dom'


function App() {
  return (
    <React.Fragment>
    < Header/>
    
    <Switch>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/Details/Movie/:id" component={ScreenMovieDetails}/>
      <Route path="/TopRated"  component={ScreenTopRated}/>
      <Route path="/NowPlaying" component={ScreenNowPlaying}/>
      <Route path="/Favorites" component={Favorites}/>
      <Route component={NotFound}/>
    </Switch>
   
    

    < Footer />
    </React.Fragment>
  );
}

export default App;
