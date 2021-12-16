import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spinner, Alert } from "reactstrap";
import AdminNavbar from "../../Navbar/AdminNavbar";

const AdminTrack = () => {
  const [apptoken, setapptoken] = useState(process.env.REACT_APP_APPTOKEN);
  const [endpoint, setendpoint] = useState(process.env.REACT_APP_ENDPOINT);

  const [admintoken, setadmintoken] = useState(localStorage.getItem('ecladmintoken'));
  const [trackid, settrackid] = useState("");
  const [log, setlog] = useState("");

  const [issending, setissending] = useState(false);
  const [showalert, setshowalert] = useState(false);
  const [alertt, setalert] = useState("");

  function TrackOrder(e) {
    if ((admintoken, trackid, log)) {
      setissending(true);

      const data = new FormData();
      data.append("admintoken", admintoken);
      data.append("trackid", trackid);
      data.append("log", log);

      data.append("apptoken", apptoken);

      axios
        .post(`${endpoint}/v1/admin-update-order-timeline`, data, {
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


  return (
    <>
    <AdminNavbar />
      <section className="add-food">
        <div className="container">
          <div className="send">
            <div className="text-center">
              <h5> UPDATE TRACKING TIMELINE </h5>
            </div>
            <hr />
            <div className="form">
              <form>
                <div className="row justify-content-center">
                  <div className="col-md-10 ">
                    <label> Trackid: </label>

                    <div className="input-group">
                      <input
                        type="text"
                        className=" input-style"
                        placeholder="trackid *"
                        onChange={(e) => settrackid(e.target.value)}
                        value={trackid}
                      />
                    </div>
                  </div>

                  <div className="col-md-10 ">
                    <select
                      className="input-style"
                      onChange={(e) => setlog(e.target.value)}
                    >
                      <option value="">Select Update *</option>
                      <option value="Enroute Pick-Up">Enroute Pick-Up </option>
                      <option value="Package Picked Up">Package Picked Up </option>
                      <option value="Package at Eclipse Hub for Dispatch">Package at Eclipse Hub for Dispatch </option>
                      <option value="Package In Transit">Package In Transit </option>
                      <option value="Package arrived at Delivery Station">Package arrived at Delivery Station </option>
                      <option value="Package with Delivery Courier">Package with Delivery Courier </option>
                      <option value="Delivered"> Delivered</option>

                    </select>
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
                              updating <Spinner color="light" />
                            </strong>
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            type="button"
                            class="btn btn-dark shadow waves-effect"
                            action="submit"
                            onClick={(e) => TrackOrder(e)}
                          >
                            <strong> UPDATE </strong>
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

export default AdminTrack;
