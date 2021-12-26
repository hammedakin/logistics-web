import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { Spinner, Alert } from "reactstrap";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import img from "../img/icons.png";
import del from "../img/recycle.png";
import { ToastContainer, toast } from "react-toastify";

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

  const [load, setload] = useState(false);
  const [notifyy, setnotifyy] = useState("");

  const notify = () => toast(`${notifyy}`);

  const [issending, setissending] = useState(false);
  const [showalert, setshowalert] = useState(false);

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
  }, [0]);

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
                    <Spinner color="danger" />
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
                      class="mt-3 font-weight-normal mb-3"
                      style={{ color: "#CCCCCC" }}
                    >
                      Cart is empty ...
                    </h5>
                    <Link to="/food">
                      <button class="btn btn-success"> Order Food !!! </button>
                    </Link>
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
                    </div>
                  </section>
                </Modal.Body>
                <Modal.Footer>
                  <div class="ml-auto mr-auto text-center">
                    <Link to="/food/cart/checkout">
                      <button type="button" class="btn btn-success my-0">
                        Proceed to Checkout
                      </button>
                    </Link>
                  </div>
                </Modal.Footer>
              </>
            )}
          </>
        )}
      </Modal>
      <ToastContainer />
    </>
  );
};

export default FoodCart;
