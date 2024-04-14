import React from 'react';
import Search from "../Search/Search"

function Header(props){

    return (
        <div>
        <nav>
            <ul className="main-nav">
                { 
                    props.elementosMenu.map((Nav, idx)=> <li>{Nav}</li>)
                    
                }
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