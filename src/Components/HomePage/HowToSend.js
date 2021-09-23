import React from "react";
import { Link } from "react-router-dom";
import img1 from "./img/Vector3.svg";
import img2 from "./img/Vector4.svg";
import img3 from "./img/Vector5.svg";

const HowToSend = () => {
  return (
    <>
      <section className="howtosend">
        <div className="container">
          <div class="mb-5 text-center">
            <h4> HOW TO SEND PACKAGE</h4>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-3">
              <div className="img text-center card-img">
                <img src={img1} width="70%" class="h-100" />
              </div>
              <div className="content">
                <p> Fill the delivery form</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="img text-center card-img">
                <img src={img2} width="70%" class="h-100" />
              </div>
              <div className="content">
                <p> Pay the stated amount </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="img text-center card-img">
                <img src={img3} width="70%" class="h-100" />
              </div>
              <div className="content">
                <p> Track packpage </p>
              </div>
            </div>
          </div>

          <div class=" view-btn mb-4 mr-auto text-center">
        <Link to="/send-package">
          <button type="button" class=" btn">
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

export default HowToSend;
