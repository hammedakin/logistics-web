import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spinner, Alert } from "reactstrap";
import { useHistory } from "react-router";


const AdCreateInt = () => {
  const [apptoken, setapptoken] = useState(process.env.REACT_APP_APPTOKEN);
  const [endpoint, setendpoint] = useState(process.env.REACT_APP_ENDPOINT);


// Sender 
  const [usertoken, setusertoken] = useState("ADMIN");
  const [pickstate, setpickstate] = useState("");
  const [picktown, setpicktown] = useState("");
  const [sendermail, setsendermail] = useState("");
  const [loc_area, setloc_area] = useState("");
  const [senderphone, setsenderphone] = useState("");
  const [sendername, setsendername] = useState("");

  // Receiver 
  const [state, setstate] = useState("");
  const [town, settown] = useState("");
  const [rmail, setrmail] = useState("");
  const [rphone, setrphone] = useState("");
  const [des_area, setdes_area] = useState("");
  const [rname, setrname] = useState("");
  const [country, setcountry] = useState("");
  const [zip, setzip] = useState("");

  // Items Details 
  const [packagename, setpackagename] = useState("");
  const [weight, setweight] = useState("");
  const [worth, setworth] = useState("");
  const [description, setdescription] = useState("");
  const [iscargo, setiscargo] = useState("");
  const [type, settype] = useState('int');
  const [paid_type, setpaid_type] = useState("");

// States and cities 
  const [allcountries, setallcountries] = useState([]);
  const [allstates, setallstates] = useState([]);
  const [allcities, setallcities] = useState([]);
  const [allweight, setallweight] = useState([]);
  const [count, setcount] = useState(0)


  const [issending, setissending] = useState(false);
  const [showalert, setshowalert] = useState(false);
  const [alert, setalert] = useState("");

  let history = useHistory(); 

  // Function for to process the form
  function SendLocalPackage(e) {
    if (
      ( pickstate, picktown, sendermail, loc_area, senderphone, sendername, country, zip, state, town, rmail, rphone, des_area, rname, packagename, weight, worth, description, iscargo, type, paid_type )
    ) {
      setissending(true);
      const data = new FormData();
      data.append("pickstate", pickstate);
      data.append("picktown", picktown);
      data.append("sendermail", sendermail);
      data.append("loc_area", loc_area);
      data.append("senderphone", senderphone);
      data.append("sendername", sendername);
      data.append("country", country);
      data.append("zip", zip);
      data.append("state", state);
      data.append("town", town);
      data.append("rmail", rmail);
      data.append("rphone", rphone);
      data.append("des_area", des_area);
      data.append("rname", rname);
      data.append("packagename", packagename);
      data.append("weight", weight);
      data.append("worth", worth);
      data.append("description", description);
      data.append("iscargo", iscargo);
      data.append("type", type);
      data.append("paid_type", paid_type);
      data.append("usertoken", usertoken);
      data.append("apptoken", apptoken);

      axios
      .post(`${endpoint}/v1/make-order`, data, {
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
          history.push({
            pathname: `/admin/order/invoice/${res.data.trackid}`,
            state: res.data,
            })


        } else {
          setshowalert(true);
          setalert(res.data.message, "error");
          setissending(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setshowalert(true);
        setalert("Check your Network Connection!!!");
        setissending(false);
      });
  } else {
    setshowalert(true);
    setalert("Empty fields");
    setissending(false);
  }
  e.preventDefault();
}
  // Function for to process the form


   // Function for to call all countries
   const fetchcountries = () => {
    const data = {
      apptoken: apptoken
    }
    axios
      .get(`${endpoint}/v1/get-countries`, {params:data})
      .then((response) => {
        if (response.data.success === false) {
        console.log(response.data);
        }else {
        setallcountries(response.data);
        console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  useEffect(() => {
    fetchcountries();
  }, [count]);

  const countries = allcountries.map((item, i) => {
   return (
    <option value={`${item.country}`}> {item.country} </option>
   );
 });
  // Function for to call all countries

  // Function for to call all states
  const fetchstates = () => {
    const data = {
      apptoken: apptoken
    }
    axios
      .get(`${endpoint}/v1/get-states`, {params:data})
      .then((response) => {
        if (response.data.success === false) {

        console.log(response.data);
        }else {
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
   return (
    <option value={`${item.id}`}> {item.state} </option>
   );
 });
  // Function for to call all states

   // Function for to call all cities
   const fetchcities = () => {
    const data = {
      apptoken: apptoken
    }
    axios
      .get(`${endpoint}/v1/get-cities-fedex`, {params:data})
      .then((response) => {
        if (response.data.success === false) {
        console.log(response.data);
        }else {
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
   return (
    <option value={`${item.CityCode}`}> {item.CityName} </option>
   );
 });
  // Function for to call all cities


// Function for to call all weights for country
const fetchweight = () => {
  const data = {
    apptoken: apptoken
  }
  axios
    .get(`${endpoint}/v1/get-country-weights`, {params:data})
    .then((response) => {
      if (response.data.success === false) {
      console.log(response.data);
      }else {
      setallweight(response.data);
      console.log(response.data);
      }
    })
    .catch((error) => {
      console.log(error.response);
    });
};
useEffect(() => {
  fetchweight();
}, [count]);

const weights = allweight.map((item, i) => {
 return (
  <option value={`${item.id}`}> {item.kg} </option>
 );
});
// Function for to call all weights for country



// item.hotdeals
let types

if (type==='int') {
  types = 'INTERNATIONAL';
} else {
  types = 'Select Type Above';
}


  return (

    <>
      <section className="send">
        <div className="container">
          <h5 className="text-center"> SEND INTERNATIONAL PACKAGE </h5>

          <div className="form">
            <form>
              <div className="row">
                {/* Sender Details  */}
                {/* Sender Details  */}

                <div className="col-md-11 ml-auto mr-auto">
                      <div className="input-group">
                        <input
                          type="text"
                          className=" input-style"
                          placeholder="Type"
                          onChange={(e) => settype(e.target.value)}
                          value={types}
                          disabled
                        />
                      </div>
                </div>

                <div className="col-md-6">
                  <h5 className="text-center"> Sender's Details </h5>

                  <div className="row justify-content-center">
                   

                  <div className="col-md-10 ">
                      {/* <label> Name </label> */}

                      <div className="input-group">
                        <input
                          type="text"
                          className=" input-style"
                          placeholder="Enter Full Name *"
                          onChange={(e) => setsendername(e.target.value)}
                          value={sendername}
                        />
                      </div>
                    </div>

                    <div className="col-md-10 ">
                      {/* <label> Email </label> */}

                      <div className="input-group">
                        <input
                          type="email"
                          className=" input-style"
                          placeholder="Enter Email *"
                          onChange={(e) => setsendermail(e.target.value)}
                          value={sendermail}
                        
                        />
                      </div>
                    </div>

                    <div className="col-md-10 ">
                      {/* <label> Phone Number </label> */}

                      <div className="input-group">
                        <input
                          type="number"
                          className=" input-style"
                          placeholder="Phone Number *"
                          onChange={(e) => setsenderphone(e.target.value)}
                          value={senderphone}
                        />
                      </div>
                    </div>

                    <div className="col-md-10 ">
                      <select
                        className="input-style"
                      >
                        <option value="" selected="">
                          Select Country *
                        </option>

                        <option> Nigeria </option>                       
                      </select>
                    </div>



                    <div className="col-md-10 ">
                      <select
                        className="input-style"
                        onChange={(e) => setpickstate(e.target.value)}
                      >
                        <option value="" selected="">
                          Select State *
                        </option>

                        {states}
                       
                      </select>
                    </div>

                    <div className="col-md-10 ">
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

                    <div className="col-md-10 ">
                      <div className="input-group">
                        <textarea
                          type="text"
                          className="input-style textarea-style"
                          placeholder="Enter Detailed Address *"
                          onChange={(e) => setloc_area(e.target.value)}
                          value={loc_area}
                        ></textarea>
                      </div>
                    </div>
                  
                  </div>
                </div>

                {/* Sender Details  */}
                {/* Sender Details  */}

                {/* Receiver Details  */}
                {/* Receiver Details  */}

                <div className="col-md-6">
                  <h5 className="text-center"> Receiver's Details </h5>

                  <div className="row justify-content-center">

                  <div className="col-md-10 ">
                      {/* <label> Name </label> */}

                      <div className="input-group">
                        <input
                          type="text"
                          className=" input-style"
                          placeholder="Enter Full Name *"
                          onChange={(e) => setrname(e.target.value)}
                          value={rname}
                        />
                      </div>
                    </div>

                    <div className="col-md-10 ">
                      {/* <label> Email </label> */}

                      <div className="input-group">
                        <input
                          type="email"
                          className=" input-style"
                          placeholder="Enter Email *"
                          onChange={(e) => setrmail(e.target.value)}
                          value={rmail}
                        />
                      </div>
                    </div>

                    <div className="col-md-10 ">
                      {/* <label> Phone Number </label> */}

                      <div className="input-group">
                        <input
                          type="number"
                          className=" input-style"
                          placeholder="Phone Number *"
                          onChange={(e) => setrphone(e.target.value)}
                          value={rphone}
                        />
                      </div>
                    </div>

                         
                    <div className="col-md-10 ">
                      <select
                        className="input-style"
                        onChange={(e) => setcountry(e.target.value)}
                      >
                        <option value="" selected="">
                          Select Country *
                        </option>

                        {countries}
                       
                      </select>
                    </div>

                    <div className="col-md-10 ">
                      {/* <label> State </label> */}

                      <div className="input-group">
                        <input
                          type="text"
                          className=" input-style"
                          placeholder="Enter State *"
                          onChange={(e) => setstate(e.target.value)}
                          value={state}
                        />
                      </div>
                    </div>

                    <div className="col-md-10 ">
                      {/* <label> City </label> */}

                      <div className="input-group">
                        <input
                          type="text"
                          className=" input-style"
                          placeholder="Enter City *"
                          onChange={(e) => settown(e.target.value)}
                          value={town}
                        />
                      </div>
                    </div>

                    <div className="col-md-10 ">
                      {/* <label> Zip Code </label> */}

                      <div className="input-group">
                        <input
                          type="text"
                          className=" input-style"
                          placeholder="Zip Code *"
                          onChange={(e) => setzip(e.target.value)}
                          value={zip}
                        />
                      </div>
                    </div>

                    <div className="col-md-10 ">
                      <div className="input-group">
                        <textarea
                          type="text"
                          className="input-style textarea-style"
                          placeholder="Enter Detailed Address *"
                          onChange={(e) => setdes_area(e.target.value)}
                          value={des_area}
                        ></textarea>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Receiver Details  */}
                {/* Receiver Details  */}

                {/* Package Details  */}
                {/* Package Details  */}

                <div className="col-md-6">
                  <h5 className="text-center"> Package Info </h5>

                  <div className="row justify-content-center">
                    <div className="col-md-10 ">
                      <div className="input-group">
                        <input
                          type="text"
                          className=" input-style"
                          placeholder="Package Name*"
                          onChange={(e) => setpackagename(e.target.value)}
                          value={packagename}
                        />
                      </div>
                    </div>

                    <div className="col-md-10 ">
                      <label>Cargo Shipment ? * </label>

                      <select
                        className="input-style"
                        onChange={(e) => setiscargo(e.target.value)}
                      >
                        {/* <option value="" selected="">
                         Cargo Shipment ? *
                        </option> */}
                        <option value="1" >
                          Yes
                        </option> 
                        <option value="0" selected>
                          No
                        </option>
                       
                      </select>
                    </div>


                  {iscargo=="1" ?
                  (
                    <>
                      <div className="col-md-10 ">
                      <div className="input-group">
                        <input
                          type="number"
                          className=" input-style"
                          placeholder="Enter Weight (kg) *"
                          onChange={(e) => setweight(e.target.value)}
                          value={weight}
                        />
                      </div>
                    </div>
</>

                  ) : (
                    <>
                       <div className="col-md-10 ">
                      <select
                        className="input-style"
                        onChange={(e) => setweight(e.target.value)}
                      >
                        <option value="" selected="">
                        Select Weight (kg) *
                        </option>
                        {weights}
                       
                      </select>
                    </div>

                    </>
                  ) 
             
             }

                  </div>
                </div>

                {/* Package Details  */}
                {/* Package Details  */}

                {/* Means Details  */}
                {/* Means Details  */}

                <div className="col-md-6">
                  <h5 className="text-center"> Means Info </h5>

                  <div className="row justify-content-center">

                  <div className="col-md-10 ">
                      {/* <label> Worth </label> */}

                      <div className="input-group">
                        <input
                          type="number"
                          className=" input-style"
                          placeholder="Worth (₦)*"
                          onChange={(e) => setworth(e.target.value)}
                          value={worth}
                        />
                      </div>
                    </div>

                    <div className="col-md-10 ">
                      <div className="input-group">
                        <textarea
                          type="text"
                          className="input-style textarea-style"
                          placeholder="Description *"
                          onChange={(e) => setdescription(e.target.value)}
                          value={description}
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-md-10 ">
                      <select
                        className="input-style"
                        onChange={(e) => setpaid_type(e.target.value)}
                      >
                        <option value="" selected="">
                          Payment Type *
                        </option>
                        <option value="POS" selected="">
                          POS
                        </option>
                        <option value="Cash" selected="">
                          CASH
                        </option>
                        <option value="Transfer" selected="">
                          TRANSFER
                        </option>

                      </select>
                    </div>
                  </div>
                </div>

                {/* Means Details  */}
                {/* Means Details  */}

                <div class="col-md-12">
                        {showalert ? (
                          <>
                            <Alert color="success">{alert}</Alert>
                          </>
                        ) : (
                          <></>
                        )}
                      </div>

                <div class="col-md-10  mx-auto text-center">
                  <div class="user-btn mb-4 mr-auto text-center">
                   
                  {issending ? (
                <>
                  <button
                    type="button"
                    class="btn btn-dark shadow waves-effect"
                    action="submit"              
                  >
                  <strong>     
                      processing <Spinner color="light" />
                    </strong>
                  </button>
                </>
              ) : (
                <>
                         
                  <button
                    type="button"
                    class="btn btn-dark shadow waves-effect"
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
            </form>
          </div>
        </div>
      </section>

    </>
  );
};

export default AdCreateInt;
