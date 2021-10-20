import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert } from "reactstrap";
import UserNavbar from "../../Navbar/UserNavbar";

const Invoice = (props) => {
  const [trackid, settrackid] = useState(props.location.state.trackid);
  const [date, setdate] = useState(props.location.state.date);


  // Sender
  const [senderaddress, setsenderaddress] = useState(
    props.location.state.senderaddress
  );
  const [sendertown, setsendertown] = useState(props.location.state.sendertown);
  const [sendermail, setsendermail] = useState(props.location.state.sendermail);
  const [senderphone, setsenderphone] = useState(
    props.location.state.senderphone
  );
  const [sendername, setsendername] = useState(props.location.state.sendername);
  const [loc_area, setloc_area] = useState(props.location.state.loc_area);

  // Receiver
  const [destination_state, setdestination_state] = useState(
    props.location.state.destination_state
  );
  const [destination_town, setdestination_town] = useState(
    props.location.state.destination_town
  );
  const [receiver_name, setreceiver_name] = useState(
    props.location.state.receiver_name
  );
  const [receiver_mail, setreceiver_mail] = useState(
    props.location.state.receiver_mail
  );
  const [receiver_phone, setreceiver_phone] = useState(
    props.location.state.receiver_phone
  );
  const [des_area, setdes_area] = useState(props.location.state.des_area);
  const [country, setcountry] = useState(props.location.state.country);
  const [zip, setzip] = useState(props.location.state.zip);

  // Items Details
  const [packagename, setpackagename] = useState(
    props.location.state.packagename
  );
  const [weight, setweight] = useState(props.location.state.weight);
  const [description, setdescription] = useState(
    props.location.state.description
  );
  const [onforward, setonforward] = useState(props.location.state.onforward);
  const [type, settype] = useState(props.location.state.type);
  const [cargo, setcargo] = useState(props.location.state.cargo);
  const [worth, setworth] = useState(props.location.state.worth);

  const [showalert, setshowalert] = useState(true);
  const [alert, setalert] = useState(props.location.state.message);

  return (
    <>
      <UserNavbar />
      <div className="send-package">
        <div className="invoice">
        {/* <button div class="btn"> back</button> */}
          <div className="container">
              <div className="mb-4">
            <h5 className=""> Invoice - {packagename} 
            {/* <span class="ml-2 px-2 h6 yellow"><i> In Progress </i></span>
            <span class="ml-4 px-2 h6 green white-text"><i> Completed </i></span>
            <span class="ml-4 px-2 h6 red white-text"><i> Cancelled </i></span> */}
            </h5> 
            <h5> Tracking ID : {trackid} </h5>
            <p class="grey-text mt-0 pt-0"><i>Created on : {date} </i></p>
            </div>
            <div class="text-center">
              {showalert ? (
                <>
                  <Alert color="success">{alert}</Alert>
                </>
              ) : (
                <></>
              )}
            </div>
            <div className="row">
              <div className="mb-4 col-md-6">
                <div className="card h-100">
                  <div className="card-header">
                    <h6 className="font-weight-bold">SENDER DETAILS </h6>
                  </div>
                  <div className="card-body">
                    <h6>
                      <span className="bolder-text">Name: </span>
                      {sendername}
                    </h6>
                    {/* <h6>
                      <span className="bolder-text">State: </span> {loc_area}
                    </h6> */}
                    <h6>
                      <span className="bolder-text">City: </span> {sendertown}
                    </h6>
                    <h6>
                      <span className="bolder-text">Email: </span> {sendermail}
                    </h6>
                    <h6>
                      <span className="bolder-text">Phone: </span> {senderphone}
                    </h6>
                    <h6>
                      <span className="bolder-text">Address: </span>{" "}
                      {senderaddress}
                    </h6>
                  </div>
                </div>
              </div>

              <div className="mb-4 col-md-6">
                <div className="card h-100">
                  <div className="card-header">
                    <h6 className="font-weight-bold">RECEIVER DETAILS </h6>
                  </div>
                  <div className="card-body">
                    <h6>
                      <span className="bolder-text">Name: </span>
                      {receiver_name}
                    </h6>
                    <h6>
                      <span className="bolder-text">State: </span>{" "}
                      {destination_state}
                    </h6>
                    <h6>
                      <span className="bolder-text">City: </span>{" "}
                      {destination_town}
                    </h6>
                    <h6>
                      <span className="bolder-text">Email: </span>{" "}
                      {receiver_mail}
                    </h6>
                    <h6>
                      <span className="bolder-text">Phone: </span>{" "}
                      {receiver_phone}
                    </h6>
                    <h6>
                      <span className="bolder-text">Address: </span> {des_area}
                    </h6>

                    {country === "" ? (
                      <>

                      </>
                    ) : (
                      <>
                       <h6>
                      <span className="bolder-text">Country: </span> {country}
                    </h6>
                      </>
                    )
                  }
                   
                  </div>
                </div>
              </div>

              <div className="mb-4 col-md-6">
                <div className="card h-100">
                  <div className="card-header">
                    <h6 className="font-weight-bold">ITEM DETAILS </h6>
                  </div>
                  <div className="card-body">
                    <h6>
                      <span className="bolder-text">Type: </span>
                      <span className="text-uppercase">{type} </span>
                    </h6>
                    <h6>
                      <span className="bolder-text">Package Name: </span>
                      {packagename}
                    </h6>
                    <h6>
                      <span className="bolder-text">Weight: </span> {weight} kg
                    </h6>

                    <h6>
                      <span className="bolder-text">Onforwarding: </span>{" "}
                      {onforward}
                    </h6>

                    {country === "" ? (
                      <>

                      </>
                    ) : (
                      <>
                    <h6>
                      <span className="bolder-text">Cargo: </span> {cargo}
                    </h6>
                    <h6>
                      <span className="bolder-text">Worth: </span>  ₦ {worth}
                    </h6>
                      </>
                    )
                  }
                
                    <h6>
                      <span className="bolder-text">Description: </span>{" "}
                      {description}
                    </h6>
                  </div>
                  <div className="text-left ml-2 invoice-btn">
                    <Link to="/track" >
                      <button class="btn w-50"> TRACK ORDER</button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mb-4 col-md-6 ">
                <div className="card h-100">
                  <div className="card-header">
                    <h6 className="font-weight-bold">PAYMENT DETAILS </h6>
                  </div>
                  <div className="card-body text-center">
                    <h4 className="mb-4">
                      <span className="bolder-text h6">Amount: </span>
                    </h4>
                    <h1 className="bolder-text">
                    ₦  12,000.00
                    </h1>
                  </div>
                  <div className="text-center invoice-btn">
                    <Link to="/track">
                      <button class="btn w-75"> pay with paystack</button>
                    </Link>
                    <Link to="/track">
                      <button class="btn w-75"> pay with wallet</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoice;
