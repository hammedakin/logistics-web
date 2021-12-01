import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { usePaystackPayment } from "react-paystack";
import { useHistory } from "react-router";

const FoodPayWithPayStack = (props) => {
  const [usertoken, setusertoken] = useState(localStorage.getItem("usertoken"));
  // const [oid, setoid] = useState("");
  // const [fid, setfid] = useState("");
  // const [price, setprice] = useState("");
  // const [phone, setphone] = useState("");
  // const [address, setaddress] = useState("");
  // const [message, setmessage] = useState("");
  // const [status, setstatus] = useState("");
  // const [ref, setref] = useState("");
  // const [transaction, settransaction] = useState("");

  let history = useHistory();

  const config = {
    reference: new Date().getTime().toString(),
    email: localStorage.getItem("email"),
    amount: Number(props.price) * 100,
    publicKey: "pk_test_e7c207ebc76888253b867c7f9bf43a5042459bf0",
  };

  // you can call this function anything
  const onSuccess = (reference) => {
    if ((usertoken, props.id, props.price, props.phone, props.address)) {
      const data = new FormData();
      data.append("usertoken", usertoken);
      data.append("fid", props.id);
      data.append("price", props.price);
      data.append("phone", props.phone);
      data.append("location", props.address);
      // data.append("trxid", reference.transaction);
      // data.append("ref", reference.ref);
      data.append("apptoken", "T9H1E6KUYM");

      axios
        .post(`https://test.api.eclipse.com.ng/v1/order-food`, data, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data);
          // setusertoken(res.data.usertoken);
          // setfid(res.data.fid);
          // setprice(res.data.price);
          // setphone(res.data.phone);
          // setaddress(res.data.location);
          // setmessage(reference.message);
          // setstatus(reference.status);
          // settransaction(reference.transaction);
          // setref(reference.reference);

          history.push({
            pathname: `/food/invoice/${res.data.orderid}`,
            state: res.data,
          });
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
                  ₦ {props.priceth}
                </h1>
                <hr />
                {props.price} {props.title} {props.id} {props.phone} {usertoken}{" "}
                {props.address}
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
