import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spinner, Alert } from "reactstrap";

const AddCountries = () => {
  const [apptoken, setapptoken] = useState(process.env.REACT_APP_APPTOKEN);
  const [endpoint, setendpoint] = useState(process.env.REACT_APP_ENDPOINT);

  const [country, setcountry] = useState("");
  const [zoneid, setzoneid] = useState("");

  const [allzones, setallzones] = useState([]);
  const [count, setcount] = useState(0);

  const [issending, setissending] = useState(false);
  const [showalert, setshowalert] = useState(false);
  const [alertt, setalert] = useState("");

  function countryUpload(e) {
    if ((country, zoneid)) {
      setissending(true);

      const data = new FormData();
      data.append("country", country);
      data.append("zoneid", zoneid);

      data.append("apptoken", apptoken);

      axios
        .post(`${endpoint}/v1/admin-add-country`, data, {
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


   // Function for to call all zones
   const fetchzones = () => {
    const data = {
      apptoken: apptoken,
    };
    axios
      .get(`${endpoint}/v1/admin-list-zones`, {
        params: data,
      })
      .then((response) => {
        if (response.data.success === false) {
          console.log(response.data);
        } else {
          setallzones(response.data);
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error.response);
        fetchzones();
      });
  };
  useEffect(() => {
    fetchzones();
  }, [count]);

  const zones = allzones.map((item, i) => {
    return <option value={`${item.name}`}> {item.name} </option>;
  });
  // Function for to call all states
  return (
    <>
      <div className="add-food">
        <div className="container">
          <div className="send">
            <div className="text-center">
              <h5> ADD COUNTRY </h5>
            </div>
            <hr />
            <div className="form">
              <form>
                <div className="row justify-content-center">
                  <div className="col-md-10 ">
                    <label> Country: </label>

                    <div className="input-group">
                      <input
                        type="text"
                        className=" input-style"
                        placeholder="country name *"
                        onChange={(e) => setcountry(e.target.value)}
                        value={country}
                      />
                    </div>
                  </div>

                  <div className="col-md-10 ">
                    <select
                      className="input-style"
                      onChange={(e) => setzoneid(e.target.value)}
                    >
                      <option value="">Select Zone *</option>

                      {zones}
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
                            onClick={(e) => countryUpload(e)}
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

export default AddCountries;
