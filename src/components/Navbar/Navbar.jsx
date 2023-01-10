import React from 'react';
import './Navbar.css'

function Navbar() {
    return <nav className='nav'>
        <img src='https://pokemon-web-app.web.app/static/media/logo.4e120cee.svg' alt='' />

        <ul className='actions'>
            <a href='/' className='nav-item explore nav-item-selected'>
                <img src='https://pokemon-web-app.web.app/static/media/compass.9af2d6b7.png' alt=''></img>
                <p>EXPLORE</p>
            </a>

            <a href='/' className='nav-item pokemon-list'>
                <img src='https://pokemon-web-app.web.app/static/media/backpack.ff1378cd.png' alt=''></img>
                <p>MY POKEMON LIST</p>
            </a>
        </ul>

    </nav>;
}

export default Navbar;
