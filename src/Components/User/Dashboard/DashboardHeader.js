import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AcctBal from "./AcctBal";
import { useHistory } from "react-router";

const DashboardHeader = () => {
  const [name, setname] = useState(localStorage.getItem("eclfullname"));
  let history = useHistory();

  return (
    <>
      <main className="dash-header">
        <div className="">
          <div className="row justify-content-center text-center">
            <div className="col-md-10">
              <div className="welcome shadow">
                <div className="first text-left">
                  <h6>
                    {" "}
                    Welcome, <span> {name} </span> 😃{" "}
                  </h6>
                </div>
                <div className="balance">
                  <h5> Total Balance:</h5>

                  <AcctBal />
                </div>
              </div>
            </div>
            <div className="col-md-3 col-5">
              <Link to="/dashboard/fund-account">
                <div className="third ">
                  <box-icon
                    class="box-icon"
                    size="1.6rem"
                    color=" #096b00"
                    name="plus-circle"
                    type="logo"
                  ></box-icon>
                  <h6> Fund Account</h6>
                </div>
              </Link>
            </div>
            <div className="col-md-3 col">
              <Link to="/dashboard">
                <div className="third">
                  <box-icon
                    class="box-icon"
                    size="1.6rem"
                    color=" #096b00"
                    name="bookmark-alt"
                    type="logo"
                  ></box-icon>
                  <h6>History</h6>
                </div>
              </Link>
            </div>

            <div className="col-md-3 col">
              <a href="https://test.eclipse.com.ng/track">
                <div className="third">
                  <box-icon
                    class="box-icon"
                    size="1.6rem"
                    color=" #096b00"
                    name="paper-plane"
                    type="logo"
                  ></box-icon>
                  <h6>Track</h6>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DashboardHeader;
