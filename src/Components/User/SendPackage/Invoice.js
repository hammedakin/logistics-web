import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Alert } from "reactstrap";
import UserNavbar from "../../Navbar/UserNavbar";
import PayWithPayStack from "./Payment/PayWithPayStack";
import PayWithWallet from "./Payment/PayWithWallet";
import Payment from "./Payment/Payment";
import { useHistory } from "react-router";

const Invoice = (props) => {
  const [apptoken, setapptoken] = useState(process.env.REACT_APP_APPTOKEN);
  const [endpoint, setendpoint] = useState(process.env.REACT_APP_ENDPOINT);

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
  const [price, setprice] = useState("");
  const [priceth, setpriceth] = useState("");
  const [express, setexpress] = useState("");
  const [expressth, setexpressth] = useState("");

  const [showalert, setshowalert] = useState(true);
  const [alertt, setalert] = useState("");

  let history = useHistory();

  const fetchInvoice = () => {
    const data = new FormData();
    data.append("apptoken", apptoken);
    data.append("trackid", props.match.params.trackid);
    axios
      .post(`${endpoint}/v1/get-invoice-data`, data, {
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
          setpriceth(response.data.price_thousand);
          setprice(response.data.Price);
          setexpress(response.data.price_express);
          setexpressth(response.data.price_express_th);
          setalert(response.data.message);
          console.log(response.data);

          history.push({
            state: response.data,
          });
        }
      });
  };
  useEffect(() => {
    fetchInvoice();
  }, 0);

  // Payment Status

  let statuss;
  if (status === "paid") {
    statuss = (
      <span class="ml-4 px-2 h6 green white-text">
        <span> Paid </span>
      </span>
    );
  } else if (status === "unpaid") {
    statuss = (
      <span class="ml-2 px-2 h6 yellow">
        <span> Unpaid </span>
      </span>
    );
  } else {
    <span class="ml-4 px-2 h6 red white-text">
      <span> Cancelled </span>
    </span>;
  }
  // Payment Status

  // Shipment Type
  let types;

  if (type === "int") {
    types = "INTERNATIONAL";
  } else {
    types = "LOCAL";
  }
  // Shipment Type

  // Copy to Clipboard Function
  function Copy() {
    var content = document.getElementById("textArea").innerHTML;

    navigator.clipboard.writeText(content).then(() => {
        console.log("Text copied to clipboard...");
        alert( `${trackid} Copied!`);
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  }
  // Copy to Clipboard Function
  

  return (
    <>
      <UserNavbar />
      <div className="send-package">
        <div className="invoice">
          {/* <button div class="btn"> back</button> */}
          <div className="container">
            <div className="mb-4 first">
              <h5>
                <span className="font-weight-light"> Tracking ID: </span>
                <span id="textArea"> {trackid}</span>{" "}
                <a onClick={Copy}>
                  {" "}
                  <box-icon name="copy" size="1.2rem" color="grey"></box-icon>
                </a>
              </h5>

              <h5 className="">
                {" "}
                <span className="font-weight-light"> Type: </span>
                {types} SHIPMENT
              </h5>
              {type === "int" ? (
                <> </>
              ) : (
                <>
                  {express === 1 ? (
                    <>
                      <h5 className="">
                        <span class="font-weight-light">Mode:</span> Express
                        Delivery
                      </h5>
                    </>
                  ) : (
                    <h5 className="">
                      <span class="font-weight-light">Mode:</span> Normal
                      Delivery
                    </h5>
                  )}
                </>
              )}
              <h5 className="">
                <span className="font-weight-light"> Status: </span>
                {statuss}
              </h5>
              <p class="grey-text mt-0 pt-0">
                <i>Created on : {date} </i>
              </p>
            </div>
            <div class="text-center">
              {showalert ? (
                <>
                  <Alert color="success">{alertt}</Alert>
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
                      Name:
                      <span className="bolder-text">{sendername}</span>
                    </h6>
                    <hr />

                    <h6>
                      City: <span className="bolder-text"> {sendertown} </span>
                    </h6>
                    <hr />
                    <h6>
                      Email:
                      <span className="bolder-text">{sendermail} </span>
                    </h6>
                    <hr />
                    <h6>
                      Phone: <span className="bolder-text"> {senderphone}</span>
                    </h6>
                    <hr />
                    <h6>
                      {" "}
                      Address:{" "}
                      <span className="bolder-text">{senderaddress}</span>
                    </h6>
                    <hr />
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
                      Name: <span className="bolder-text">{receiver_name}</span>
                    </h6>
                    <hr />
                    {/* <h6>
                      <span className="bolder-text">State: </span>
                      {destination_state}
                    </h6>
                    <hr/> */}
                    <h6>
                      City:
                      <span className="bolder-text"> {destination_town}</span>
                    </h6>
                    <hr />
                    <h6>
                      Email:
                      <span className="bolder-text"> {receiver_mail}</span>
                    </h6>
                    <hr />
                    <h6>
                      Phone:
                      <span className="bolder-text"> {receiver_phone} </span>
                    </h6>
                    <hr />
                    <h6>
                      Address:
                      <span className="bolder-text"> {des_area}</span>
                    </h6>
                    <hr />

                    {country === "" ? (
                      <></>
                    ) : (
                      <>
                        <h6>
                          Country:
                          <span className="bolder-text"> {country}</span>
                        </h6>
                        <hr />
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
                      Type:
                      <span className="text-uppercase bolder-text">
                        {" "}
                        {type}{" "}
                      </span>
                    </h6>
                    <hr />
                    <h6>
                      Package Name:
                      <span className="bolder-text"> {packagename}</span>
                    </h6>
                    <hr />
                    <h6>
                      Weight:
                      <span className="bolder-text"> {weight} kg</span>
                    </h6>
                    <hr />

                    <h6>
                      Onforwarding:
                      <span className="bolder-text"> {onforward} </span>
                    </h6>
                    <hr />

                    {country === "" ? (
                      <></>
                    ) : (
                      <>
                        <h6>
                          Cargo:
                          <span className="bolder-text"> {cargo}</span>
                        </h6>
                        <hr />
                        <h6>
                          Worth:
                          <span className="bolder-text"> ₦ {worth}</span>
                        </h6>
                        <hr />
                      </>
                    )}

                    <h6>
                      Description:
                      <span className="bolder-text"> {description} </span>
                    </h6>
                    <hr />
                  </div>
                  <div className="text-left ml-2 invoice-btn">
                    <Link to="/track">
                      <button class="btn w-75"> TRACK ORDER</button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mb-4 col-md-6 ">
                <div className="card curve h-100">
                  <div className="card-header">
                    <h6 className="font-weight-bold">PAYMENT DETAILS </h6>
                  </div>
                  <Payment
                    trackid={trackid}
                    price={price}
                    priceth={priceth}
                    type={type}
                    status={status}
                    express={express}
                    expressth={expressth}
                  />
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
