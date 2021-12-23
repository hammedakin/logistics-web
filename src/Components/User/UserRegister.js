import React, { useState } from "react";
import axios from "axios";
import { Spinner, Alert } from "reactstrap";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Navbar from '../Navbar/Navbar'
import img from "./img/truck.png";

const UserRegister = (props) => {
  const [apptoken, setapptoken] = useState(process.env.REACT_APP_APPTOKEN);
  const [endpoint, setendpoint] = useState(process.env.REACT_APP_ENDPOINT);

  const [name, setname] = useState("");
  const [pword, setpword] = useState("");
  const [mail, setmail] = useState("");
  const [phone, setphone] = useState("");
  const [state, setstate] = useState("");
  const [town, settown] = useState("");
  const [area, setarea] = useState("");
  const [refcode, setrefcode] = useState(props.match.params.id);
  const [issending, setissending] = useState(false);
  const [showalert, setshowalert] = useState(false);
  const [alert, setalert] = useState("");

  let history = useHistory() 


  function Register(e) {
    if ((name, pword, mail, phone, state, town, area)) {
      setissending(true);
      const data = new FormData();
      data.append("name", name);
      data.append("pword", pword);
      data.append("mail", mail);
      data.append("phone", phone);
      data.append("state", state);
      data.append("town", town);
      data.append("area", area);
      data.append("sponsor", refcode);
      data.append("apptoken", apptoken);

      axios
        .post(`${endpoint}/v1/register`, data, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data);

          if (res.data.success === true) {
            setshowalert(true);
            setalert(res.data.message);
            setissending(false);
          history.push("/auth")
          } else {
            setshowalert(true);
            setalert(res.data.message);
            setissending(false);
          }
        })
        .catch((error) => {
          console.log(error.name);
          setshowalert(true);
          setalert(error.name);
          setissending(false);
        });
    } else {
      setshowalert(true);
      setalert("Empty fields");
      setissending(false);
    }
    e.preventDefault();
  }

  
function myInput() {
  var x = document.getElementById("security");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password"
  }
}

  return (
    <>
    <Navbar />
      <main className="login animated fadeInLeft">
        <div className="row">
          <div className="col-md-6 hide-on-small ">
            <div className="login-img">

            <img src={img} width="100%" />
          </div>
          </div>

          {/* Register Form  */}
          <div className="col-md-6 login-form">
            <div className="">
              <div className="col-md-8 ml-auto mr-auto mt-5">
                <div className="mb-4">
                  <h6 className=""> Welcome </h6>
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
                            onChange={(e) => setname(e.target.value)}
                            value={name}
                            required
                          />
                        </div>
                      </div>

                  
                      <div className="col-md-12 ">
                        <label> Phone Number </label>

                        <div className="input-group">
                          <input
                            type="number"
                            className=" input-style"
                            placeholder="08012345678"
                            onChange={(e) => setphone(e.target.value)}
                            value={phone}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-12 ">
                        <label> State </label>

                        <div className="input-group">
                          <input
                            type="text"
                            className=" input-style"
                            placeholder="Enter State"
                            onChange={(e) => setstate(e.target.value)}
                            value={state}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-12 ">
                        <label> Town </label>

                        <div className="input-group">
                          <input
                            type="text"
                            className=" input-style"
                            placeholder="Enter Town"
                            onChange={(e) => settown(e.target.value)}
                            value={town}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-12 ">
                        <label> Area </label>

                        <div className="input-group">
                          <input
                            type="text"
                            className=" input-style"
                            placeholder="Enter Area"
                            onChange={(e) => setarea(e.target.value)}
                            value={area}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-12 ">
                        <label> Referral Code (Optional)</label>

                        <div className="input-group">
                          <input
                            type="text"
                            className=" input-style"
                            placeholder="Enter Ref Code"
                            onChange={(e) => setrefcode(e.target.value)}
                            value={refcode}
                            required
                            disabled
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
                            onChange={(e) => setmail(e.target.value)}
                            value={mail}
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
                            id="security"
                            placeholder="Enter Password"
                            onChange={(e) => setpword(e.target.value)}
                            value={pword}
                            required
                          />
                          <a class="bi bi-eye-slash bi-eye toggle-eye" id="togglePassword" onClick={myInput}>
                           <box-icon type='solid' name='show' id="eye"></box-icon>
                            </a>
                        </div>
                      </div>

                      <div class="col-md-12 text-center">
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
                                  Logging In <Spinner color="light" />{" "}
                                </strong>{" "}
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                type="button"
                                class="btn shadow waves-effect"
                                action="submit"
                          onClick={(e) => Register(e)}
                              >
                                {" "}
                                <strong> submit </strong>{" "}
                              </button>
                            </>
                          )}
                        </div>
                      </div>

                      <div className="text-center mb-5">
                        <h6>
                          {" "}
                          Already have an account?{" "}
                          <Link to="/login"> Sign In </Link>
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
