import React from 'react';
import {Link} from 'react-router-dom';
import "./Header.css";

function Header(props){

    return (
        <div>
        <nav className='navHeader'>
            <ul className="main-nav">
                <li> <Link to="/"> Home </Link></li>
                <li> <Link to="/Favorites"> Favorites </Link></li>
                <li> <Link to="/AllTopRated"> Top rated </Link></li>
                <li> <Link to="/AllNowPlaying"> Now Playing </Link></li>
            </ul>
            <ul className="pageName">
                <li>The Movie Place <img src="./img/user.jpg" alt=""/></li>
                
            </ul>
        </nav>
      
        </div>
    )
}

export default Header