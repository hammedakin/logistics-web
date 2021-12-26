import React, { useEffect, useState } from "react";
import axios from "axios";
import UserNavbar from "../../../Navbar/UserNavbar";
import { Alert } from "reactstrap";
import CartPayWithWallet from "./CartPayWithWallet";
import CartPayWithPayStack from "./CartPayWithPayStack";
import del from "../img/recycle.png";
import img from "../img/icons.png";
import { ToastContainer, toast } from "react-toastify";
import { Spinner } from "reactstrap";
import { Link } from "react-router-dom";

const CartCheckout = (props) => {
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

  const [load, setload] = useState(false);
  const [notifyy, setnotifyy] = useState("");

  const notify = () => toast(`${notifyy}`);

  const [issending, setissending] = useState(false);
  const [showalert, setshowalert] = useState(false);

  const [fill, setfill] = useState(false);
  const [phone, setphone] = useState(localStorage.getItem("eclphone"));
  const [address, setaddress] = useState("");

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
  }, 0);

  const cartfood = allcartfood.map((item, i) => {
    // Delete Order
    const DelOrder = () => {
      setload(true);
      const data = new FormData();
      data.append("oid", item.id);
      data.append("apptoken", apptoken);

      axios
        .post(`${endpoint}/v1/remove-cart-food`, data, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          if (res.data.success == false) {
            console.log(res.data);
            setload(false);
            setshowalert(true);
            setnotifyy(res.data.message);
            // notify();
            toast(res.data.message);
          } else {
            fetchcartfood();
            fetchCartBal();
            console.log(res.data);
            setload(false);
            setshowalert(true);
            setnotifyy(res.data.message, "error");
            // notify();
            toast(res.data.message);
          }
        })
        .catch((error) => {
          console.log(error.response);
          setload(false);
          setshowalert(true);
          setnotifyy("Check your Network Connection!!!");
          // notify();
          toast(error.message);
        });
    };
    // Delete Order

    return (
      <>
        <div className="first mt-3 black-text" key={item.id}>
          <div className="row ">
            <div className="col-7 text-left ">
              <p className="">{item.title}</p>
            </div>
            <div className="col-3 ml-auto">
              <p className="bold-text" className="float-right">
                ₦ {item.priceth}
              </p>
            </div>
            {/* <DelCartOrder oid={item.id}/> */}
            <div className="col-2 ml-auto">
              {load ? (
                <>
                  <a class="" disabled>
                    <h6 className="font-weight-bolder">
                    <Spinner color="danger" size="sm"/> </h6>
                  </a>
                </>
              ) : (
                <>
                  <a class="" onClick={(e) => DelOrder(e)}>
                    <img src={del} width="20px" />
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
        <hr className="p-0 m-0" />
      </>
    );
  });

  //   Fetch Cart Balance
  const fetchCartBal = () => {
    const data = new FormData();
    data.append("usertoken", usertoken);
    data.append("apptoken", apptoken);

    axios
      .post(`${endpoint}/v1/get-cart-total-amount`, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
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

  // Fill Error
  const Fill = () => {
    if (address == "") {
      setfill(true);
    } else {
      setfill(false);
    }
  };
  // Fill Error

  // pay with wallet modal
  const [showremove, setShowremove] = useState(false);
  const handleCloseremove = () => setShowremove(false);
  const handleShowremove = () => setShowremove(true);
  // const [id, setid] = useState("");

  function workModal(token) {
    // console.log(token)
    // setid(token);
    handleShowremove();
  }

  // pay with paystack modal
  const [showremove1, setShowremove1] = useState(false);
  const handleCloseremove1 = () => setShowremove1(false);
  const handleShowremove1 = () => setShowremove1(true);

  function workModal1(token) {
    // console.log(token)
    // setid(token);
    handleShowremove1();
  }

  return (
    <>
      <UserNavbar />
      <div className="send-package">
        <div className="food-details">
          <div className="container">
            <h5> CART CHECKOUT PAGE <span className="h2"> 🍲</span> </h5>

            {isloading ? (
              <div className="text-center my-5">
                <Spinner color="success" />
              </div>
            ) : (
              <>
                {cartfood == "" ? (
                  <>
                    <div className="mt-5">
                      <div className="mt-5 text-center">
                        <img src={img} width="100px" />
                        <h5
                          class="mt-3 font-weight-normal mb-3"
                          style={{ color: "#CCCCCC" }}
                        >
                          Cart is empty ...
                        </h5>
                        <Link to="/food">
                          <button class="btn btn-success">
                            {" "}
                            Order Food !!!{" "}
                          </button>
                        </Link>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="row justify-content-center">
                      <div className="col-md-10">
                        {/* Cart  */}
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
                                      ₦ {cartbal_th}
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
                              ₦ {carttotal_th}
                            </h4>
                            <hr />
                          </div>
                        </div>

                        {/* Cart */}
                      </div>
                      {/* Delivery Details */}
                      <h5 className="mt-4"> DELIVERY DETAILS</h5>

                      <div className="col-md-12 mb-4 curve">
                        <div className="card">
                          <div className="form mx-4">
                            <form>
                              <div className="row">
                                <div className="col-md-6 ">
                                  <label> Phone Number </label>

                                  <div className="input-group">
                                    <input
                                      type="tel"
                                      className=" input-style"
                                      placeholder="Enter Phone Number *"
                                      onChange={(e) => setphone(e.target.value)}
                                      value={phone}
                                      required
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6 ">
                                  <label> Address </label>

                                  <div className="input-group">
                                    <input
                                      type="text"
                                      className=" input-style"
                                      placeholder="Enter Address *"
                                      onChange={(e) =>
                                        setaddress(e.target.value)
                                      }
                                      value={address}
                                      required
                                    />
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      {/* Delivery Details */}

                      {/* Payment */}
                      {address == "" ? (
                <>
                  <div className="col-md-6 curve mb-4">
                    <div className="card h-100">
                      <div className="card-header">
                        <h6 className="font-weight-bold text-center">
                          PAYMENT DETAILS{" "}
                        </h6>
                      </div>
                      <div className="card-body text-center">
                        <h4 className="mb-4">
                          <span className="bolder-text h6">Amount: </span>
                        </h4>
                        <h1 className="bolder-text">₦ {carttotal_th}</h1>
                      </div>
                      <div className="text-center px-3">
                        {fill ? (
                          <Alert color="success">
                            {" "}
                            Input Phone and Address{" "}
                          </Alert>
                        ) : (
                          <> </>
                        )}{" "}
                      </div>
                      <div className="text-center invoice-btn">
                        <button class="btn w-75" onClick={Fill}>
                          {" "}
                          pay with paystack
                        </button>
                        <button class="btn w-75" onClick={Fill}>
                          {" "}
                          pay with wallet
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-md-6 curve mb-4">
                    <div className="card h-100">
                      <div className="card-header">
                        <h6 className="font-weight-bold text-center">
                          PAYMENT DETAILS{" "}
                        </h6>
                      </div>
                      <div className="card-body text-center">
                        <h4 className="mb-4">
                          <span className="bolder-text h6">Amount: </span>
                        </h4>
                        <h1 className="bolder-text">₦ {carttotal_th}</h1>
                      </div>

                      <div className="text-center invoice-btn">
                        <button
                          class="btn w-75"
                          onClick={(e) => workModal1()}
                        >
                          {" "}
                          pay with paystack
                        </button>
                        <button class="btn w-75" onClick={(e) => workModal()}>
                          {" "}
                          pay with wallet
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}

                      {/* Payment */}
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Pay With Paystack Modal */}
      <CartPayWithPayStack
        show={showremove1}
        onHide={handleCloseremove1}
        animation={false}
        amount={carttotal}        
        amountth={carttotal_th}
        phone={phone}
        address={address}
      />
      {/* Pay With Paystack Modal */}

      {/* Pay With Wallet Modal */}
      <CartPayWithWallet
        show={showremove}
        onHide={handleCloseremove}
        animation={false}
        amount={carttotal}        
        amountth={carttotal_th}
        phone={phone}
        address={address}
      />
      {/* Pay With Wallet Modal */}
    </>
  );
};

export default CartCheckout;
