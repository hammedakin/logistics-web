import React, { useState } from "react";
import axios from "axios";
import { Spinner, Alert } from "reactstrap";
import { useHistory } from "react-router";
import img from "./img/bicycle.png";
// import { Link } from "react-router-dom";

const UserAuth = () => {
  const [token, settoken] = useState("");

  const [issending, setissending] = useState(false);
  const [showalert, setshowalert] = useState(false);
  const [alert, setalert] = useState("");

  let history = useHistory()

  function Auth(e) {
    if (token) {
      setissending(true);

      const data = new FormData();
      data.append("token", token);
      data.append("apptoken", "T9H1E6KUYM");

      axios
        .post(`https://test.api.eclipse.com.ng/v1/activate-user`, data, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data);

          if (res.data.success === true) {
            setshowalert(true);
            settoken(res.data.token);
            setalert(res.data.message);
            setissending(false);
            history.push("/login")
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
      <main className="login animated fadeInRight">
        <div className="row">
          {/* Auth Form  */}
          <div className="col-md-6 ">
            <div className="">
              <div className="col-md-8 ml-auto mr-auto mt-5">
                <div className="mb-4">
                  <h5 className=""> Authenticate your Account</h5>
                  <h6>Check your email for Authentication Code</h6>
                </div>

                <div className="form">
                  <form>
                    <div className="row justify-content-center">
                      <div className="col-md-12 ">
                        <label> Authentication Code </label>

                        <div className="input-group">
                          <input
                            type="text"
                            className=" input-style"
                            placeholder="Enter Auth Code"
                            onChange={(e) => settoken(e.target.value)}
                            value={token}
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
                                  Authenticating{" "}
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
                                onClick={(e) => Auth(e)}
                              >
                                {" "}
                                <strong> submit </strong>{" "}
                              </button>
                            </>
                          )}
                        </div>
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

export default UserAuth;
