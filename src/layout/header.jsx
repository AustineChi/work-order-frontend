import React from 'react';
import { Link } from "react-router-dom";

import logo from '../images/logo.jpg';
import logo2 from '../images/Rensource.gif'
const Header = () => {
    return ( 
        <nav>
       <img src={logo2} className="App-logo2" alt="logo" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    );
}
 
export default Header;