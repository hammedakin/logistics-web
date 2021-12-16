import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { usePaystackPayment } from "react-paystack";
import { Spinner, Alert } from "reactstrap";

const FundWallet = () => {
  const [apptoken, setapptoken] = useState(process.env.REACT_APP_APPTOKEN);
  const [endpoint, setendpoint] = useState(process.env.REACT_APP_ENDPOINT);
  const [publickey, setpublickey] = useState(
    process.env.REACT_APP_PAYSTACK_PUBLICKEY
  );

  const [load, setload] = useState(false);

  const [usertoken, setusertoken] = useState("");
  const [amount, setamount] = useState("");
  const [alertt, setalert] = useState("");
  const [showalert, setshowalert] = useState(false);
  let history = useHistory();

  const config = {
    reference: new Date().getTime().toString(),
    email: localStorage.getItem("eclemail"),
    amount: Number(amount) * 100,
    publicKey: publickey,
  };

  // you can call this function anything
  const onSuccess = (reference) => {
    if ((usertoken, amount)) {
      setload(true);

      const data = new FormData();
      data.append("usertoken", localStorage.getItem("eclusertoken"));
      data.append("amount", amount);
      data.append("apptoken", apptoken);

      axios
        .post(`${endpoint}/v1/fund-wallet`, data, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.success === true) {
            setload(false);
            history.push("/dashboard");
            setshowalert(true);
            window.location.reload(true);
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
      setshowalert(true);
      setload(false);
    }
    console.log(reference);
  };
  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
    window.location.reload(true);
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

  return (
    <>
      <section className="fundwallet">
        <div
          className="col-md-10 py-4 white ml-auto mr-auto shadow"
          style={{ borderRadius: "1rem" }}
        >
          <div className="container">
            <h5 className="text-center "> FUND WALLET</h5>

            {load ? (
              <div className="text-center">
                <Spinner color="success" />
                <h5 className="font-weight-light">
                  Please wait for your transaction is processing{" "}
                </h5>
                <h6> Do not refresh page!!! </h6>
              </div>
            ) : (
              <>
                <div className="form">
                  {showalert ? (
                    <>
                      <Alert color="success">{alertt}</Alert>
                    </>
                  ) : (
                    <></>
                  )}

                  <form>
                    <div className="row justify-content-center">
                      <div className="col-md-6 text-center">
                        <label> Amount </label>

                        <div className="input-group">
                          <input
                            type="number"
                            r
                            className=" input-style"
                            placeholder="Enter Amount"
                            onChange={(e) => setamount(e.target.value)}
                            value={amount}
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
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default FundWallet;
