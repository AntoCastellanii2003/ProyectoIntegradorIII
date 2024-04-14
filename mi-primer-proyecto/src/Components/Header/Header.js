import React from 'react';

function Header(props){

    return (
        <nav>
            <ul className="main-nav">
                { 
                    props.elementosMenu.map((Nav, idx)=> <li>{Nav}</li>)
                    
                }
            </ul>
            <ul className="user">
                <li>Nombre usuario <img src="./img/user.jpg" alt=""/></li>
            </ul>
        </nav>
    )
}

export default Header