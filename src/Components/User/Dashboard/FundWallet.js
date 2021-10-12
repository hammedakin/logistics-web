import React, { useState } from "react";
import { usePaystackPayment } from "react-paystack";
import { Spinner, Alert } from "reactstrap";

const config = {
  reference: new Date().getTime().toString(),
  email: "user@example.com",
  amount: 20000,
  publicKey: "pk_test_e7c207ebc76888253b867c7f9bf43a5042459bf0",
};

// you can call this function anything
const onSuccess = (reference) => {
  // Implementation for whatever you want to do with reference and after success call.
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
    <div>
      <button
        class="btn btn-green"
        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}
      >
        Pay with Paystack{" "}
      </button>
    </div>
  );
};

const FundWallet = () => {

//   const [mail, setmail] = useState("");
//   const [amount, setamount] = useState("");


  return (
    <>
      <section className="fundwallet">
        <div className="container">
          <h5 className="text-center "> FUND WALLET</h5>
          <div className="form">

          <form>
                    <div className="row justify-content-center">
                      <div className="col-md-6 ">
                        <label> Amount </label>

                        <div className="input-group">
                          <input
                            type="email"
                            className=" input-style"
                            placeholder="Enter Amount"
                            // onChange={(e) => setmail(e.target.value)}
                            // value={mail}
                            required
                          />
                        </div>
                      </div>

                      </div>

               
                  </form>
                  </div>

          <div className="text-center">
            <PaystackHookExample />
          </div>
        </div>
      </section>
    </>
  );
};

export default FundWallet;
