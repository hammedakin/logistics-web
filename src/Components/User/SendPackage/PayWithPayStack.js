import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { usePaystackPayment } from "react-paystack";
import { useHistory } from "react-router";

const PayWithPayStack = (props) => {
  const [usertoken, setusertoken] = useState("");
  const [trackid, settrackid] = useState(props.trackid);
  const [type, settype] = useState(props.type);
  const [amount, setamount] = useState(props.Price);
  const [message, setmessage] = useState("");
  const [status, setstatus] = useState("");
  const [ref, setref] = useState("");
  const [transaction, settransaction] = useState("");

  let history = useHistory();

  const config = {
    reference: new Date().getTime().toString(),
    email: localStorage.getItem("email"),
    amount: Number(props.amount) * 100,
    publicKey: "pk_test_e7c207ebc76888253b867c7f9bf43a5042459bf0",
  };

  // you can call this function anything
  const onSuccess = (reference) => {
    if ((usertoken, trackid, amount, type)) {
      const data = new FormData();
      data.append("usertoken", localStorage.getItem("usertoken"));
      data.append("trackid", props.trackid);
      data.append("trxid", reference.transaction);
      data.append("price", props.amount);
      data.append("ref", reference.ref);
      data.append("apptoken", "T9H1E6KUYM");

      axios
        .post(`https://test.api.eclipse.com.ng/v1/pay-order-card`, data, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data);
          setusertoken(res.data.usertoken);
          setamount(res.data.amount);
          setmessage(reference.message);
          setstatus(reference.status);
          settransaction(reference.transaction);
          setref(reference.reference);
          settrackid(res.data.trackid);
          // setamount(res.data.amount);
          settype(res.data.type);
        
          history.push({
            pathname: `/dashboard`,
            state: res.data,
          });
          window.location.reload(true);
          alert(res.data.message);
        });
    } else {
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
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body style={{ backgroundColor: "transparent!important" }}>
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
              </div>

              <div class="text-center h5"></div>
            </div>
          </section>
        </Modal.Body>
        <Modal.Footer>
          <div class="ml-auto mr-auto">
            <PaystackHookExample />
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PayWithPayStack;
