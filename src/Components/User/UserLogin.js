import React from "react";
import { Link } from "react-router-dom";
import img from "./img/bicycle.png";

const UserLogin = () => {
  return (
    <>
      <main className="login animated fadeInRight">
        <div className="row">
        

          {/* Login Form  */}
          <div className="col-md-6 ">
            <div className="">
              <div className="col-md-8 ml-auto mr-auto mt-5">
                <div className="mb-4">
                <h6 className=""> Welcome back </h6>
                <h5 className=""> Login to your account</h5>
                </div>
              

                <div className="form">
                  <form>
                    <div className="row justify-content-center">
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

                      <div className="ml-auto">
                     <h6> <Link to="">Forget Password?</Link> </h6>     
                     </div>

                      <div class="col-md-12  mx-auto text-center">
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
                        <h6> Dont have an account? <Link to="/register"> Join free today </Link>
                        </h6>
                     </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* Login Form  */}

          <div className="col-md-6 hide-on-small">
            <img src={img} width="100%" />
          </div>
        </div>
      </main>
    </>
  );
};

export default UserLogin;
