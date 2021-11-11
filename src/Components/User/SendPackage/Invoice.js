import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import { Alert } from "reactstrap";
import UserNavbar from "../../Navbar/UserNavbar";
import PayWithPayStack from "./PayWithPayStack";
import PayWithWallet from "./PayWithWallet";

const Invoice = (props) => {
  // const [trackid, settrackid] = useState(props.match.params.trackid);

  const [trackid, settrackid] = useState("");
  const [date, setdate] = useState("");
  const [status, setstatus] = useState("");

  // Sender
  const [senderaddress, setsenderaddress] = useState("");
  const [sendermail, setsendermail] = useState("");
  const [senderphone, setsenderphone] = useState("");
  const [sendername, setsendername] = useState("");
  const [sendertown, setsendertown] = useState("");
  const [loc_area, setloc_area] = useState("");

  // Receiver
  const [destination_state, setdestination_state] = useState("");
  const [destination_town, setdestination_town] = useState("");
  const [receiver_name, setreceiver_name] = useState("");
  const [receiver_mail, setreceiver_mail] = useState("");
  const [receiver_phone, setreceiver_phone] = useState("");
  const [des_area, setdes_area] = useState("");
  const [country, setcountry] = useState("");
  const [zip, setzip] = useState("");

  // Items Details
  const [packagename, setpackagename] = useState("");
  const [weight, setweight] = useState("");
  const [description, setdescription] = useState("");
  const [onforward, setonforward] = useState("");
  const [type, settype] = useState("");
  const [cargo, setcargo] = useState("");
  const [worth, setworth] = useState("");
  const [Price, setPrice] = useState("");

  const [showalert, setshowalert] = useState(true);
  const [alert, setalert] = useState("");


  const fetchInvoice = () => {
    // const data = {
    //   apptoken: "T9H1E6KUYM",
    //   trackid: props.match.params.trackid
    // };
    // axios
    //   .get(`https://test.api.eclipse.com.ng/v1/get-invoice-data`, { params: data })
    const data = new FormData();
    data.append("apptoken", "T9H1E6KUYM");
    data.append("trackid", props.match.params.trackid);

    axios
      .post(`https://test.api.eclipse.com.ng/v1/get-invoice-data`, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.data.success == false) {
          console.log(response.data);
        } else {
          settrackid(response.data.trackid);
          setdate(response.data.date);
          setstatus(response.data.status);
          setsenderaddress(response.data.senderaddress);
          setsendermail(response.data.sendermail);
          setsenderphone(response.data.senderphone);
          setsendername(response.data.sendername);
          setsendertown(response.data.sendertown);
          setloc_area(response.data.loc_area);
          setdestination_state(response.data.destination_state);
          setdestination_town(response.data.destination_town);
          setreceiver_name(response.data.receiver_name);
          setreceiver_mail(response.data.receiver_mail);
          setreceiver_phone(response.data.receiver_phone);
          setdes_area(response.data.des_area);
          setcountry(response.data.country);
          setzip(response.data.zip);
          setpackagename(response.data.packagename);
          setweight(response.data.weight);
          setdescription(response.data.description);
          setonforward(response.data.onforward);
          settype(response.data.type);
          setcargo(response.data.cargo);
          setworth(response.data.worth);
          setPrice(response.data.Price);
          setalert(response.data.message);

          console.log(response.data);
        }
      });
    };
    useEffect(() => {
      fetchInvoice();
    }, 0);
  
  // pay with wallet modal
  const [showremove, setShowremove] = useState(false);
  const handleCloseremove = () => setShowremove(false);
  const handleShowremove = () => setShowremove(true);
  const [trackingid, settrackingid] = useState("");
 
  function workModal(token) {
    settrackingid(token);
    handleShowremove();
  }
 
  // pay with paystack modal
  const [showremove1, setShowremove1] = useState(false);
  const handleCloseremove1 = () => setShowremove1(false);
  const handleShowremove1 = () => setShowremove1(true);
  
 
  function workModal1(token) {
    settrackingid(token);
    handleShowremove1();
  }

  let statuss
  if (status === "paid") {
  statuss =  <span class="ml-4 px-2 h6 green white-text"><span> Paid </span></span>
  } else if (status === "unpaid") {
   statuss = <span class="ml-2 px-2 h6 yellow"><span> Unpaid </span></span>
  } else {
    <span class="ml-4 px-2 h6 red white-text"><span> Cancelled </span></span>
  }

  return (
    <>
      <UserNavbar /> 
      <div className="send-package">
        <div className="invoice">
          {/* <button div class="btn"> back</button> */}
          <div className="container">
            <div className="mb-4">
              <h5 className="">
                {" "}
                Invoice - {packagename}
                {statuss}
              </h5>
              <h5> Tracking ID : {trackid} </h5>
              <p class="grey-text mt-0 pt-0">
                <i>Created on : {date} </i>
              </p>
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
                <div className="card curve h-100">
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
                <div className="card curve h-100">
                  <div className="card-header">
                    <h6 className="font-weight-bold">RECEIVER DETAILS </h6>
                  </div>
                  <div className="card-body">
                    <h6>
                      <span className="bolder-text">Name: </span>
                      {receiver_name}
                    </h6>
                    {/* <h6>
                      <span className="bolder-text">State: </span>{" "}
                      {destination_state}
                    </h6> */}
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
                      <></>
                    ) : (
                      <>
                        <h6>
                          <span className="bolder-text">Country: </span>{" "}
                          {country}
                        </h6>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="mb-4 col-md-6">
                <div className="card curve h-100">
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
                      <></>
                    ) : (
                      <>
                        <h6>
                          <span className="bolder-text">Cargo: </span> {cargo}
                        </h6>
                        <h6>
                          <span className="bolder-text">Worth: </span> ₦ {worth}
                        </h6>
                      </>
                    )}

                    <h6>
                      <span className="bolder-text">Description: </span>{" "}
                      {description}
                    </h6>
                  </div>
                  <div className="text-left ml-2 invoice-btn">
                    <Link to="/track">
                      <button class="btn w-50"> TRACK ORDER</button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mb-4 col-md-6 ">
                <div className="card curve h-100">
                  <div className="card-header">
                    <h6 className="font-weight-bold">PAYMENT DETAILS </h6>
                  </div>
                  <div className="card-body text-center">
                    <h4 className="mb-4">
                      <span className="bolder-text h6">Amount: </span>
                    </h4>
                    <h1 className="bolder-text">₦ {Price}</h1>
                  </div>
                  {status === "paid" ? (
                    <>
                    <div className="mx-3 text-center">
                    <Alert color="success">
                    Payment Successful 
                    </Alert>
                    </div>
                    </>
                  ) : (
                    <>
                  <div className="text-center invoice-btn">
                    <button
                      class="btn w-75"
                      onClick={(e) => workModal1(trackid)}
                    >
                      {" "}
                      pay with paystack
                    </button>
                    <button
                      class="btn w-75"
                      onClick={(e) => workModal(trackid)}
                    >
                      {" "}
                      pay with wallet
                    </button>
                  </div>
                    </>
                  )}
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pay With Wallet Modal */}
      <PayWithPayStack
        show={showremove1}
        onHide={handleCloseremove1}
        animation={false}
        trackid={trackingid}
        amount={Price}
        type={type}
      />
      {/* Pay With Wallet Modal */}

      {/* Pay With Wallet Modal */}
      <PayWithWallet
        show={showremove}
        onHide={handleCloseremove}
        animation={false}
        trackid={trackingid}
        amount={Price}
        type={type}
      />
      {/* Pay With Wallet Modal */}
    </>
  );
};

export default Invoice;
