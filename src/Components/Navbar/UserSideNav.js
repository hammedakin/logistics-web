import React from "react";
import { Link } from "react-router-dom";

import UserNavLinks from "./UserNavLinks";

const UserSideNav = () => {
  const closeNav = (e) => {
    document.getElementById("mySidenav").style.width = "0";
  };

  return (
    <>
      <nav class="">
        <div id="mySidenav" class="sidenav">
          <a
            href="javascript:void(0)"
            class="closebtn white-text"
            onClick={(e) => closeNav(e)}
          >
            <box-icon name="x-circle" color="white" size="1.5rem"></box-icon>{" "}
          </a>

          <UserNavLinks />

          <hr style={{ backgroundColor: "whitesmoke" }} class="m-3" />
        </div>
      </nav>
    </>
  );
};

export default UserSideNav;
