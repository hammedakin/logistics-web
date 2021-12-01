import React from "react";
import { Link } from "react-router-dom";
import img1 from "./img/Layer1.svg";
import img2 from "./img/Vector1.svg";
import img3 from "./img/Vector2.svg";

const WhatWeDo = () => {
  return (
    <>
      <section className="whatwedo">
        <div className="container">

            <div class="mb-5 text-center">
                <h4> WHAT WE DO</h4>
                </div>
          <div className="row justify-content-center">
            <div className="col-md-3">
              <div className="img shadow text-center ">
                <img src={img1} width="70%" class="" />
              </div>
              <div className="content">
                <h5> SEND PACKAGE</h5>
                <p> Ship Bulk and Single Items Locally and Internationally. </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="img shadow text-center ">
                <img src={img2} width="70%" class="" />
              </div>
              <div className="content">
                <h5> TRACK PACKAGE</h5>
                <p>Track your local and International Deliveries in Real Time.  </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="img shadow text-center ">
                <img src={img3} width="70%" class="" />
              </div>
              <div className="content">
                <h5> BUY FOOD</h5>
                <p> Order Food from your Favorite Restaurants. </p>
              </div>
            </div>
          </div>

          <div class=" view-btn mb-4 mr-auto text-center">
        <Link to="/send-package">
          <button type="button" class=" btn shadow">
            {" "}
            <strong> SEND PACKAGE </strong>{" "}
          </button>
        </Link>
      </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeDo;
