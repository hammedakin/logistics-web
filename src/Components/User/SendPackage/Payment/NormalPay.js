import React from 'react';
import { Alert } from "reactstrap";
import PayWithPayStack from "./PayWithPayStack";
import PayWithWallet from "./PayWithWallet";


const NormalPay = (props) => {

  const [status, setstatus] = useState("");
  const [trackid, settrackid] = useState("");
  const [Price, setPrice] = useState("");



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
 
   let statuss
   if (status === "paid") {
   statuss =  <span class="ml-4 px-2 h6 green white-text"><span> Paid </span></span>
   } else if (status === "unpaid") {
    statuss = <span class="ml-2 px-2 h6 yellow"><span> Unpaid </span></span>
   } else {
     <span class="ml-4 px-2 h6 red white-text"><span> Cancelled </span></span>
   }

   
    return (
     <>
      <div className="card-body text-center">
                    <h4 className="mb-4">
                      <span className="bolder-text h6">Amount: </span>
                    </h4>
                    <h1 className="bolder-text">₦ {Price}</h1>
                  </div>
                  {status === "paid" ? (
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
                      onClick={(e) => workModal1(trackid)}
                    >
                      {" "}
                      pay with paystack
                    </button>
                    <button
                      class="btn w-75"
                      onClick={(e) => workModal(trackid)}
                    >
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
        amount={Price}
        type={type}
      />
      {/* Pay With Wallet Modal */}

      {/* Pay With Wallet Modal */}
      <PayWithWallet
        show={showremove}
        onHide={handleCloseremove}
        animation={false}
        trackid={trackingid}
        amount={Price}
        type={type}
      />
      {/* Pay With Wallet Modal */}
    
                 
    </> 
    
    );
}
 
export default NormalPay;