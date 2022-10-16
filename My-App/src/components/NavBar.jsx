import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";


const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Taste-Buds
            <i img src={"img"}></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
                end
              >
                Foods
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/FoodOutlet"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Food Outlet
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/addfood"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Add Food
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Addoutlet"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Add Outlet
              </NavLink>
            </li>
          </ul>
          <input className="form-control mr-sm-2" type="search" style={{"width":200,"marginRight":10}} placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
