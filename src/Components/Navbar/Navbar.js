import React, { useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";

// import logo from "./logo.jpeg";
const Navbar = () => {
  let history = useHistory();

  
  const HandleLogout = () => {
    history.push("/home");
    localStorage.removeItem("ecladmintoken");
    localStorage.removeItem("ecladminname");
    localStorage.removeItem("ecladminmail");
    localStorage.removeItem("eclusertoken");
    localStorage.removeItem("eclfullname");
    localStorage.removeItem("eclemail");
    localStorage.removeItem("eclrefcode");
    localStorage.removeItem("eclphone");
    localStorage.removeItem("results");
    localStorage.removeItem("trackid");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="navbar">
        <div className="container">
          <Link to="/home" className="navbar-brand">
          <h5 className="black-text">ECLIPSE </h5>

            {/* <img src={logo} width="50%" alt="logo" loading="lazy" /> */}
          </Link>

          <a
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#basicExampleNav"
            aria-controls="basicExampleNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon toggler">
              <box-icon
                className="box-icon"
                size="2rem"
                color=" #096b00"
                name="menu"
                type="logo"
              ></box-icon>
            </span>
          </a>

          <div className="collapse navbar-collapse" id="basicExampleNav">
            <ul className="navbar-nav mr-auto text-center">
             
            </ul>
            <ul className="navbar-nav text-center">


              {localStorage.getItem('eclusertoken') == null ? (
                <>
              <Link to="/login">
                <li className="">
                  <button type="btn" className="btn btn2 shadow">
                    login
                  </button>
                </li>
              </Link>
              <Link to="/register">
                <li className="">
                  <button type="btn" className="btn btn3 shadow">
                    sign up
                  </button>
                </li>
              </Link>
                </>
              ) : (
                <>
              <Link to="/dashboard">
                <li className="">
                  <button type="btn" className="btn btn4 shadow">
                   dashboard 
                  </button>
                </li>
              </Link>
              <a >
                <li className="">
                  <button type="btn" className="btn btn3 shadow" onClick={HandleLogout}>
                    logout
                  </button>
                </li>
              </a>
                </>
              )

              }
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
