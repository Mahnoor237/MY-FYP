import React from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Changed the import to match the new CSS file name
import { useAuth } from "../store/auth";

export const CustomNavbar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <header>
        <div className="custom-container"> {/* Changed class name to 'custom-container' */}
          <div className="custom-logo-brand"> {/* Changed class name to 'custom-logo-brand' */}
            <NavLink to="/">REVIEW MONITORING</NavLink>
          </div>

          <nav>
            <ul className="custom-navbar-links"> {/* Changed class name to 'custom-navbar-links' */}
              <li>
                <NavLink to="/home"> Home </NavLink>
              </li>
              <li>
                <NavLink to="/about"> About </NavLink>
              </li>
              <li>
                <NavLink to="/products"> Products </NavLink>
              </li>

              {isLoggedIn ? (
                <li>
                  <NavLink to="/logout">Logout</NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to="/register"> Register </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login"> Login </NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default CustomNavbar;
