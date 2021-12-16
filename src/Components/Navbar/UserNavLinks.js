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
      {" "}
      <div class=" my-2">
        <Link to="/dashboard" className="navbar-brand">
          <h5 class="name text-center" > ECLIPSE </h5>
        </Link>
      </div>
<hr style={{ backgroundColor: "whitesmoke"}} class="m-1" />

      <ul class="navbar-nav ml-auto mr-auto mt-3">
        <li class="nav-item">
          <box-icon
            class="box-icon"
            size="1.1rem"
            color=" #fff"
            name="home"
            type="logo"
          ></box-icon>
          <NavLink
            // onClick={(e) => closeNav(e)}
            tag={Link}
            activeClassName="active1 "
            to="/dashboard"
            onClick={RemoveTrack}
          >
            Home
          </NavLink>
        </li>

        <li class="nav-item">
          <box-icon
            class="box-icon"
            size="1.1rem"
            color=" #fff"
            name="gift"
            type="logo"
          ></box-icon>
          <NavLink
            // onClick={(e) => closeNav(e)}
            tag={Link}
            activeClassName="active1"
            to="/send-package"
            onClick={RemoveTrack}
          >
            Send Package
          </NavLink>
        </li>

        <li class="nav-item ">
          <box-icon
            class="box-icon"
            size="1.1rem"
            color=" #fff"
            name="paper-plane"
            type="logo"
          ></box-icon>
          <NavLink
            // onClick={(e) => closeNav(e)}
            tag={Link}
            activeClassName="active1"
            to="/track/"
            onClick={RemoveTrack}
          >
            Track
          </NavLink>
        </li>

        <li class="nav-item ">
          <box-icon
            class="box-icon"
            size="1.1rem"
            color=" #fff"
            name="dish"
            type="logo"
          ></box-icon>
          <NavLink
            // onClick={(e) => closeNav(e)}
            tag={Link}
            activeClassName="active1"
            to="/food"
            onClick={RemoveTrack}
          >
            Food
          </NavLink>
        </li>
        <li class="nav-item ">
          <box-icon
            class="box-icon"
            size="1.1rem"
            color=" #fff"
            name="user"
            type="logo"
          ></box-icon>
          <NavLink
            // onClick={(e) => closeNav(e)}
            tag={Link}
            activeClassName="active1"
            to="/profile"
            onClick={RemoveTrack}
          >
            Profile
          </NavLink>
        </li>
      </ul>
      <ul class="navbar-nav text-center">
        <li>
          <a onClick={HandleLogout}>
            <button type="btn" class="btn shadow ">
              logout
            </button>
          </a>
        </li>
      </ul>
    </>
  );
};

export default UserNavLinks;
