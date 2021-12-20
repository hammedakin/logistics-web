import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { usePaystackPayment } from "react-paystack";
import { Spinner } from "reactstrap";

const ExPayWithPayStack = (props) => {
  console.log(props);
  const [apptoken, setapptoken] = useState(process.env.REACT_APP_APPTOKEN);
  const [endpoint, setendpoint] = useState(process.env.REACT_APP_ENDPOINT);
  const [publickey, setpublickey] = useState(
    process.env.REACT_APP_PAYSTACK_PUBLICKEY
  );

  const [load, setload] = useState(false);

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
    PaystackPayment();
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

  const PaystackPayment = () => {
    if ((usertoken, props.trackid, props.amount, props.type)) {
      const data = new FormData();
      data.append("usertoken", usertoken);
      data.append("trackid", props.trackid);
      // data.append("trxid", reference.transaction);
      data.append("price", props.amount);
      data.append("type", props.type);
      // data.append("ref", reference.ref);
      data.append("apptoken", apptoken);

      axios
        .post(`${endpoint}/v1/pay-order-card-express`, data, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.success === true) {
            setload(false);
            // window.location.reload(true);
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
        {load ? (
          <div className="container text-center py-5">
            <Modal.Body style={{ backgroundColor: "transparent!important" }}>
              <Spinner color="success" />
              <h5 className="font-weight-light">
                Please wait for your transaction is processing{" "}
              </h5>
              <h6> Do not refresh page!!! </h6>
            </Modal.Body>
          </div>
        ) : (
          <>
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
          </>
        )}
      </Modal>
    </>
  );
};

export default ExPayWithPayStack;
