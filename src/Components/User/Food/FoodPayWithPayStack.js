import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { usePaystackPayment } from "react-paystack";
import { Spinner } from "reactstrap";
import { useHistory } from "react-router";

const FoodPayWithPayStack = (props) => {
  const [apptoken, setapptoken] = useState(process.env.REACT_APP_APPTOKEN);
  const [endpoint, setendpoint] = useState(process.env.REACT_APP_ENDPOINT);
  const [publickey, setpublickey] = useState(
    process.env.REACT_APP_PAYSTACK_PUBLICKEY
  );

  const [load, setload] = useState(false);
  let history = useHistory();
  const [usertoken, setusertoken] = useState(
    localStorage.getItem("eclusertoken")
  );

  const config = {
    reference: new Date().getTime().toString(),
    email: localStorage.getItem("eclemail"),
    amount: Number(props.amount) * 100,
    publicKey: publickey,
  };

  // you can call this function anything
  const onSuccess = (reference) => {
    if ((usertoken, props.id, props.amount, props.phone, props.address)) {
      setload(true);

      const data = new FormData();
      data.append("usertoken", usertoken);
      data.append("fid", props.id);
      data.append("price", props.amount);
      data.append("phone", props.phone);
      data.append("location", props.address);

      data.append("apptoken", apptoken);

      axios
        .post(`${endpoint}/v1/order-food`, data, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.message === 'Your food has been ordered') {
            setload(false);
            history.push({
              pathname: `/food/invoice/${res.data.orderid}`,
              state: res.data,
            });
            alert(res.data.message);
          } else {
            setload(false);
          }
        })
        .catch((error) => {
          console.log(error);
          setload(false);
        });
    } else {
      setload(false);
    }
    console.log(reference);
  };
  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment(config);
    return (
      <button
        type="button"
        class="btn btn-success my-0"
        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}
      >
        pay with paystack
      </button>
    );
  };

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
                {load ? (
                  <>
                    <Spinner color="success" />
                    <h5 className="font-weight-light">
                      Please wait for your transaction is processing{" "}
                    </h5>
                    <h6> Do not refresh page!!! </h6>
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </div>
            </div>
          </section>
        </Modal.Body>
        <Modal.Footer>
          <div class="ml-auto mr-auto text-center">
            <PaystackHookExample />
            <button onClick={props.onHide} class="btn btn-red">
              {" "}
              Close
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FoodPayWithPayStack;
