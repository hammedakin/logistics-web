import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const closeNav = (e) => {
  document.getElementById("mySidenav").style.width = "0";
};


const UserNavLinks = () => {
    return ( 

        <>

<ul class="navbar-nav ml-auto mr-auto text-center animated fadeInUp">


            <li class="nav-item" >
              <NavLink
        // onClick={(e) => closeNav(e)}
              tag={Link} activeClassName="active1 " to="/dashboard">
                HOME
              </NavLink>
            </li>

            <li class="nav-item">
              <NavLink
        // onClick={(e) => closeNav(e)}
              tag={Link} activeClassName="active1" to="/gh">
                HOME
              </NavLink>
            </li>

            <li class="nav-item ">
              <NavLink
        // onClick={(e) => closeNav(e)}
              tag={Link} activeClassName="active1" to="/g">
                HOME
              </NavLink>
            </li>

          </ul>
          <ul class="navbar-nav text-center">
            <Link to="/contact"
        // onClick={(e) => closeNav(e)}
        >
            <li>
              <button type="btn" class="btn shadow"
              >
                logout
          </button>
            </li>
            </Link> 
          </ul>
        </>
     );
}
 
export default UserNavLinks;