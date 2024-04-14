import React from 'react' ;
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import TopRatedCard from  './Components/TopRatedCard/TopRatedCard'
import TopRated from './Components/TopRated/TopRated'


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
    
    <TopRated />
    <TopRatedCard/>
   
    

    < Footer />
    </React.Fragment>
  );
}

export default App;
