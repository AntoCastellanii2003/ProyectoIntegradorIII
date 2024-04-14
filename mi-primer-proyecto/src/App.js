import React from 'react' ;
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import ScreenFavorites from './screens/Favorites/Favorites';
import ScreenMovieDetails from './screens/DetailsMovie/DetailsMovie';
import ScreenNowPlaying from './screens/NowPlaying/NowPlaying';
import ScreenTopRated from './screens/TopRated/TopRated';
import Home from './screens/Home/Home';
import {Route, Switch} from 'react-router-dom'
import NotFound from './screens/NotFound/Notfound';


function App() {
  return (
    <React.Fragment>
    < Header/>
    
    <Switch>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/Details/Movie/:id" component={ScreenMovieDetails}/>
      <Route path="/TopRated"  component={ScreenTopRated}/>
      <Route path="/NowPlaying" component={ScreenNowPlaying}/>
      <Route path="/Favorites" component={ScreenFavorites}/>
      <Route component={NotFound}/>
      
    </Switch>
   
    

    < Footer />
    </React.Fragment>
  );
}

export default App;
