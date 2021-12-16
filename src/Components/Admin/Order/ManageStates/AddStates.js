import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spinner, Alert } from "reactstrap";

const AddStates = () => {
  const [apptoken, setapptoken] = useState(process.env.REACT_APP_APPTOKEN);
  const [endpoint, setendpoint] = useState(process.env.REACT_APP_ENDPOINT);

  const [state, setstate] = useState("");
  const [price, setprice] = useState(Number());
  const [price_kg, setprice_kg] = useState(Number());
  const [price_express, setprice_express] = useState(Number());


  const [issending, setissending] = useState(false);
  const [showalert, setshowalert] = useState(false);
  const [alertt, setalert] = useState("");

  function StatesUpload(e) {
    if ((state, price, price_kg, price_express)) {
      setissending(true);

      const data = new FormData();
      data.append("state", state);
      data.append("price", price);
      data.append("price_kg", price_kg);
      data.append("price_express", price_express);
      data.append("apptoken", apptoken);

      axios
        .post(`${endpoint}/v1/admin-add-states`, data, {
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

  return (
    <>
      <div className="add-food">
        <div className="container">
          <div className="send">
            <div className="text-center">
              <h5> ADD STATE </h5>
            </div>
            <hr />
            <div className="form">
              <form>
                <div className="row justify-content-center">
                  <div className="col-md-10 ">
                    <label> State: </label>

                    <div className="input-group">
                      <input
                        type="text"
                        className=" input-style"
                        placeholder="State *"
                        onChange={(e) => setstate(e.target.value)}
                        value={state}
                      />
                    </div>
                  </div>

                  <div className="col-md-10 ">
                  <label> The price per kg for any package higher than 2kg: </label>

                    <div className="input-group">
                  
                        <input
                        type="number"
                        className="input-style"
                        placeholder="Price per kg above 2kg *"
                        onChange={(e) => setprice_kg(e.target.value)}
                        value={price_kg}
                      />
                      
                    </div>
                  </div>

                  <div className="col-md-10 ">
                    <label> The price to send package to {state}: </label>

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
                    <label> The price for express delivery: </label>

                    <div className="input-group">
                  
                        <input
                        type="number"
                        className="input-style"
                        placeholder="Price *"
                        onChange={(e) => setprice_express(e.target.value)}
                        value={price_express}
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
                            onClick={(e) => StatesUpload(e)}
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

export default AddStates;
