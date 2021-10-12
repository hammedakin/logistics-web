import React from "react";
import { Link } from "react-router-dom";

const DashboardHeader = () => {
  return (
    <>
      <main className="dash-header">
        <div className="">
          <div className="row justify-content-center text-center">
            <div className="col-md-10">
              <div className="welcome text-left">
                <h6> Welcome back, OluImmanuel</h6>
              </div>
              <div className="first shadow">
                <h5> Total Balance</h5>
                <h3>
                  {" "}
                  <sup>₦ </sup> 2,000,000.<sub>00</sub>
                </h3>
              </div>
            </div>
            <div className="col-md-5 col-6">
              <Link to="/dashboard/fund-account">
              <div className="second shadow ">
                <h6> Fund Account</h6>
              </div>
              </Link>
            </div>
            <div className="col-md-5 col-6">
              <div className="second shadow">
                <h6> History</h6>
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
};

export default DashboardHeader;
