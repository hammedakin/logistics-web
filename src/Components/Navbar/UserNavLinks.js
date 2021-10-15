import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
const closeNav = (e) => {
  document.getElementById("mySidenav").style.width = "0";
};

const UserNavLinks = () => {
  let history = useHistory();

  const HandleLogout = () => {
    history.push("/home");
    localStorage.removeItem("usertoken");
    localStorage.removeItem("fullname");
    localStorage.removeItem("email");
    localStorage.removeItem("phone");
    localStorage.removeItem("results");
    localStorage.removeItem("trackid");
  };

  function RemoveTrack() {
    localStorage.removeItem("results");
    localStorage.removeItem("trackid");  
  }

  return (
    <>
      <ul class="navbar-nav ml-auto mr-auto text-center">
        <li class="nav-item">
          <NavLink
            // onClick={(e) => closeNav(e)}
            tag={Link}
            activeClassName="active1 "
            to="/dashboard"
            onClick={RemoveTrack}

          >
            HOME
          </NavLink>
        </li>

        <li class="nav-item">
          <NavLink
            // onClick={(e) => closeNav(e)}
            tag={Link}
            activeClassName="active1"
            to="/send-package"
            onClick={RemoveTrack}
            // onClick={RemoveTrack}

          >
            SEND PACKAGE
          </NavLink>
        </li>

        <li class="nav-item ">
          <NavLink
            // onClick={(e) => closeNav(e)}
            tag={Link}
            activeClassName="active1"
            to="/track/"
            onClick={RemoveTrack}

          >
            TRACK
          </NavLink>
        </li>
      </ul>
      <ul class="navbar-nav text-center"> 
          <li>
            <a onClick={HandleLogout}>
              <button type="btn" class="btn shadow">
                logout
              </button>
            </a>
          </li>
      </ul>
    </>
  );
};

export default UserNavLinks;
