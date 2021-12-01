import React from "react";
import { Link } from "react-router-dom";

const NavButton = () => {
  return (
    <>
      <div className="nav-button">
      <div className="my-4">
          <h5> Orders </h5>
          </div>        <div className="row">
          <div className="col-md-4">
            <Link to="/admin/order">
              <div className="first shadow ">All Orders</div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/admin/order">
              <div className="first shadow ">Create Order</div>
            </Link>
          </div>
          <div className="col-md-4">
            {/* <Link to="/admin"> */}
              <div className="first shadow ">Manage Countries</div>
            {/* </Link> */}
          </div>
          <div className="col-md-4">
            {/* <Link to="/admin"> */}
              <div className="first shadow ">Manage States</div>
            {/* </Link> */}
          </div>
          <div className="col-md-4">
            {/* <Link to="/admin"> */}
              <div className="first shadow ">Manage Towns</div>
            {/* </Link> */}
          </div>
          </div>
          <hr/>
          <div className="my-4">
          <h5> Food </h5>
          </div>
        <div className="row">

          <div className="col-md-4">
            <Link to="/admin/addfood">
              <div className="first shadow ">Upload / View Food</div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/admin/order">
              <div className="first shadow ">Food Restaurant</div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/admin/order">
              <div className="first shadow ">All Food Order</div>
            </Link>
          </div>
     
          
          
          
        </div>
      </div>
    </>
  );
};

export default NavButton;
