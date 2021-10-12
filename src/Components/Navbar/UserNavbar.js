import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import UserNavLinks from "./UserNavLinks";
import UserSideNav from './UserSideNav'

const UserNavbar = () => {
  
  // Open Navbar z
  const openNav = (e) => {
    document.getElementById("mySidenav").style.width = "200px";
  };
  const closeNav = (e) => {
    document.getElementById("mySidenav").style.width = "0";
  };

  return (
    <>
    <div className="usernav">
      <nav
        class="navbar navbar-expand-lg navbar-light fixed-top"
        id="navbar main"
      >
        <div class="container" id="logo">
          <Link to="/dashboard" className="navbar-brand">
            <h5> ECLIPSE </h5>
          </Link>

          {/* <ul class="navbar-nav ml-auto nav-flex-icons"> */}
          <li class="nav-item dropdown avatar list-unstyled ml-auto">
            <a
              class="nav-link dropdown-toggle p-0 user"
              id="navbarDropdownMenuLink-333"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg"
                class="rounded-circle z-depth-0"
                alt="avatar image"
                height="35"
              />
            </a>
            <div
              class="dropdown-menu dropdown-menu-right dropdown-default dropdown-user "
              aria-labelledby="navbarDropdownMenuLink-333"
            >
          
              
              <div class="">
                <p> Jane Doe</p>
              </div>
            </div>
          </li>
        {/* </ul> */}
          <a
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#basicExampleNav"
            aria-controls="basicExampleNav"
            aria-expanded="false"
            aria-label="Toggle navigation"

          >
            <span
              class="navbar-toggler-icon toggler"
              onClick={(e) => openNav(e)}

            >
              <box-icon
                class="box-icon"
                size="2rem"
                color=" #096b00"
                name="menu"
                type="logo"
              ></box-icon>
            </span>
          </a>


          
          {/* <div class="collapse navbar-collapse" id="basicExampleNav">
            <NavLinks />
          </div> */}
        </div>
      </nav>

      <UserSideNav/>

      </div>
    </>
  );
};

export default UserNavbar;
