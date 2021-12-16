import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spinner, Alert } from "reactstrap";
import AdminNavbar from "../../Navbar/AdminNavbar";

const UpdateSetting = () => {
  const [apptoken, setapptoken] = useState(process.env.REACT_APP_APPTOKEN);
  const [endpoint, setendpoint] = useState(process.env.REACT_APP_ENDPOINT);

  const [appname, setappname] = useState("");
  const [appmail, setappmail] = useState("");
  const [appphone, setappphone] = useState(Number());
  const [i_p_kg, seti_p_kg] = useState(Number());
  const [i_p_0_2, seti_p_0_2] = useState(Number());
  const [i_p_2_3, seti_p_2_3] = useState(Number());
  const [i_p_3_4, seti_p_3_4] = useState(Number());
  const [i_p_4, seti_p_4] = useState(Number());
  const [food, setfood] = useState(Number());
  const [time, settime] = useState("");

  const [issending, setissending] = useState(false);
  const [showalert, setshowalert] = useState(false);
  const [alertt, setalert] = useState("");

  //   Update Settings

  function SettingUpdate(e) {
    if (
      (appname,
      appmail,
      appphone,
      i_p_kg,
      i_p_0_2,
      i_p_2_3,
      i_p_3_4,
      i_p_4,
      food)
    ) {
      setissending(true);

      const data = new FormData();
      data.append("appname", appname);
      data.append("appmail", appmail);
      data.append("appphone", appphone);
      data.append("ibadan_price_kg", i_p_kg);
      data.append("ibadan_price_0_2", i_p_0_2);
      data.append("ibadan_price_2_3", i_p_2_3);
      data.append("ibadan_price_3_4", i_p_3_4);
      data.append("ibadan_price_4", i_p_4);
      data.append("food_delivery", food);
      data.append("apptoken", apptoken);

      axios
        .post(`${endpoint}/v1/admin-update-settings`, data, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data);

          if (res.data.response === "22.4") {
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
  //   Update Settings

  //   Get Settings
  const SettingsData = () => {
    const data = new FormData();
    data.append("apptoken", apptoken);

    axios
      .post(`${endpoint}/v1/admin-get-settings`, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.data.success == false) {
          console.log(response.data);
        } else {
          setappname(response.data.appname);
          setappmail(response.data.appmail);
          setappphone(response.data.appphone);
          seti_p_kg(response.data.ibadan_price_kg);
          seti_p_0_2(response.data.ibadan_price_0_2);
          seti_p_2_3(response.data.ibadan_price_2_3);
          seti_p_3_4(response.data.ibadan_price_3_4);
          seti_p_4(response.data.ibadan_price_4);
          setfood(response.data.food_delivery);
          settime(response.data.timestamp);
          setalert(response.data.message);

          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error.name);
        SettingsData();
      });
  };
  useEffect(() => {
    SettingsData();
  }, 0);
  //   Get Settings

  return (
    <>
      <AdminNavbar />
      <section className="add-food">
        <div className="container">
          <div className="text-center">
            <h5> PLATFORM SETTING</h5>
          </div>
          <h6 className="red-text text-center"> Last Update: {time} </h6> 
          <hr />
          <div className="send mt-1">
            <div className="text-center">
              <h5> Platform Details </h5>
            </div>
            <hr />
            <div className="form">
              <form>
                <div className="row justify-content-center">
                  <div className="col-md-10 ">
                    <label> Platform Name * </label>

                    <div className="input-group">
                      <input
                        type="text"
                        className=" input-style"
                        placeholder="Platform Name *"
                        onChange={(e) => setappname(e.target.value)}
                        value={appname}
                      />
                    </div>
                  </div>

                  <div className="col-md-10 ">
                    <label> Platform Mail * </label>

                    <div className="input-group">
                      <input
                        type="text"
                        className="input-style"
                        placeholder="Platform Mail *"
                        onChange={(e) => setappmail(e.target.value)}
                        value={appmail}
                      />
                    </div>
                  </div>

                  <div className="col-md-10 ">
                    <label> Platform Phone * </label>

                    <div className="input-group">
                      <input
                        type="text"
                        className="input-style"
                        placeholder="Platform Phone *"
                        onChange={(e) => setappphone(e.target.value)}
                        value={appphone}
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center mt-3">
                  <h5> Delivery Price Update </h5>
                </div>
                <hr />
                <div className="row justify-content-center">
                  <div className="col-md-10 ">
                    <label> Price per KG for Ibadan (NGN) </label>

                    <div className="input-group">
                      <input
                        type="text"
                        className=" input-style"
                        placeholder="Price per KG *"
                        onChange={(e) => seti_p_kg(e.target.value)}
                        value={i_p_kg}
                      />
                    </div>
                  </div>

                  <div className="col-md-10 ">
                    <label> Price for 2KG and below for Ibadan (NGN) </label>

                    <div className="input-group">
                      <input
                        type="number"
                        className=" input-style"
                        placeholder="Price for KG *"
                        onChange={(e) => seti_p_0_2(e.target.value)}
                        value={i_p_0_2}
                      />
                    </div>
                  </div>

                  <div className="col-md-10 ">
                    <label> Price between 2kg and 3kg (NGN) </label>

                    <div className="input-group">
                      <input
                        type="number"
                        className=" input-style"
                        placeholder="Price between 2kg and 3kg *"
                        onChange={(e) => seti_p_2_3(e.target.value)}
                        value={i_p_2_3}
                      />
                    </div>
                  </div>

                  <div className="col-md-10 ">
                    <label> Price between 3kg and 4kg (NGN) </label>

                    <div className="input-group">
                      <input
                        type="number"
                        className=" input-style"
                        placeholder="Price between 2kg and 3kg *"
                        onChange={(e) => seti_p_3_4(e.target.value)}
                        value={i_p_3_4}
                      />
                    </div>
                  </div>

                  <div className="col-md-10 ">
                    <label> Price for 4KG and above (NGN) </label>

                    <div className="input-group">
                      <input
                        type="number"
                        className=" input-style"
                        placeholder="Price for KG *"
                        onChange={(e) => seti_p_4(e.target.value)}
                        value={i_p_4}
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center mt-3">
                  <h5> Food Delivery Update </h5>
                </div>
                <hr />
                <div className="row justify-content-center">
                  <div className="col-md-10 ">
                    <label> Food Delivery (NGN) </label>

                    <div className="input-group">
                      <input
                        type="number"
                        className=" input-style"
                        placeholder="Food Delivery *"
                        onChange={(e) => setfood(e.target.value)}
                        value={food}
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
                            onClick={(e) => SettingUpdate(e)}
                          >
                            <strong> update </strong>
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

export default UpdateSetting;
