import React, { useState } from "react";
import axios from "axios";
import { Spinner, Alert } from "reactstrap";
import { Link } from "react-router-dom";

import img from "./img/truck.png";

const UserRegister = () => {


  return (
    <>
      <main className="login animated fadeInLeft">
        <div className="row">
          <div className="col-md-6 hide-on-small">
            <img src={img} width="100%" />
          </div>

          {/* Register Form  */}
          <div className="col-md-6 ">
            <div className="">
              <div className="col-md-8 ml-auto mr-auto mt-5">
                <div className="mb-4">
                <h6 className=""> Welcome  </h6>
                <h5 className=""> Create your account</h5>
                </div>
              

                <div className="form">
                  <form>
                    <div className="row justify-content-center">

                    <div className="col-md-12 ">
                        <label> Name </label>

                        <div className="input-group">
                          <input
                            type="text"
                            className=" input-style"
                            placeholder="Enter Full Name"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-12 ">
                        <label> E-mail </label>

                        <div className="input-group">
                          <input
                            type="email"
                            className=" input-style"
                            placeholder="Enter e-mail"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-12 ">
                        <label> Password </label>

                        <div className="input-group">
                          <input
                            type="password"
                            className=" input-style"
                            placeholder="Enter Password"
                            required
                          />
                        </div>
                      </div>

                      <div class="col-md-12 text-center">
                        <div class="mb-4">
                          <button
                            type="button"
                            class="btn shadow waves-effect"
                            action="submit"
                          >
                            {" "}
                            <strong> submit </strong>{" "}
                          </button>
                        </div>
                      </div>

                      <div className="text-center">
                        <h6> Already have an account? <Link to="/login"> Sign In </Link>
                        </h6>
                     </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* Register Form  */}
        </div>
      </main>
    </>
  );
};

export default UserRegister;
