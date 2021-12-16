import React from "react";
import { Link } from "react-router-dom";
import foodcart from "../img/foodcart.svg";
import admin from "../img/admin.svg";
import cart from "../img/cart.svg";
import food from "../img/food.svg";
import history from "../img/history.svg";
import truck from "../img/truck.svg";
import plus from "../img/plus.svg";
import world from "../img/world.svg";
import users from "../img/users.svg";
import setting from "../img/setting.svg";
import track from "../img/track.svg";
import fran from "../img/fran.svg";

const NavButton = () => {
  return (
    <>
      <div className="nav-button">
        <div className="my-4">
          <h5> Orders </h5>
        </div>
        <div className="row">
          <div className="col-md-4 ">
            <Link to="/admin/order">
              <div className="first navb shadow ">
                <img src={truck} width="30px" />
                <h6> All Orders </h6>
              </div>
            </Link>
          </div>
          <div className="col-md-4 ">
            <Link to="/admin/track">
              <div className="first navb shadow ">
                <img src={track} width="30px" />
                <h6> Track Orders </h6>
              </div>
            </Link>
          </div>
          <div className="col-md-4 ">
            <Link to="/admin/create-order">
            <div className="first navb shadow ">
              <img src={plus} width="30px" />
              <h6> Create Orders </h6>
            </div>
            </Link>
          </div>
          <div className="col-md-4 ">
            <Link to="/admin/countries">
            <div className="first navb shadow ">
              <img src={world} width="30px" />
              <h6> Manage Countries </h6>
            </div>
            </Link>
          </div>
          <div className="col-md-4 ">
            <Link to="/admin/states">
            <div className="first navb shadow ">
              <img src={world} width="30px" />
              <h6> Manage States </h6>
            </div>
            </Link>
          </div>
          <div className="col-md-4 ">
            <Link to="/admin/town">
            <div className="first navb shadow ">
              <img src={world} width="30px" />
              <h6> Manage Towns </h6>
            </div>
            </Link>
          </div>
        </div>
        <hr />
        <div className="my-4">
          <h5> Food </h5>
        </div>
        <div className="row">
        <div className="col-md-4 ">
            <Link to="/admin/food-order">
            <div className="first navb shadow ">
              <img src={cart} width="30px" />
              <h6> All Food Orders </h6>
            </div>
            </Link>
          </div>
          <div className="col-md-4 ">
            <Link to="/admin/food">
              <div className="first navb shadow ">
                <img src={food} width="30px" />
                <h6> Upload / View Food </h6>
              </div>
            </Link>
          </div>
          <div className="col-md-4 ">
            <Link to="/admin/restaurant">
              <div className="first navb shadow ">
                <img src={foodcart} width="30px" />
                <h6> Food Restaurant </h6>
              </div>
            </Link>
          </div>
          
        </div>
        <hr />
        <div className="my-4">
          <h5> Account </h5>
        </div>
        <div className="row">
          <div className="col-md-4 ">
            <Link to="/admin/userlist">
              <div className="first navb shadow ">
                <img src={users} width="30px" />
                <h6> User List </h6>
              </div>
            </Link>
          </div>
          <div className="col-md-4 ">
            <Link to="/admin/franchise">
              <div className="first navb shadow ">
                <img src={fran} width="30px" />
                <h6> Franchise </h6>
              </div>
            </Link>
          </div>
          <div className="col-md-4 ">
            <Link to="/admin/transactions">
              <div className="first navb shadow ">
                <img src={history} width="30px" />
                <h6> Transaction Log </h6>
              </div>
            </Link>
          </div>
          <div className="col-md-4 ">
            <Link to="/admin/setting">
            <div className="first navb shadow ">
              <img src={setting} width="30px" />
              <h6> Update Setting</h6>
            </div>
            </Link>
          </div>
          <div className="col-md-4 ">
            <Link to="/admin/account">
            <div className="first navb shadow ">
              <img src={admin} width="30px" />
              <h6> Account Setting</h6>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavButton;
