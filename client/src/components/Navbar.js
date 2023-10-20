import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
// react router
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav className='navbar navbar-expand-md p-3 navbar-light bg-light shadow'>
                <NavLink className="navbar-brand" to="/">
                    Squash
                </NavLink>
                <button 
                  className='navbar-toggler'
                  type='button'
                  data-toggle = 'collapse'
                  data-target = '#navbarSupportedContent'
                 >
                 <span className='navbar-toggler-icon'></span>       
                </button>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                            <NavLink className="nav-link" to="/create">
                                New Card
                            </NavLink>


                </div>

            </nav>
        </div>
    );
}
