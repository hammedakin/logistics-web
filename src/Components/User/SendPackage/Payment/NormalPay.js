import React, { useEffect, useState } from "react";
import { Alert } from "reactstrap";
import PayWithPayStack from "../Payment/PayWithPayStack";
import PayWithWallet from "../Payment/PayWithWallet";

const NormalPay = (props) => {
  console.log(props);

  // pay with wallet modal
  const [showremove, setShowremove] = useState(false);
  const handleCloseremove = () => setShowremove(false);
  const handleShowremove = () => setShowremove(true);
  const [trackingid, settrackingid] = useState("");

  function workModal(token) {
    settrackingid(token);
    handleShowremove();
  }

  // pay with paystack modal
  const [showremove1, setShowremove1] = useState(false);
  const handleCloseremove1 = () => setShowremove1(false);
  const handleShowremove1 = () => setShowremove1(true);

  function workModal1(token) {
    settrackingid(token);
    handleShowremove1();
  }

  return (
    <>
      <div className="card-body text-center">
        <h4 className="mb-4">
          <span className="bolder-text h6">Amount: </span>
        </h4>
        <h1 className="bolder-text">₦ {props.priceth}</h1>
      </div>
      {props.status === "paid" ? (
        <>
          <div className="mx-3 text-center">
            <Alert color="success">Payment Successful</Alert>
          </div>
        </>
      ) : (
        <>
          <div className="text-center invoice-btn">
            <button class="btn w-75" onClick={(e) => workModal1(props.trackid)}>
              {" "}
              pay with paystack
            </button>
            <button class="btn w-75" onClick={(e) => workModal(props.trackid)}>
              {" "}
              pay with wallet
            </button>
          </div>
        </>
      )}

      {/* Pay With Wallet Modal */}
      <PayWithPayStack
        show={showremove1}
        onHide={handleCloseremove1}
        animation={false}
        trackid={trackingid}
        amount={props.price}
        amountth={props.priceth}
        type={props.type}
      />
      {/* Pay With Wallet Modal */}

      {/* Pay With Wallet Modal */}
      <PayWithWallet
        show={showremove}
        onHide={handleCloseremove}
        animation={false}
        trackid={trackingid}
        amount={props.price}
        amountth={props.priceth}
        type={props.type}
      />
      {/* Pay With Wallet Modal */}
    </>
  );
};

export default NormalPay;
