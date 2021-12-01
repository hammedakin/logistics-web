import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spinner, Alert } from "reactstrap";

const UploadRestaurant = () => {
  const [rest, setrest] = useState("");
  const [location, setlocation] = useState("");


  const [issending, setissending] = useState(false);
  const [showalert, setshowalert] = useState(false);
  const [alertt, setalert] = useState("");

  function RestaurantUpload(e) {
    if ((rest, location)) {
      setissending(true);

      const data = new FormData();
      data.append("rest", rest);
      data.append("location", location);
      data.append("apptoken", "T9H1E6KUYM");

      axios
        .post(`https://test.api.eclipse.com.ng/v1/admin-add-restaurant`, data, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data);

          if (res.data.success === true) {
            setshowalert(true);
            setrest("");
            setlocation("");
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
                        placeholder="Restaurant Name *"
                        onChange={(e) => setrest(e.target.value)}
                        value={rest}
                      />
                    </div>
                  </div>
                 
                  <div className="col-md-10 ">
                    {/* <label> Name </label> */}

                    <div className="input-group">
                  
                        <textarea
                        type="text"
                        className="input-style textarea-style"
                        placeholder="Location *"
                        onChange={(e) => setlocation(e.target.value)}
                        value={location}
                      ></textarea>
                      
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
                            onClick={(e) => RestaurantUpload(e)}
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

export default UploadRestaurant;
