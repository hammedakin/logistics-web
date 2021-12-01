import React, { useEffect, useState } from "react";
import axios from 'axios'
import UserNavbar from "../../Navbar/UserNavbar";
import FoodPayWithPayStack from "../Food/FoodPayWithPayStack";
import FoodPayWithWallet from "../Food/FoodPayWithWallet";
import { Alert } from "reactstrap";

const FoodDetails = (props) => {
  const [id, setid] = useState("");
  const [title, settitle] = useState("");
  const [des, setdes] = useState("");
  const [resname, setresname] = useState("");
  const [resloc, setresloc] = useState("");
  const [dfee, setdfee] = useState("");
  const [price, setprice] = useState("");
  const [priceth, setpriceth] = useState("");
  const [amount, setamount] = useState("");
  const [fill, setfill] = useState(false);

  const [phone, setphone] = useState(localStorage.getItem('phone'));
  const [address, setaddress] = useState("");

  const fetchFoodDetails = () => {
 
    const data = new FormData();
    data.append("apptoken", "T9H1E6KUYM");
    data.append("id", props.match.params.id);

    axios
      .post(`https://test.api.eclipse.com.ng/v1/get-food-data`, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.data.success == false) {
          console.log(response.data);
        } else {
          settitle(response.data.title);
          setid(response.data.fid);
          setdes(response.data.description);
          setresname(response.data.resname);
          setresloc(response.data.reslocation);
          setdfee(response.data.dfee);
          setpriceth(response.data.price_th);
          setprice(response.data.price);
          setamount(response.data.amount);

          console.log(response.data);
        }
      });
    };
    useEffect(() => {
      fetchFoodDetails();
    }, 0);

    // Fill Error
    const Fill = () => {
      if (address == ""){
        setfill(true)
      } else {
        setfill(false)
      }
    }
    // Fill Error

  // pay with wallet modal
  const [showremove, setShowremove] = useState(false);
  const handleCloseremove = () => setShowremove(false);
  const handleShowremove = () => setShowremove(true);
  // const [id, setid] = useState("");

  function workModal(token) {
    // console.log(token)
    setid(token);
    handleShowremove();
  }

  // pay with paystack modal
  const [showremove1, setShowremove1] = useState(false);
  const handleCloseremove1 = () => setShowremove1(false);
  const handleShowremove1 = () => setShowremove1(true);

  function workModal1(token) {
    // console.log(token)
    setid(token);
    handleShowremove1();
  }

  return (
    <>
      <UserNavbar />
      <div className="send-package">
        <div className="food-details">
          <div className="container">
            <h5> FOOD DETAILS </h5>
            <div className="row justify-content-center">
              {/* Image */}
              <div className="col-md-6 curve mb-4 align-self-center">
                <div className="card h-100">
                  <img
                    src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80"
                    width="100%"
                    alt="food"
                  />
                </div>
              </div>
              {/* Image */}

              {/* Details */}
              <div className="col-md-6 curve mb-4">
                <div className="card h-100">
                  <div class="container mt-4 details">
                    <h6>Name:
                      <span class="font-weight-bold"> {title} </span> </h6>
                    <hr />
                    <h6>Description:
                       <span class="font-weight-bold"> {des} </span>  </h6>
                    <hr />
                    <h6>Price: 
                     <span class="font-weight-bold"> ₦{priceth} </span> </h6>
                    <hr />
                    <h6>Restaurant:
                    <span class="font-weight-bold">
                      {resname} </span> </h6>
                    <hr />
                    <h6>Location:
                    <span class="font-weight-bold">  {resloc} </span></h6>
                    <hr />
                    <h6>Delivery Fee:<span class="font-weight-bold"> {dfee} </span></h6>
                    <hr />
                  </div>
                </div>
              </div>
              {/* Details */}

              <h5 className="mt-4"> MAKE AN ORDER </h5>

              {/* Delivery Details */}

              <div className="col-md-12 mb-4 curve">
                <div className="card">
                  <div className="form mx-4">
                    <form>
                      <div className="row">
                        <div className="col-md-6 ">
                          <label> Phone Number </label>

                          <div className="input-group">
                            <input
                              type="tel"
                              className=" input-style"
                              placeholder="Enter Phone Number *"
                              onChange={(e) => setphone(e.target.value)}
                              value={phone}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6 ">
                          <label> Address </label>

                          <div className="input-group">
                            <input
                              type="text"
                              className=" input-style"
                              placeholder="Enter Address *"
                              onChange={(e) => setaddress(e.target.value)}
                              value={address}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* Delivery Details */}

              {/* Payment */}
              {address == "" ? (
                <>
              <div className="col-md-6 curve mb-4">
                <div className="card h-100">
                  <div className="card-header">
                    <h6 className="font-weight-bold text-center">PAYMENT DETAILS </h6>
                  </div>
                  <div className="card-body text-center">
                    <h4 className="mb-4">
                      <span className="bolder-text h6">Amount: </span>
                    </h4>
                    <h1 className="bolder-text">₦ {priceth}</h1>
                  </div>
                  <div className="text-center px-3">
                  {fill ? (
                  <Alert color="success"> Input Phone and Address </Alert>
                  ): (
                    <> </>
                  )} </div>
                  <div className="text-center invoice-btn">
                    <button class="btn w-75" onClick={Fill}>
                      {" "}
                      pay with paystack
                    </button>
                    <button class="btn w-75" onClick={Fill}>
                      {" "}
                      pay with wallet
                    </button>
                  </div>
                </div>
              </div>
                </>
              ) : (
                <>
              <div className="col-md-6 curve mb-4">
                <div className="card h-100">
                  <div className="card-header">
                    <h6 className="font-weight-bold text-center">PAYMENT DETAILS </h6>
                  </div>
                  <div className="card-body text-center">
                    <h4 className="mb-4">
                      <span className="bolder-text h6">Amount: </span>
                    </h4>
                    <h1 className="bolder-text">₦ {priceth}</h1>
                  </div>
                 
                  <div className="text-center invoice-btn">
                    <button class="btn w-75" onClick={(e) => workModal1(id)}>
                      {" "}
                      pay with paystack
                    </button>
                    <button class="btn w-75" onClick={(e) => workModal(id)}>
                      {" "}
                      pay with wallet
                    </button>
                  </div>
                </div>
              </div>
                </>
              )}

            
                {/* Payment */}

            </div>
          </div>
        </div>
      </div>

      {/* Pay With Wallet Modal */}
      <FoodPayWithPayStack
        show={showremove1}
        onHide={handleCloseremove1}
        animation={false}
        id={id}
        title={title}
        price={price}
        priceth={priceth}
        phone={phone}
        address={address}
        resname={resname}
      />
      {/* Pay With Wallet Modal */}

      {/* Pay With Wallet Modal */}
      <FoodPayWithWallet
        show={showremove}
        onHide={handleCloseremove}
        animation={false}
        id={id}
        title={title}
        price={price}
        priceth={priceth}
        phone={phone}
        address={address}
        resname={resname}
      />
      {/* Pay With Wallet Modal */}
    </>
  );
};

export default FoodDetails;
