import React from 'react' ;
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import TopRatedCard from  './Components/TopRatedCard/TopRatedCard'
import TopRated from './Components/TopRated/TopRated'
import {Route} from 'react-router-dom'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
 
  let menu = [
    'Home',
    'Favorites',
    'Top Rated Movies',
    'Now Playing Movies',
  ]
  
  


  return (
    <React.Fragment>
    < Header elementosMenu={menu}/>
    
    <Switch>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/Details/Movie/:id" component={ScreenMovieDetails}/>
      <Route path="/TopRated"  component={ScreenTopRated}/>
      <Route path="/NowPlaying" component={ScreenNowPlaying}/>
      <Route path="/Favorites" component={Favorites}/>
    </Switch>
   
    

    < Footer />
    </React.Fragment>
  );
}

export default App;
