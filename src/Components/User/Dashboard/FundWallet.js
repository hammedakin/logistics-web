import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { usePaystackPayment } from "react-paystack";
import { Spinner, Alert } from "reactstrap";



const FundWallet = () => {
  const [usertoken, setusertoken] = useState("");
  const [amount, setamount] = useState("");
  const [message, setmessage] = useState("");
  const [status, setstatus] = useState("");
  const [reference, setreference] = useState("");
  const [transaction, settransaction] = useState("");
  const [alert, setalert] = useState("");
  const [showalert, setshowalert] = useState(false);
  let history = useHistory() 


  const config = {
    reference: new Date().getTime().toString(),
    email: localStorage.getItem('eclemail'),
    amount: Number(amount) * 100,
    publicKey: "pk_test_e7c207ebc76888253b867c7f9bf43a5042459bf0",
  };
  
  // you can call this function anything
  const onSuccess = (reference) => {
      if(usertoken, amount){
        const data = new FormData();
        data.append("usertoken", localStorage.getItem('eclusertoken'));
        data.append("amount", amount);
        data.append("apptoken", "T9H1E6KUYM");
  
        axios
        .post(`https://test.api.eclipse.com.ng/v1/fund-wallet`, data, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data);
          setusertoken(res.data.usertoken)
          setamount(res.data.amount)
          setmessage(res.data.message)
          setstatus(res.data.status)
          settransaction(res.data.transaction)
          setreference(res.data.reference)
          history.push("/dashboard")
          setshowalert(true);
          window.location.reload(true);
        })
      }else{
         setshowalert(true)
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
      <div className="col-md-10 py-4 white ml-auto mr-auto shadow" style={{borderRadius: "1rem"}}>

        <div className="container">
          <h5 className="text-center "> FUND WALLET</h5>
          <div className="form">
          {showalert ? (
                <>
                  <Alert color="success">{alert}</Alert>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default FundWallet;
