import React from 'react' ;
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import ScreenFavorites from './screens/Favorites/Favorites';
import ScreenMovieDetails from './screens/MovieDetails/ScreenMovieDetails';
import Home from './screens/Home/Home';
import {Route, Switch} from 'react-router-dom'
import NotFound from './screens/NotFound/Notfound';
import AllNowPlaying from './screens/AllNowPlaying/AllNowPlaying';
import AllTopRated from './screens/AllTopRated/AllTopRated';
import SearchResults from './screens/SearchResults/SearchResults';

function App() {
  return (
    <React.Fragment>
    < Header/>
    
    <Switch>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/MovieDetails/id/:id" component={ScreenMovieDetails}/>
      <Route path="/AllTopRated"  component={AllTopRated}/>
      <Route path="/AllNowPlaying" component={AllNowPlaying}/>
      <Route path="/Favorites" component={ScreenFavorites}/>
      <Route path= "/SearchResults/:search" component={SearchResults} />
      <Route path="/AllTopRated" component={AllTopRated}/>
      <Route component={NotFound}/>
      
    </Switch>
   
    

    < Footer />
    </React.Fragment>
  );
}

export default App;
