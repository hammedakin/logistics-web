import React, { useState } from "react";
import axios from "axios";
import { Spinner, Alert } from "reactstrap";
import UserNavbar from "../../Components/Navbar/UserNavbar";
import { Link } from "react-router-dom";

const UserSettings = () => {
  const [apptoken, setapptoken] = useState(process.env.REACT_APP_APPTOKEN);
  const [endpoint, setendpoint] = useState(process.env.REACT_APP_ENDPOINT);

  const [pword, setpword] = useState("");
  const [npword, setnpword] = useState("");
  const [cnpword, setcnpword] = useState("");
  const [username, setusername] = useState(localStorage.getItem("eclfullname"));
  const [usermail, setusermail] = useState(localStorage.getItem("eclemail"));
  const [userphone, setuserphone] = useState(localStorage.getItem("eclphone"));
  const [usertoken, setusertoken] = useState(
    localStorage.getItem("eclusertoken")
  );
  const [refcode, setrefcode] = useState(localStorage.getItem("eclrefcode"));

  const [issending, setissending] = useState(false);
  const [showalert, setshowalert] = useState(false);
  const [alertt, setalert] = useState("");

  function ChangePword(e) {
    if ((pword, npword, cnpword, usertoken)) {
      setissending(true);

      const data = new FormData();
      data.append("opword", pword);
      data.append("npword", npword);
      data.append("cnpword", cnpword);
      data.append("usertoken", usertoken);
      data.append("apptoken", apptoken);

      axios
        .post(`${endpoint}/v1/user-change-password`, data, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data);

          if (res.data.success === true) {
            setshowalert(true);
            resetForm();
            setalert(res.data.message);
            setissending(false);
            // window.location.reload(true);
            console.log(res.data);
          } else {
            setshowalert(true);
            setalert(res.data.message, "error");
            setissending(false);
            console.log(res.data);
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

  function resetForm() {
    setpword("");
    setnpword("");
    setcnpword("");
  }

  function myInput() {
    var x = document.getElementById("security");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  function myInput1() {
    var x = document.getElementById("security1");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  function myInput2() {
    var x = document.getElementById("security2");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  return (
    <>
      <UserNavbar />
      <div className="send-package">
        <section className="add-food settings">
          <div className="container">
            <div className="text-center">
              <h5> ACCOUNT SETTING</h5>
            </div>
            <div className="send">
              <div className="text-center">
                <h5> Account Details </h5>
              </div>
              <hr />
              <div className="form">
                <Alert color="warning" className="text-center">
                  Referral Link:{" "}
                  <Link to={`/ref/${refcode}`} target="_blank">
                    eclipse.com.ng/ref/{refcode}
                  </Link>
                </Alert>
                <form>
                  <div className="row justify-content-center">
                    <div className="col-md-10 ">
                      <label> Name: </label>

                      <div className="input-group">
                        <input
                          type="text"
                          className=" input-style"
                          placeholder="Name *"
                          value={username}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="col-md-10 ">
                      <label> Phone: </label>

                      <div className="input-group">
                        <input
                          type="text"
                          className=" input-style"
                          placeholder="Name *"
                          value={userphone}
                          disabled
                        />
                      </div>
                    </div>

                    <div className="col-md-10 ">
                      <label> Email: </label>

                      <div className="input-group">
                        <input
                          type="text"
                          className="input-style"
                          placeholder="Email *"
                          value={usermail}
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="send mt-1">
              <div className="text-center">
                <h5> Change Password </h5>
              </div>
              <hr />
              <div className="form">
                <form>
                  <div className="row justify-content-center">
                    <div className="col-md-10 ">
                      {/* <label> Name </label> */}

                      <div className="input-group">
                        <input
                          type="password"
                          className=" input-style"
                          id="security"
                          placeholder="Old Password *"
                          onChange={(e) => setpword(e.target.value)}
                          value={pword}
                        />
                        <a
                          class="bi bi-eye-slash bi-eye toggle-eye"
                          id="togglePassword"
                          onClick={myInput}
                        >
                          <box-icon
                            type="solid"
                            name="show"
                            id="eye"
                          ></box-icon>
                        </a>
                      </div>
                    </div>

                    <div className="col-md-10 ">
                      {/* <label> Name </label> */}

                      <div className="input-group">
                        <input
                          type="password"
                          className="input-style"
                          id="security1"
                          placeholder="New Password *"
                          onChange={(e) => setnpword(e.target.value)}
                          value={npword}
                        />
                        <a
                          class="bi bi-eye-slash bi-eye toggle-eye"
                          id="togglePassword"
                          onClick={myInput1}
                        >
                          <box-icon
                            type="solid"
                            name="show"
                            id="eye"
                          ></box-icon>
                        </a>
                      </div>
                    </div>

                    <div className="col-md-10 ">
                      {/* <label> Name </label> */}

                      <div className="input-group">
                        <input
                          type="password"
                          className=" input-style"
                          id="security2"
                          placeholder="Confirm New Password *"
                          onChange={(e) => setcnpword(e.target.value)}
                          value={cnpword}
                        />
                        <a
                          class="bi bi-eye-slash bi-eye toggle-eye"
                          id="togglePassword"
                          onClick={myInput2}
                        >
                          <box-icon
                            type="solid"
                            name="show"
                            id="eye"
                          ></box-icon>
                        </a>
                      </div>
                    </div>

                    <div class="col-md-10  mx-auto text-center">
                      {showalert ? (
                        <>
                          <Alert color="success">{alertt}</Alert>
                        </>
                      ) : (
                        <></>
                      )}
                      <div class="user-btn mb-4 mr-auto text-center">
                        {issending ? (
                          <>
                            <button
                              type="button"
                              class="btn shadow waves-effect"
                              action="submit"
                            >
                              <strong>
                                sending <Spinner color="light" />
                              </strong>
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              type="button"
                              class="btn  shadow waves-effect"
                              action="submit"
                              onClick={(e) => ChangePword(e)}
                            >
                              <strong> submit </strong>
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <hr />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default UserSettings;
