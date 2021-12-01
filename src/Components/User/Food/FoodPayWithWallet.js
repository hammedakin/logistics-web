import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { Spinner, Alert } from "reactstrap";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const FoodPayWithWallet = (props) => {
  const [usertoken, setusertoken] = useState(localStorage.getItem("usertoken"));
  // const [oid, setoid] = useState("");
  // const [fid, setfid] = useState("");
  // const [price, setprice] = useState("");
  // const [phone, setphone] = useState("");
  // const [address, setaddress] = useState("");
  const [walletbalance_th, setwalletbalance_th] = useState("");
  const [walletbalance, setwalletbalance] = useState("");

  const [issending, setissending] = useState(false);
  const [showalert, setshowalert] = useState(false);
  const [alertt, setalertt] = useState("");
  let history = useHistory();

  const WalletPayment = (e) => {
    if ((usertoken, props.id, props.amount, props.phone, props.address)) {
      setissending(true);

      const data = new FormData();
      data.append("usertoken", usertoken);
      data.append("fid", props.id);
      data.append("price", props.amount);
      data.append("phone", props.phone);
      data.append("location", props.address);
      data.append("apptoken", "T9H1E6KUYM");

      axios
        .post(`https://test.api.eclipse.com.ng/v1/order-food-wallet`, data, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((response) => {
          if (response.data.message === 'Your food has been ordered') {
            setusertoken(response.data.usertoken);

            setshowalert(true);
            setalertt(response.data.message);
            setissending(false);
            console.log(response.data);
            alert(response.data.message);
            history.push(`/food/invoice/${response.data.orderid}`);
          } else {
            setshowalert(true);
            setalertt(response.data.message);
            setissending(false);
            console.log(response.data);
          }
        })
        .catch((error) => {
          console.log(error);
          setshowalert(true);
          setalertt(error.name, "Check your Network Connection!!!");
          setissending(false);
        });
    } else {
      setshowalert(true);
      setalertt("Pls, Input Phone Number and Address and Try Again!!!");
      setissending(false);
    }
    e.preventDefault();
  };

  const fetchBal = () => {
    const data = {
      apptoken: "T9H1E6KUYM",
      usertoken: usertoken,
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
        <Modal.Body style={{ backgroundColor: "transparent!important" }}>
          <Modal.Header closeButton></Modal.Header>

          <section class=" ">
            <div class="container">
              <div class="text-center">
                <div class="text-center">
                  <h6 className="font-weight-light">
                    Please, Confirm your food order before making payment.
                  </h6>
                  <div className="text-left mt-4">
                    <hr />

                    <h6 className="font-weight-light">
                      Food:
                      <span class=" font-weight-bold green-text ml-2">
                        {props.title}
                      </span>
                    </h6>
                    <hr />

                    <h6 className="font-weight-light">
                      Restaurant:
                      <span class=" font-weight-bold green-text ml-2">
                        {props.resname}
                      </span>
                    </h6>
                    <hr />

                    <h6 className="font-weight-light">
                      Location:
                      <span class=" font-weight-bold green-text ml-2">
                        {props.address}
                      </span>
                    </h6>
                    <hr />

                    <h6 className="font-weight-light">
                      Phone:
                      <span class=" font-weight-bold green-text ml-2">
                        {props.phone}
                      </span>
                    </h6>
                  </div>
                  <hr />
                  <h6 className="font-weight-light"> Amount :</h6>
                  <h1 className="font-weight-bold green-text">
                    ₦ {props.amount}
                  </h1>
                  <hr />
                  {/* {props.amount} {props.title} {props.id} {props.phone} {usertoken}{" "}
                {props.address} */}
                </div>
                <Alert color="warning">
                  Account Balance : ₦ {walletbalance_th}
                </Alert>
                {/* {props.amount} {props.title} {props.id} {props.phone} {usertoken}
                {props.address} */}
              </div>

              <div class="text-center h5">
                {showalert ? (
                  <>
                    <Alert color="success">{alertt}</Alert>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </section>
        </Modal.Body>
        <Modal.Footer>
          <div class="ml-auto mr-auto text-center">
            {props.amount > walletbalance ? (
              <>
             <Link to="/dashboard/fund-wallet">
                <button type="button" class="btn btn-danger  btn my-0">
                  Fund Wallet
                </button>
                </Link>
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
                    <button onClick={props.onHide} class="btn btn-red">
                      {" "}
                      Close
                    </button>
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

export default FoodPayWithWallet;
