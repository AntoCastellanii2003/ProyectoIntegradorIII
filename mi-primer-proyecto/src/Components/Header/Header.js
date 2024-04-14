import React from 'react';
import Search from "../Search/Search"

function Header(props){

    return (
        <div>
        <nav>
            <ul className="main-nav">
                <li> <link to="/Home"> Home </link></li>
                <li> <link to="/Favorites"> Favorites </link></li>
                <li> <link to="/TopRated"> Top rated </link></li>
                <li> <link to="/NowPlaying"> Now Playing </link></li>
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