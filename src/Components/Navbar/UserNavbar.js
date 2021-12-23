import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import UserBackButton from "../UserBackButton";
import "./Nav.css";
import UserNavLinks from "./UserNavLinks";
import UserSideNav from "./UserSideNav";
import cart from "./img/cart.png";
import FoodCart from "../User/Food/FoodCart";

const UserNavbar = () => {
  const [name, setname] = useState(localStorage.getItem("eclfullname"));

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

  // Open Navbar z
  const openNav = (e) => {
    document.getElementById("mySidenav").style.width = "300px";
  };
  const closeNav = (e) => {
    document.getElementById("mySidenav").style.width = "0";
  };

    // pay with wallet modal
    const [showremove, setShowremove] = useState(false);
    const handleCloseremove = () => setShowremove(false);
    const handleShowremove = () => setShowremove(true);
    // const [id, setid] = useState("");
  
    function workModal(token) {
      // console.log(token)
      // setid(token);
      handleShowremove();
    }
  return (
    <>
      <div className="usernav">
        <nav
          class="navbar navbar-expand-sm navbar-light fixed-top"
          id="navbar main"
        >
          <div class="container-fluid" id="logo">
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
            <Link to="/dashboard" className="navbar-brand ml-5 nav-name">
              <h5> ECLIPSE </h5>
            </Link>
            <li class="list-unstyled mr-auto ml-5">
              <UserBackButton />
            </li>

            {/* <ul class="navbar-nav ml-auto nav-flex-icons"> */}
            <li class="nav-item avatar list-unstyled ml-auto">
            <a class="" onClick={(e) => workModal()}>

              <img
                src={cart}
                class=" z-depth-0"
                alt="avatar image"
                height="35"
              />
              <span class="badge badge-danger">.</span>
              </a>
            </li>
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
                  <p> {name}</p>
                  <button class="btn btn-red" onClick={HandleLogout}>
                    Logout
                  </button>
                </div>
              </div>
            </li>
            {/* </ul> */}
          </div>
        </nav>

        <UserSideNav />
      </div>
      <FoodCart
        show={showremove}
        onHide={handleCloseremove}
        animation={false}
        // id={id}
        // title={title}
        // amount={amount}
        // priceth={priceth}
        // phone={phone}
        // address={address}
        // resname={resname}
      />
    </>
  );
};

export default UserNavbar;
