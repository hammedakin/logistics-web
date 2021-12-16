import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spinner, Alert } from "reactstrap";

const AddZones = () => {
  const [apptoken, setapptoken] = useState(process.env.REACT_APP_APPTOKEN);
  const [endpoint, setendpoint] = useState(process.env.REACT_APP_ENDPOINT);

  const [name, setname] = useState("");
  const [details, setdetails] = useState("");
  const [price, setprice] = useState(Number());
  const [kg, setkg] = useState(Number());


  const [issending, setissending] = useState(false);
  const [showalert, setshowalert] = useState(false);
  const [alertt, setalert] = useState("");

  function zoneUpload(e) {
    if ((name, price, details, kg)) {
      setissending(true);

      const data = new FormData();
      data.append("name", name);
      data.append("price", price);
      data.append("details", details);
      data.append("kg", kg);
      data.append("apptoken", apptoken);

      axios
        .post(`${endpoint}/v1/admin-add-country-zones`, data, {
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
          setalert(error.name, "or Network Issue!!!");
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
      <div className="add-food">
        <div className="container">
          <div className="send">
            <div className="text-center">
              <h5> ADD ZONE </h5>
            </div>
            <hr />
            <div className="form">
              <form>
                <div className="row justify-content-center">
                <div className="col-md-10 ">
                    <select
                      className="input-style"
                      onChange={(e) => setname(e.target.value)}
                    >
                      <option value="">Select Zone *</option>
                      <option value="Zone1">Zone 1</option>
                      <option value="Zone2">Zone 2</option>
                      <option value="Zone3">Zone 3</option>
                      <option value="Zone4">Zone 4</option>
                      <option value="Zone5">Zone 5</option>
                      <option value="Zone6">Zone 6</option>
                      <option value="Zone7">Zone 7</option>
                      <option value="Zone8">Zone 8</option>

                    </select>
                  </div>

                  <div className="col-md-10 ">
                  <label> Details: </label>

                    <div className="input-group">
                  
                        <input
                        type="text"
                        className="input-style"
                        placeholder="Zone Details*"
                        onChange={(e) => setdetails(e.target.value)}
                        value={details}
                      />
                      
                    </div>
                  </div>

                  <div className="col-md-10 ">
                    <label> The price to send package to {name}: </label>

                    <div className="input-group">
                  
                        <input
                        type="number"
                        className="input-style"
                        placeholder="Price"
                        onChange={(e) => setprice(e.target.value)}
                        value={price}
                      />
                      
                    </div>
                  </div>

            
                  <div className="col-md-10 ">
                    <label> KG: </label>

                    <div className="input-group">
                  
                        <input
                        type="number"
                        className="input-style"
                        placeholder="Price *"
                        onChange={(e) => setkg(e.target.value)}
                        value={kg}
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
                            onClick={(e) => zoneUpload(e)}
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
      </div>
    </>
  );
};

export default AddZones;
