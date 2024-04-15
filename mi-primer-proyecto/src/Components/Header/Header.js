import React from 'react';
import Search from "../Search/Search"
import {Link} from 'react-router-dom'

function Header(props){

    return (
        <div>
        <nav>
            <ul className="main-nav">
                <li> <Link to="/"> Home </Link></li>
                <li> <Link to="/Favorites"> Favorites </Link></li>
                <li> <Link to="/AllTopRated"> Top rated </Link></li>
                <li> <Link to="/AllNowPlaying"> Now Playing </Link></li>
            </ul>
            <ul className="pageName">
                <li>The Movie Place <img src="./img/user.jpg" alt=""/></li>
                <Search />
            </ul>
        </nav>
      
        </div>
    )
}

export default Header