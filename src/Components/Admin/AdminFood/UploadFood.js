import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spinner, Alert } from "reactstrap";

const UploadFood = () => {
  const [title, settitle] = useState("");
  const [des, setdes] = useState("");
  const [resid, setresid] = useState("");
  const [price, setprice] = useState("");

  const [allres, setallres] = useState([]);
  const [count, setcount] = useState(0);

  const [issending, setissending] = useState(false);
  const [showalert, setshowalert] = useState(false);
  const [alertt, setalert] = useState("");

  function UploadFood(e) {
    if ((title, des, resid, price)) {
      setissending(true);

      const data = new FormData();
      data.append("title", title);
      data.append("description", des);
      data.append("resid", resid);
      data.append("price", price);
      data.append("apptoken", "T9H1E6KUYM");

      axios
        .post(`https://test.api.eclipse.com.ng/v1/admin-add-food`, data, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data);

          if (res.data.success === true) {
            setshowalert(true);
            settitle("");
            setdes("");
            setprice("");
            setresid("");
            setalert(res.data.message);
            setissending(false);
            window.location.reload(true);
            // history.push("/login")
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

  // Function for to call get Restaurants
  const fetchres = () => {
    const data = {
      apptoken: "T9H1E6KUYM",
    };
    axios
      .get(`https://test.api.eclipse.com.ng/v1/admin-list-restaurant`, {
        params: data,
      })
      .then((response) => {
        if (response.data.success === false) {
          console.log(response.data);
        } else {
          setallres(response.data);
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  useEffect(() => {
    fetchres();
  }, [count]);

  const res = allres.map((item, i) => {
    return <option value={`${item.id}`}> {item.name} </option>;
  });
  // Function for to call get Restaurants

  return (
    <>
      <div className="add-food">
        <div className="container">
          <div className="send">
            <div className="text-center">
              <h5> UPLOAD FOOD </h5>
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
                        placeholder="Food Name *"
                        onChange={(e) => settitle(e.target.value)}
                        value={title}
                      />
                    </div>
                  </div>
                 
                  <div className="col-md-10 ">
                    {/* <label> Name </label> */}

                    <div className="input-group">
                      <input
                        type="number"
                        className=" input-style"
                        placeholder="Price *"
                        onChange={(e) => setprice(e.target.value)}
                        value={price}
                      />
                    </div>
                  </div>

                  <div className="col-md-10 ">
                    {/* <label> Name </label> */}

                    <div className="input-group">
                  
                        <textarea
                        type="text"
                        className="input-style textarea-style"
                        placeholder="Description *"
                        onChange={(e) => setdes(e.target.value)}
                        value={des}
                      ></textarea>
                      
                    </div>
                  </div>
                  <div className="col-md-10 ">
                    {/* <label>Cargo Shipment ? * </label> */}

                    <select
                      className="input-style"
                      onChange={(e) => setresid(e.target.value)}
                    >
                      <option value="" selected>
                        Select Restaurant *
                      </option>
                        {res}
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
                            class="btn shadow waves-effect"
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
                            class="btn shadow waves-effect"
                            action="submit"
                            onClick={(e) => UploadFood(e)}
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

export default UploadFood;
