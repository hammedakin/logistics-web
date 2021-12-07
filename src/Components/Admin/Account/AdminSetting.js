import React, { useState } from "react";
import axios from "axios";
import { Spinner, Alert } from "reactstrap";
import AdminNavbar from "../../Navbar/AdminNavbar";

const AdminSetting = () => {
  const [apptoken, setapptoken] = useState(process.env.REACT_APP_APPTOKEN);
  const [endpoint, setendpoint] = useState(process.env.REACT_APP_ENDPOINT);

  const [pword, setpword] = useState("");
  const [npword, setnpword] = useState("");
  const [cnpword, setcnpword] = useState("");
  const [admintoken, setadmintoken] = useState(localStorage.getItem("ecladmintoken"));
  const [adminname, setadminname] = useState(localStorage.getItem("ecladminname"));
  const [adminmail, setadminmail] = useState(localStorage.getItem("ecladminmail"));

  const [issending, setissending] = useState(false);
  const [showalert, setshowalert] = useState(false);
  const [alertt, setalert] = useState("");

  function ChangePword(e) {
    if ((pword, npword, cnpword, admintoken)) {
      setissending(true);

      const data = new FormData();
      data.append("pword", pword);
      data.append("npword", npword);
      data.append("cnpword", cnpword);
      data.append("admintoken", admintoken);
      data.append("apptoken", apptoken);

      axios
        .post(`${endpoint}/v1/admin-change-password`, data, {
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
            window.location.reload(true);
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

  return (
    <>
      <AdminNavbar />
      <section className="add-food">
        <div className="container">
          <div className="text-center">
            <h5> ADMIN SETTING</h5>
          </div>
          
          <div className="send">
            <div className="text-center">
              <h5> Account Details </h5>
            </div>
            <hr />
            <div className="form">
              <form>
                <div className="row justify-content-center">
                  <div className="col-md-10 ">
                  <label> Name: </label>

                    <div className="input-group">
                      <input
                        type="text"
                        className=" input-style"
                        placeholder="Name *"
                        value={adminname}
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
                        value={adminmail}
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
                        type="text"
                        className=" input-style"
                        placeholder="Old Password *"
                        onChange={(e) => setpword(e.target.value)}
                        value={pword}
                      />
                    </div>
                  </div>

                  <div className="col-md-10 ">
                    {/* <label> Name </label> */}

                    <div className="input-group">
                      <input
                        type="text"
                        className="input-style"
                        placeholder="New Password *"
                        onChange={(e) => setnpword(e.target.value)}
                        value={npword}
                      />
                    </div>
                  </div>

                  <div className="col-md-10 ">
                    {/* <label> Name </label> */}

                    <div className="input-group">
                      <input
                        type="text"
                        className=" input-style"
                        placeholder="Confirm New Password *"
                        onChange={(e) => setcnpword(e.target.value)}
                        value={cnpword}
                      />
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
                            class="btn btn-dark shadow waves-effect"
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
                            class="btn btn-dark shadow waves-effect"
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
    </>
  );
};

export default AdminSetting;
