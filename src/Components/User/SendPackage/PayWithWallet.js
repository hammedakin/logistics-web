import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { Spinner, Alert } from "reactstrap";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const PayWithWallet = (props) => {
  const [usertoken, setusertoken] = useState(localStorage.getItem("usertoken"));
  const [trackid, settrackid] = useState(props.trackid);
  const [type, settype] = useState(props.type);
  const [amount, setamount] = useState(props.Price);
  const [walletbalance_th, setwalletbalance_th] = useState("");

  const [issending, setissending] = useState(false);
  const [showalert, setshowalert] = useState(false);
  const [alert, setalert] = useState("");
  let history = useHistory();


  const WalletPayment = (e) => {
    if ((usertoken, props.trackid, props.amount, props.type)) {
      setissending(true);

      const data = new FormData();
      data.append("usertoken", usertoken);
      data.append("trackid", props.trackid);
      data.append("price", props.amount);
      data.append("shiptype", props.type);
      data.append("apptoken", "T9H1E6KUYM");

      axios
      .post(`https://test.api.eclipse.com.ng/v1/pay-order-wallet`, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.data.response === true) {
          settrackid(response.data.trackid);
          setamount(response.data.amount);
          settype(response.data.type);
          setshowalert(true);
          setalert(response.data.message);
          setissending(false);
          console.log(response.data);
          history.push({
        pathname: `/send-package/invoice/${response.data.trackid}`,
        state: response.data,
          });
          window.location.reload(true);
          alert(response.data.message);

        } else {
          setshowalert(true);
          setalert(response.data.message);
          setissending(false);
          console.log(response.data);
          }
      })
      .catch((error) => {
        console.log(error);
        setshowalert(true);
        setalert(error.name, "Check your Network Connection!!!");
        setissending(false);
      });
  } else {
    setshowalert(true);
    // setalert("Try Again!!!");
    setissending(false);
    }
    e.preventDefault();
  }

  const fetchBal = () => {
    const data = {
      apptoken: "T9H1E6KUYM",
      usertoken: localStorage.getItem("usertoken"),
    };
    axios
      .get(`https://test.api.eclipse.com.ng/v1/get-wallet-balance`, {
        params: data,
      })
      .then((response) => {
        if (response.data.success === false) {
          console.log(response.data);
          setissending(false);
        } else {
          setwalletbalance_th(response.data.walletbalance_th);
          console.log(response.data);
          // alert(response.data.message);
          setissending(false);
        }
      })
      .catch((error) => {
        console.log(error.response);
        setissending(false);
        alert(error.message);
      });
  };
  useEffect(() => {
    fetchBal();
  }, 0);


  return (
    <>
      <Modal
        show={props.show}
        onHide={props.onHide}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Body style={{ backgroundColor: "transparent!important" }} >
        <Modal.Header closeButton></Modal.Header>

          <section class=" ">
            <div class="container">
              <div class="text-center">
                <h6 className="font-weight-light">
                  You are about to make payent for this invoice
                </h6>
                <h5>
                  <span class=" font-weight-bold green-text">
                    {props.trackid}
                  </span>
                </h5>

                <h6 className="font-weight-light"> Amount :</h6>
                <h1 className="font-weight-bold green-text">
                  {" "}
                  ₦ {props.amount}
                </h1>
                <Alert color="warning">
                  Account Balance : ₦ {walletbalance_th}
                </Alert>
                {props.amount} {props.trackid} {props.type} {usertoken}
              </div>

              <div class="text-center h5">
                {showalert ? (
                  <>
                    <Alert color="success">{alert}</Alert>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </section>
        </Modal.Body>
        <Modal.Footer>
          <div class="ml-auto mr-auto">
            {props.amount < walletbalance_th ? (
              <>
                <button type="button" class="btn btn-danger  btn my-0">
                  Fund Wallet
                </button>
              </>
            ) : (
              <>
                {issending ? (
                  <>
                    <Link to="/">
                      <button
                        type="button"
                        class="btn btn-success btn my-0"
                        disabled
                      >
                        processing <Spinner color="light" />
                      </button>
                    </Link>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      class="btn btn-success my-0"
                      onClick={(e) => WalletPayment(e)}
                    >
                      pay ₦ {props.amount}
                    </button>
                    <button onClick={props.onHide} class="btn btn-red"> Close</button>
                  </>
                )}
              </>
            )}
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PayWithWallet;
