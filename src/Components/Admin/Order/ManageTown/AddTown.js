import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spinner, Alert } from "reactstrap";

const AddTown = () => {
  const [apptoken, setapptoken] = useState(process.env.REACT_APP_APPTOKEN);
  const [endpoint, setendpoint] = useState(process.env.REACT_APP_ENDPOINT);

  const [state, setstate] = useState("");
  const [town, settown] = useState("");

  const [allstates, setallstates] = useState([]);
  const [count, setcount] = useState(0);

  const [issending, setissending] = useState(false);
  const [showalert, setshowalert] = useState(false);
  const [alertt, setalert] = useState("");

  function TownUpload(e) {
    if ((state, town)) {
      setissending(true);

      const data = new FormData();
      data.append("state", state);
      data.append("town", town);
      data.append("apptoken", apptoken);

      axios
        .post(`${endpoint}/v1/admin-add-town`, data, {
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

  // Function for to call all states
  const fetchstates = () => {
    const data = {
      apptoken: apptoken,
    };
    axios
      .get(`${endpoint}/v1/get-states-all`, {
        params: data,
      })
      .then((response) => {
        if (response.data.success === false) {
          console.log(response.data);
        } else {
          setallstates(response.data);
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error.response);
        fetchstates();
      });
  };
  useEffect(() => {
    fetchstates();
  }, [count]);

  const states = allstates.map((item, i) => {
    return <option value={`${item.id}`}> {item.state} </option>;
  });
  // Function for to call all states

  return (
    <>
      <div className="add-food">
        <div className="container">
          <div className="send">
            <div className="text-center">
              <h5> ADD TOWN </h5>
            </div>
            <hr />
            <div className="form">
              <form>
                <div className="row justify-content-center">
                  <div className="col-md-10 ">
                    <select
                      className="input-style"
                      onChange={(e) => setstate(e.target.value)}
                    >
                      <option value="">Select State *</option>

                      {states}
                    </select>
                  </div>

                  <div className="col-md-10 ">
                    <label> Town: </label>

                    <div className="input-group">
                      <input
                        type="text"
                        className="input-style"
                        placeholder="town"
                        onChange={(e) => settown(e.target.value)}
                        value={town}
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
                            onClick={(e) => TownUpload(e)}
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

export default AddTown;
