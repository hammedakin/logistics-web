import React, { useState } from "react";
import axios from "axios";
import { Spinner, Alert } from "reactstrap";
import img from "./img/bicycle.png";
import Navbar from '../Navbar/Navbar'
import { Link } from "react-router-dom";

const UserResetPassword = () => {
  const [apptoken, setapptoken] = useState(process.env.REACT_APP_APPTOKEN);
  const [endpoint, setendpoint] = useState(process.env.REACT_APP_ENDPOINT);

  const [mail, setmail] = useState("");

  const [issending, setissending] = useState(false);
  const [showalert, setshowalert] = useState(false);
  const [alert, setalert] = useState("");

  function Reset(e) {
    if (mail) {
      setissending(true);

      const data = new FormData();
      data.append("mail", mail);
      data.append("apptoken", apptoken);

      axios
        .post(`${endpoint}/v1/user-reset-password`, data, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data);

          if (res.data.success === true) {
            setshowalert(true);
            setmail(res.data.mail);
            setalert(res.data.message);
            setissending(false);
          } else {
            setshowalert(true);
            setalert(res.data.message, "error");
            setissending(false);
          }
        })
        .catch((error) => {
          console.log(error.name);
          setshowalert(true);
          setalert("Check your Network Connection!!!");
          setissending(false);
        });
    } else {
      setshowalert(true);
      setalert("Empty fields, Check form again!");
      setissending(false);
    }
    e.preventDefault();
  }

  return (
    <>
    <Navbar />
      <main className="login animated fadeInRight">
        <div className="row">
          {/* Reset Form  */}
          <div className="col-md-6 ">
            <div className="">
              <div className="col-md-8 ml-auto mr-auto mt-5">
                <div className="mb-4">
                  <h5 className=""> Reset your Password</h5>
                  <h6>Enter your email address to reset your password</h6>
                </div>

                <div className="form">
                  <form>
                    <div className="row justify-content-center">
                      <div className="col-md-12 ">
                        <label> Email Address: </label>

                        <div className="input-group">
                          <input
                            type="text"
                            className=" input-style"
                            placeholder="example@email.com"
                            onChange={(e) => setmail(e.target.value)}
                            value={mail}
                            required
                          />
                        </div>
                      </div>

                      <div class="col-md-12  mx-auto text-center">
                        {showalert ? (
                          <>
                            <Alert color="success">{alert}</Alert>
                          </>
                        ) : (
                          <></>
                        )}
                        <div class="mb-4">
                          {issending ? (
                            <>
                              <button
                                type="button"
                                class="btn shadow waves-effect"
                                action="submit"
                              >
                                {" "}
                                <strong>
                                  {" "}
                                  sending{" "}
                                  <Spinner color="light" size="0.1rem" />{" "}
                                </strong>{" "}
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                type="button"
                                class="btn shadow waves-effect"
                                action="submit"
                                onClick={(e) => Reset(e)}
                              >
                                {" "}
                                <strong> submit </strong>{" "}
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="text-center">
                        <h6>
                          {" "}
                          Reset Password Email Sent?{" "}
                          <Link to="/login"> Sign In </Link>
                        </h6>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* Auth Form  */}

          <div className="col-md-6 hide-on-small">
            <img src={img} width="100%" />
          </div>
        </div>
      </main>
    </>
  );
};

export default UserResetPassword;
