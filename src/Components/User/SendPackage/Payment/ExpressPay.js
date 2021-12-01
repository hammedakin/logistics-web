import React, { useEffect, useState } from "react";
import { Alert } from "reactstrap";
import ExPayWithPayStack from "../Payment/ExPayWithPayStack";
import ExPayWithWallet from "../Payment/ExPayWithWallet";


const ExpressPay = (props) => {
  console.log(props)  

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
                    <h1 className="bolder-text">₦ {props.expressth}</h1>
                  </div>

                  {props.express === "0" ? (
                    <div className="mx-3 text-center">

                     <Alert color="success">
                     Sorry!, Express Payment is not avialable for this order.
                     </Alert>
                     </div>
                  ) : (
                    <>
  {props.status === "paid" ? (
                    <>
                    <div className="mx-3 text-center">
                    <Alert color="success">
                    Payment Successful 
                    </Alert>
                    </div>
                    </>
                  ) : (
                    <>
                  <div className="text-center invoice-btn">
                    <button
                      class="btn w-75"
                      onClick={(e) => workModal1(props.trackid)}
                    >
                      {" "}
                      pay with paystack
                    </button>
                    <button
                      class="btn w-75"
                      onClick={(e) => workModal(props.trackid)}
                    >
                      {" "}
                      pay with wallet
                    </button>
                  </div>
                    </>
                  )}
                    </>
                  )}
                

    
      {/* Pay With Wallet Modal */}
      <ExPayWithPayStack
        show={showremove1}
        onHide={handleCloseremove1}
        animation={false}
        trackid={trackingid}
        amount={props.express}
        amountth={props.expressth}
        type={props.type}
      />
      {/* Pay With Wallet Modal */}

      {/* Pay With Wallet Modal */}
      <ExPayWithWallet
        show={showremove}
        onHide={handleCloseremove}
        animation={false}
        trackid={trackingid}
        amount={props.express}
        amountth={props.expressth}
        type={props.type}
      />
      {/* Pay With Wallet Modal */}
    
                 
    </> 
    
    );
}
 
export default ExpressPay;