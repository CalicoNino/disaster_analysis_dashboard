import React from 'react';
import logo from '../visuals/logo.gif'
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand mx-3"><img src={logo} alt="Logo"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <NavLink className="my-3 mx-4 text-light" to='/' exact activeStyle={{fontWeight: "bold"}}>
                        Home
                    </NavLink>

                    <NavLink className="my-3 mx-4 text-light" to='/livefeed' activeStyle={{fontWeight: "bold"}}>
                        Live Feed
                    </NavLink>
                    
                    <NavLink className="my-3 mx-4 text-light" to='/analytics' activeStyle={{fontWeight: "bold"}}>
                        Analytics
                    </NavLink>
                </ul>
            </div>
            </nav>
    );
}

export default NavBar;