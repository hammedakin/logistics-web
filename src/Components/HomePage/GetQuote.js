import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spinner, Alert } from "reactstrap";
import { useHistory } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const GetQuote = () => {
  // Sender
  const [pickstate, setpickstate] = useState("");
  const [picktown, setpicktown] = useState("");
  const [state, setstate] = useState("");
  const [town, settown] = useState("");
  const [weight, setweight] = useState("");
  const [price_th, setprice_th] = useState("");
  // States and cities
  const [sendstates, setsendstates] = useState([]);
  const [allstates, setallstates] = useState([]);
  const [allcities, setallcities] = useState([]);
  const [count, setcount] = useState(0);

  const [issending, setissending] = useState(false);
  const [showalert, setshowalert] = useState(false);
  const [alert, setalert] = useState("");

  let history = useHistory();

  // Function for to process the form
  function SendLocalPackage(e) {
    if ((pickstate, picktown, state, town, weight)) {
      setissending(true);
      const data = new FormData();
      data.append("pickstate", pickstate);
      data.append("picktown", picktown);
      data.append("state", state);
      data.append("town", town);
      data.append("weight", weight);
      data.append("apptoken", "T9H1E6KUYM");

      axios
        .post(`https://test.api.eclipse.com.ng/v1/get-quote`, data, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.success === true) {
            setshowalert(true);
            setalert(res.data.message);
            setprice_th(res.data.price_th);
            setissending(false);
          } else {
            setshowalert(true);
            setalert(res.data.message);
            setissending(false);
          }
        })
        .catch((error) => {
          console.log(error);
          setshowalert(true);
          setalert(error.name);
          setissending(false);
        });
    } else {
      setshowalert(true);
      setalert("Empty fields");
    }
    e.preventDefault();
  }
  // Function for to process the form

  
  // Function for to call sender states
  const fetchsendstates = () => {
    const data = {
      apptoken: "T9H1E6KUYM"
    }
    axios
      .get(`https://test.api.eclipse.com.ng/v1/get-states`, {params:data})
      .then((response) => {
        if (response.data.success === false) {

        console.log(response.data);
        }else {
        setsendstates(response.data);
        console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  useEffect(() => {
    fetchsendstates();
  }, [count]);

  const sendstate = sendstates.map((item, i) => {
   return (
    <option value={`${item.id}`}> {item.state} </option>
   );
 });
  // Function for to call Sender states

  // Function for to call all states
  const fetchstates = () => {
    const data = {
      apptoken: "T9H1E6KUYM",
    };
    axios
      .get(`https://test.api.eclipse.com.ng/v1/get-states-all`, { params: data })
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
      });
  };
  useEffect(() => {
    fetchstates();
  }, [count]);

  const states = allstates.map((item, i) => {
    return <option value={`${item.id}`}> {item.state} </option>;
  });
  // Function for to call all states

  // Function for to call all cities
  const fetchcities = () => {
    const data = {
      apptoken: "T9H1E6KUYM",
    };
    axios
      .get(`https://test.api.eclipse.com.ng/v1/get-cities-fedex`, {
        params: data,
      })
      .then((response) => {
        if (response.data.success === false) {
          console.log(response.data);
        } else {
          setallcities(response.data);
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  useEffect(() => {
    fetchcities();
  }, [count]);

  const cities = allcities.map((item, i) => {
    return <option value={`${item.CityCode}`}> {item.CityName} </option>;
  });
  // Function for to call all cities

  return (
    <>
      {/* <Navbar /> */}
      <div className="get-quote mb-0">
        <div className="container">
          <div className="first ">
            <div className="col-md-8 mx-auto mt-3">
              <h4 className="text-center"> GET QUOTE</h4>
              <h6 className="text-center">
                {" "}
                Use Country, State and City Details to get your shipping rates and save valuable time.
              </h6>
            </div>
            <hr className="white" />
            <div className="row send mb-0 pb-5 mt-2 justify-content-center">
                
              <div className="col-11 col-md-6 ">
              <div class="col-md-12">
                        {showalert ? (
                          <>
                            <Alert color="success">{alert}</Alert>
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                <div className="form">
                  <form>
                    <div className="row">
                      <h6 className="text-center text-white"> From: </h6>

                      <div className="row justify-content-center">
                        <div className="col-md-6 ">
                          <select
                            className="input-style"
                            onChange={(e) => setpickstate(e.target.value)}
                          >
                            <option value="" selected="">
                              Select State *
                            </option>

                            {sendstate}
                          </select>
                        </div>

                        <div className="col-md-6 ">
                          <select
                            className="input-style"
                            onChange={(e) => setpicktown(e.target.value)}
                          >
                            <option value="" selected="">
                              Select City *
                            </option>

                            {cities}
                          </select>
                        </div>
                        <div className="col-12">
                          <label className="text-center white-text"> To: </label>
                        </div>
                        <div className="col-md-6 ">
                          <select
                            className="input-style"
                            onChange={(e) => setstate(e.target.value)}
                          >
                            <option value="" selected="">
                              Select State *
                            </option>

                            {states}
                          </select>
                        </div>

                        <div className="col-md-6 ">
                          <select
                            className="input-style"
                            onChange={(e) => settown(e.target.value)}
                          >
                            <option value="" selected="">
                              Select City *
                            </option>

                            {cities}
                          </select>
                        </div>

                        <div className="col-md-6 ml-auto mr-auto">
                          <div className="input-group">
                            <input
                              type="text"
                              className=" input-style"
                              placeholder="Enter Weight"
                              onChange={(e) => setweight(e.target.value)}
                              value={weight}
                            />
                          </div>
                        </div>
                        <div class="hide">
                        {showalert ? (
                          <>
                            <Alert color="success">{alert}</Alert>
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
           
                        <div class="col-md-6 mx-auto text-center">
                          <div class="user-btn mr-auto text-center">
                            {issending ? (
                              <>
                                <button
                                  type="button"
                                  className="btn shadow waves-effect"
                                  action="submit"
                                >
                                  <strong>
                                 <Spinner color="success" />
                                  </strong>
                                </button>
                              </>
                            ) : (
                              <>
                                <button
                                  type="button"
                                  class="btn shadow waves-effect"
                                  action="submit"
                                  onClick={(e) => SendLocalPackage(e)}
                                >
                                  <strong> submit </strong>
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                     
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6">
                <div className="second mt-5 text-center white-text">
                    {price_th === "" ? (
                        <> 
                  <h1 style={{ fontSize: "70px" }}>₦ 0.00 </h1>
                        </>

                    ) : (
                        <>
                  <h1 style={{ fontSize: "60px" }}>₦ {price_th} </h1>

                        </>
                    )}
                  <h6 className="mt-4"> Estimated Shipping Fee</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default GetQuote;
