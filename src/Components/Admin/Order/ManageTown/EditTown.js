import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spinner, Alert } from "reactstrap";
import AdminNavbar from "../../../Navbar/AdminNavbar";


const EditTown = (props) => {
  const [apptoken, setapptoken] = useState(process.env.REACT_APP_APPTOKEN);
  const [endpoint, setendpoint] = useState(process.env.REACT_APP_ENDPOINT);

  const [townname, settownname] = useState("");
  const [townid, settownid] = useState(props.match.params.id);

  const [issending, setissending] = useState(false);
  const [showalert, setshowalert] = useState(false);
  const [alertt, setalert] = useState("");

  function TownEdit(e) {
    if ((townname, townid)) {
      setissending(true);

      const data = new FormData();
      data.append("townid", townid);
      data.append("townname", townname);
      data.append("apptoken", apptoken);

      axios
        .post(`${endpoint}/v1/admin-edit-town`, data, {
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
  console.log(props)

  return (
    <>
    <AdminNavbar />
      <section className="add-food">
        <div className="container">
          <div className="send">
            <div className="text-center">
              <h5> EDIT TOWN - <span className="grey-text">{townid}</span> </h5>
            </div>
            <hr />
            <div className="form">
              <form>
                <div className="row justify-content-center">
                  <div className="col-md-10 ">
                    <label> Town: </label>

                    <div className="input-group">
                      <input
                        type="text"
                        className=" input-style"
                        placeholder="Town Name *"
                        onChange={(e) => settownname(e.target.value)}
                        value={townname}
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
                              adding <Spinner color="light" />
                            </strong>
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            type="button"
                            class="btn btn-dark shadow waves-effect"
                            action="submit"
                            onClick={(e) => TownEdit(e)}
                          >
                            <strong> ADD </strong>
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

export default EditTown;
