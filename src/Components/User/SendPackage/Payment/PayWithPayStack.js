import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { usePaystackPayment } from "react-paystack";
import { useHistory } from "react-router";

const PayWithPayStack = (props) => {
  const [apptoken, setapptoken] = useState(process.env.REACT_APP_APPTOKEN);
  const [endpoint, setendpoint] = useState(process.env.REACT_APP_ENDPOINT);
  const [publickey, setpublickey] = useState(process.env.REACT_APP_PAYSTACK_PUBLICKEY);
  
  console.log(props)
  const [usertoken, setusertoken] = useState(localStorage.getItem("eclusertoken"));
  const [trackid, settrackid] = useState(props.trackid);
  const [type, settype] = useState(props.type);
  const [amount, setamount] = useState(props.price);
  const [message, setmessage] = useState("");
  const [status, setstatus] = useState("");
  const [ref, setref] = useState("");
  const [transaction, settransaction] = useState("");

  let history = useHistory();

  const config = {
    reference: new Date().getTime().toString(),
    email: localStorage.getItem("eclemail"),
    amount: Number(props.amount) * 100,
    publicKey: publickey,
  };

  // you can call this function anything
  const onSuccess = (reference) => {
    if ((usertoken, props.trackid, props.amount, props.type)) {
      const data = new FormData();
      data.append("usertoken", usertoken);
      data.append("trackid", props.trackid);
      data.append("trxid", reference.transaction);
      data.append("price", props.amount);
      data.append("ref", reference.ref);
      data.append("apptoken", apptoken);

      axios
        .post(`${endpoint}/v1/pay-order-card`, data, {
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
            pathname: `/send-package/invoice/${res.data.trackid}`,
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

        <Modal.Body style={{ backgroundColor: "transparent!important" }}>
        <Modal.Header closeButton></Modal.Header>

          <section class=" ">
            <div class="container">
              <div class="text-center">
                <h6 className="font-weight-light">
                  You are about to make payment for this invoice
                </h6>
                <h5>
                  <span class=" font-weight-bold green-text">
                    {props.trackid}
                  </span>
                </h5>

                <h6 className="font-weight-light"> Amount :</h6>
                <h1 className="font-weight-bold green-text">
                  {" "}
                  ₦ {props.amountth}
                </h1>
                {props.amountth} {props.trackid} {props.type} {usertoken}
              </div>

            </div>
          </section>
        </Modal.Body>
        <Modal.Footer>
          <div class="ml-auto mr-auto text-center">
            <PaystackHookExample />
            <button onClick={props.onHide} class="btn btn-red"> Close</button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PayWithPayStack;
