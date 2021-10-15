import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spinner, Alert } from "reactstrap";
import { useHistory } from "react-router";
import Invoice from "../Invoice";



const SendPackageLocal = () => {

// Sender 
  const [usertoken, setusertoken] = useState("");
  const [pickstate, setpickstate] = useState("");
  const [picktown, setpicktown] = useState("");
  const [sendermail, setsendermail] = useState(localStorage.getItem('email'));
  const [loc_area, setloc_area] = useState("");
  const [senderphone, setsenderphone] = useState(localStorage.getItem('phone'));
  const [sendername, setsendername] = useState(localStorage.getItem('fullname'));

  // Receiver 
  const [state, setstate] = useState("");
  const [town, settown] = useState("");
  const [rmail, setrmail] = useState("");
  const [rphone, setrphone] = useState("");
  const [des_area, setdes_area] = useState("");
  const [rname, setrname] = useState("");

  // Items Details 
  const [packagename, setpackagename] = useState("");
  const [weight, setweight] = useState("");
  const [description, setdescription] = useState("");
  const [onforwardingtownid, setonforwardingtownid] = useState("");
  const [type, settype] = useState("local");

// States and cities 
  const [allstates, setallstates] = useState([]);
  const [allcities, setallcities] = useState([]);
  const [count, setcount] = useState(0)


  const [issending, setissending] = useState(false);
  const [showalert, setshowalert] = useState(false);
  const [alert, setalert] = useState("");

  const [trackid, settrackid] = useState("");
  let history = useHistory(); 


  // useEffect(() => {
  // settype(localStorage.getItem('type'))
  // },[localStorage.getItem('type')]
  // )

  // Function for to process the form
  function SendLocalPackage(e) {
    if (
      (
      pickstate,
      picktown,
      sendermail,
      loc_area,
      senderphone,
      sendername,
      state,
      town,
      rmail,
      rphone,
      des_area,
      rname,
      packagename,
      weight,
      description,
      onforwardingtownid,
      type
      )
    ) {
      setissending(true);
      const data = new FormData();
      data.append("pickstate", pickstate);
      data.append("picktown", picktown);
      data.append("sendermail", sendermail);
      data.append("loc_area", loc_area);
      data.append("senderphone", senderphone);
      data.append("sendername", sendername);
      data.append("state", state);
      data.append("town", town);
      data.append("rmail", rmail);
      data.append("rphone", rphone);
      data.append("des_area", des_area);
  /* border: #000 solid 2px !important; */
      data.append("rname", rname);
      data.append("packagename", packagename);
      data.append("weight", weight);
      data.append("description", description);
      data.append("onforwardingtownid", onforwardingtownid);
      data.append("type", type);
      data.append("usertoken", localStorage.getItem('usertoken'));
      data.append("apptoken", "T9H1E6KUYM");

      axios
      .post(`https://test.api.eclipse.com.ng/v1/make-order`, data, {
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
          setusertoken((localStorage.getItem('usertoken')))
          localStorage.removeItem('type');
          // history.push(`/send-package/invoice/${res.data.trackid}`);
          history.push({
            pathname:`/send-package/invoice/${res.data.trackid}`, 
            state:res.data
            })


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

  // Function for to call all states
  const fetchstates = () => {
    const data = {
      apptoken: "T9H1E6KUYM"
    }
    axios
      .get(`https://test.api.eclipse.com.ng/v1/get-states`, {params:data})
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
      apptoken: "T9H1E6KUYM"
    }
    axios
      .get(`https://test.api.eclipse.com.ng/v1/get-cities-fedex`, {params:data})
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

        // item.hotdeals
        let types
        if (type=='local') {
          types = 'LOCAL';
        } 
        else if (type=='international') {
          types = 'INTERNATIONAL';
        } else {
          types = 'Select Type Above';
          
        }


  return (

    <>
      <section className="send">
        <div className="container">
          <h5 className="text-center"> SEND LOCAL PACKAGE </h5>

          <div className="form">
            <form>
              <div className="row">
                {/* Sender Details  */}
                {/* Sender Details  */}

                <div className="col-md-10 ml-auto mr-auto">
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
                          disabled
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
                        onChange={(e) => setstate(e.target.value)}
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
                        onChange={(e) => settown(e.target.value)}
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
                      <select
                        className="input-style"
                        onChange={(e) => setweight(e.target.value)}
                      >
                        <option value="" selected="">
                        Select Weight (kg) *
                        </option>
                        <option value="1" selected="">
                          Yes
                        </option> 
                        <option value="0" selected="">
                          No
                        </option>
                       
                      </select>
                    </div>
                  
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
                        onChange={(e) => setonforwardingtownid(e.target.value)}
                      >
                        <option value="" selected="">
                        Onforwarding *
                        </option>
                        <option value="1" selected="">
                          Yes
                        </option> 
                        <option value="0" selected="">
                          No
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
                    class="btn shadow waves-effect"
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
            </form>
          </div>
        </div>
      </section>

    </>
  );
};

export default SendPackageLocal;
