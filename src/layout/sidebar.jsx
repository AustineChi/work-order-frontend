import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../images/Icon.png'

const Sidebar = () => {
    return ( 
        <div id="sidebar">
        <div className="logo-area">
        <img src={logo} className="App-logo" alt="logo" />
        Rensource
        </div>

        <div className="list-group list-group-flush">
            <span
            to="/assets"
        className="list-group-item "
        data-toggle="collapse"
        data-target="#meter-management"
      >
Asset Management       
 <span className="pull-right">
 <i className="fas fa-caret-down"></i>
         </span>
      </span>
      <ul className="collapse nav-list" id="meter-management">
      <li className="">
        <Link className="" to="/assets">
              Assets
            </Link>
        </li> <li className="">
        <Link className="" to="/parts">
              Parts/Inventory
            </Link>
        </li>
        <li className="">
        <Link className="" to="/meters">
              Meters
            </Link>
        </li>
        <li className="">
        <Link className="" to="/change/log">
              Meter Change Log
            </Link>
        </li>
      </ul>
      <span
        className="list-group-item  "
        data-toggle="collapse"
        data-target="#work-orders"
      >
Work Order Management       
<span className="pull-right">
 <i className="fas fa-caret-down"></i>
         </span>
      </span>
      <ul className="collapse nav-list" id="work-orders">
        <li className="">
        <Link className="" to="/work/orders">
              Work Orders
            </Link>
        </li>
        <li className="">
        <Link className="" to="/teams">
              Teams
            </Link>
        </li>
        <li className="">
        <Link className="" to="/locations">
              Locations
            </Link>
        </li>
        <li className="">
        <Link className="" to="/work/order/report">
              Reports 
            </Link>
        </li>
      </ul>
        </div>
      </div>
    );
}
 
export default Sidebar;