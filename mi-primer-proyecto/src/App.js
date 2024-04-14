import React from 'react' ;
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import MovieCard from  './Components/MovieCard/MovieCard'
import Movies from './Components/Movies/Movies'


function App() {
 
  let menu = [
    'Home',
    'Favorites',
    'Ver todas',
    'menú3',
  ]
  
  


  return (
    <React.Fragment>
    < Header elementosMenu={menu}/>
    
    <Movies />
    <MovieCard/>
   
    

    < Footer />
    </React.Fragment>
  );
}

export default App;
