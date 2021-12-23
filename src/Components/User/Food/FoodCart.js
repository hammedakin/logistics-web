import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { Spinner, Alert } from "reactstrap";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import img from "./img/icons.png";

const FoodCart = (props) => {
  const [apptoken, setapptoken] = useState(process.env.REACT_APP_APPTOKEN);
  const [endpoint, setendpoint] = useState(process.env.REACT_APP_ENDPOINT);

  const [allcartfood, setallcartfood] = useState([]);
  const [usertoken, setusertoken] = useState(
    localStorage.getItem("eclusertoken")
  );
  const [count, setcount] = useState(0);

  const [isloading, setisloading] = useState(true);

  const [walletbalance_th, setwalletbalance_th] = useState("");
  const [walletbalance, setwalletbalance] = useState("");

  const [cartbal_th, setcartbal_th] = useState("");
  const [cartbal, setcartbal] = useState("");
  const [carttotal_th, setcarttotal_th] = useState("");
  const [carttotal, setcarttotal] = useState("");
  const [dfee, setdfee] = useState("");

  const [issending, setissending] = useState(false);
  const [showalert, setshowalert] = useState(false);
  const [alertt, setalertt] = useState("");

  //   const WalletPayment = (e) => {
  //     if ((usertoken, props.id, props.amount, props.phone, props.address)) {
  //       setissending(true);

  //       const data = new FormData();
  //       data.append("usertoken", usertoken);
  //       data.append("fid", props.id);
  //       data.append("price", props.amount);
  //       data.append("phone", props.phone);
  //       data.append("location", props.address);
  //       data.append("apptoken", apptoken);

  //       axios
  //         .post(`${endpoint}/v1/order-food-wallet`, data, {
  //           headers: {
  //             "content-type": "multipart/form-data",
  //           },
  //         })
  //         .then((response) => {
  //           if (response.data.message === 'Your food has been ordered') {
  //             setusertoken(response.data.usertoken);

  //             setshowalert(true);
  //             setalertt(response.data.message);
  //             setissending(false);
  //             console.log(response.data);
  //             alert(response.data.message);
  //             history.push(`/food/invoice/${response.data.orderid}`);
  //           } else {
  //             setshowalert(true);
  //             setalertt(response.data.message);
  //             setissending(false);
  //             console.log(response.data);
  //           }
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //           setshowalert(true);
  //           setalertt(error.name, "Check your Network Connection!!!");
  //           setissending(false);
  //         });
  //     } else {
  //       setshowalert(true);
  //       setalertt("Pls, Input Phone Number and Address and Try Again!!!");
  //       setissending(false);
  //     }
  //     e.preventDefault();
  //   };

  // Fetch Balance
  const fetchBal = () => {
    const data = {
      apptoken: apptoken,
      usertoken: usertoken,
    };
    axios
      .get(`${endpoint}/v1/get-wallet-balance`, {
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
  //   Fetch Balance

  const fetchcartfood = () => {
    const data = new FormData();
    data.append("apptoken", apptoken);
    data.append("usertoken", usertoken);

    axios
      .post(`${endpoint}/v1/get-cart-list`, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.data.success === false) {
          console.log(response.data);
          //   console.log(usertoken);
          setisloading(false);
        } else {
          setallcartfood(response.data);
          setisloading(false);

          console.log(response.data);
        }
      })

      .catch((error) => {
        console.log(error.response);
        setisloading(false);
      });
  };
  useEffect(() => {
    fetchcartfood();
  }, [count]);

  const cartfood = allcartfood.map((item, i) => {
    return (
      <>
        <div className="first mt-3 black-text" key={item.id}>
          <div className="row ">
            <div className="col-8 text-left ">
              <p className="">{item.title}</p>
            </div>
            <div className="col-4 ml-auto">
              <p className="bold-text" className="float-right">
                ₦ {item.priceth}
              </p>
            </div>
          </div>
          {/* <div className="row mt-0">
            <div className="col-8 mr-auto">
              <div className="row mt-0 float-left">
                <div className="col-12 mr-auto">
                  <p className="grey-text">
                    Order ID:
                    <span className="black-text"> {item.id} </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-4 ml-auto">
                <p className="grey-text float-right">
                  <small>
                    <i> {item.timeago}</i>
                  </small>
                </p>
              </div>
          </div> */}
        </div>
        <hr className="p-0 m-0" />
      </>
    );
  });

  //   Fetch Cart Balance
  const fetchCartBal = () => {
    const data = {
      apptoken: apptoken,
      usertoken: usertoken,
    };
    axios
      .get(`${endpoint}/v1/get-cart-total-amount`, {
        params: data,
      })
      .then((response) => {
        if (response.data.success === false) {
          console.log(response.data);
          setissending(false);
        } else {
          setcartbal_th(response.data.total_amount_th);
          setcartbal(response.data.total_amount);
          setcarttotal_th(response.data.grand_total_th);
          setcarttotal(response.data.grand_total);
          setdfee(response.data.deliveryfee);
          console.log(response.data);
          setissending(false);
        }
      })
      .catch((error) => {
        console.log(error.response);
        setissending(false);
      });
  };
  useEffect(() => {
    fetchCartBal();
  }, 0);
  //   Fetch Cart Balance

  return (
    <>
      <Modal
        show={props.show}
        onHide={props.onHide}
        backdrop="static"
        keyboard={false}
        centered
      >
        {isloading ? (
          <div className="text-center my-5">
            <Spinner color="success" />
          </div>
        ) : (
          <>
            {cartfood == "" ? (
              <>
                <Modal.Body
                  style={{ backgroundColor: "transparent!important" }}
                >
                  <Modal.Header closeButton></Modal.Header>
                  <div className="mt-5 text-center">
                    <img src={img} width="100px" />
                    <h5
                      class="mt-3 font-weight-normal mb-5"
                      style={{ color: "#CCCCCC" }}
                    >
                      Cart is empty ...
                    </h5>
                  </div>
                </Modal.Body>
              </>
            ) : (
              <>
                <Modal.Body
                  style={{ backgroundColor: "transparent!important" }}
                >
                  <Modal.Header closeButton></Modal.Header>
                  <h6 className="font-weight-bold green-text text-center">
                    PREVIEW YOUR CART
                  </h6>
                  <section class=" ">
                    <div class="container">
                      <div class="text-center">
                        <div class="text-center">
                          <div className="text-left mt-4">
                            <hr />
                          </div>
                          {cartfood}
                          <div
                            className="container p-2 mt-3"
                            style={{
                              background: "whitesmoke",
                              borderRadius: "10px",
                            }}
                          >
                            <div className="first mt-3 green-text">
                              <div className="row ">
                                <div className="col-8 text-left ">
                                  <p className="">Subtotal</p>
                                </div>
                                <div className="col-4 ml-auto">
                                  <p
                                    className="bold-text"
                                    className="float-right"
                                  >
                                    ₦ {carttotal_th}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <hr className="p-0 m-0" />
                            <div className="first mt-3 green-text">
                              <div className="row ">
                                <div className="col-8 text-left ">
                                  <p className="">Delivery Fee</p>
                                </div>
                                <div className="col-4 ml-auto">
                                  <p
                                    className="bold-text"
                                    className="float-right"
                                  >
                                    ₦ {dfee}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h6 className="font-weight-light mt-3"> Total :</h6>
                          <h4 className="font-weight-bold green-text">
                            ₦ {cartbal_th}
                          </h4>
                          <hr />
                        </div>
                        <Alert color="warning">
                          Account Balance : ₦ {walletbalance_th}
                        </Alert>
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
                    {props.amount < walletbalance ? (
                      <>
                        <Link to="/dashboard/fund-wallet">
                          <button
                            type="button"
                            class="btn btn-danger  btn my-0"
                          >
                            Fund Wallet
                          </button>
                        </Link>
                      </>
                    ) : (
                      <>
                        {issending ? (
                          <>
                            <button
                              type="button"
                              class="btn btn-success btn my-0"
                              disabled
                            >
                              processing <Spinner color="light" />
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              type="button"
                              class="btn btn-success my-0"
                              //   onClick={(e) => WalletPayment(e)}
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
              </>
            )}
          </>
        )}
      </Modal>
    </>
  );
};

export default FoodCart;
