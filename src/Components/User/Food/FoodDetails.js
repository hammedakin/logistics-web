import React, { useEffect, useState } from "react";
import axios from 'axios'
import UserNavbar from "../../Navbar/UserNavbar";
import PayWithPayStack from "../SendPackage/PayWithPayStack";
import PayWithWallet from "../SendPackage/PayWithWallet";

const FoodDetails = (props) => {
  const [id, setid] = useState("");
  const [title, settitle] = useState("");
  const [des, setdes] = useState("");
  const [resname, setresname] = useState("");
  const [resloc, setresloc] = useState("");
  const [dfee, setdfee] = useState("");
  const [price, setprice] = useState("12,000");
  const [amount, setamount] = useState("");


  const fetchFoodDetails = () => {
    // const data = {
    //   apptoken: "T9H1E6KUYM",
    //   fid: props.match.params.id
    // };
    // axios
    //   .get(`https://test.api.eclipse.com.ng/v1/get-food-data`, { params: data })
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
          setdes(response.data.description);
          setresname(response.data.resname);
          setresloc(response.data.reslocation);
          setdfee(response.data.dfee);
          setprice(response.data.price_th);
          setamount(response.data.amount);

          console.log(response.data);
        }
      });
    };
    useEffect(() => {
      fetchFoodDetails();
    }, 0);


  // pay with wallet modal
  const [showremove, setShowremove] = useState(false);
  const handleCloseremove = () => setShowremove(false);
  const handleShowremove = () => setShowremove(true);
  const [foodid, setfoodid] = useState("");

  function workModal(token) {
    // console.log(token)
    setfoodid(token);
    handleShowremove();
  }

  // pay with paystack modal
  const [showremove1, setShowremove1] = useState(false);
  const handleCloseremove1 = () => setShowremove1(false);
  const handleShowremove1 = () => setShowremove1(true);

  function workModal1(token) {
    // console.log(token)
    setfoodid(token);
    handleShowremove1();
  }

  return (
    <>
      <UserNavbar />
      <div className="send-package">
        <div className="food-details">
          <div className="container">
            <div className="row justify-content-center">
              {/* Image */}
              <div className="col-md-6 curve mb-4">
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
                  <div class="container mt-4">
                    <h6>Title: {title}</h6>
                    <hr />
                    <h6>Description: {des} </h6>
                    <hr />
                    <h6>price: ₦ {price}</h6>
                    <hr />
                    <h6>Restaurant: {resname}</h6>
                    <hr />
                    <h6>Location: {resloc}</h6>
                    <hr />
                    <h6>Delivery Fee: ₦ {dfee}</h6>
                    <hr />
                  </div>
                </div>
              </div>
              {/* Details */}

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
                              // onChange={(e) => setsendermail(e.target.value)}
                              // value={sendermail}
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
                              // onChange={(e) => setsendermail(e.target.value)}
                              // value={sendermail}
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

              <div className="col-md-6 curve mb-4">
                <div className="card h-100">
                  <div className="card-header">
                    <h6 className="font-weight-bold">PAYMENT DETAILS </h6>
                  </div>
                  <div className="card-body text-center">
                    <h4 className="mb-4">
                      <span className="bolder-text h6">Amount: </span>
                    </h4>
                    <h1 className="bolder-text">₦ {price} </h1>
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

                {/* Payment */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pay With Wallet Modal */}
      <PayWithPayStack
        show={showremove1}
        onHide={handleCloseremove1}
        animation={false}
        id={foodid}
        amount={price}
      />
      {/* Pay With Wallet Modal */}

      {/* Pay With Wallet Modal */}
      <PayWithWallet
        show={showremove}
        onHide={handleCloseremove}
        animation={false}
        id={foodid}
        amount={price}
      />
      {/* Pay With Wallet Modal */}
    </>
  );
};

export default FoodDetails;
