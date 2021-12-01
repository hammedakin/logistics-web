import React, { useEffect, useState } from "react";
import axios from 'axios'
import UserNavbar from "../../Navbar/UserNavbar";

const FoodInvoice = (props) => {
  // console.log(props)
  const [oid, setoid] = useState(props.match.params.orderid);
  const [id, setid] = useState("");
  const [title, settitle] = useState("");
  const [des, setdes] = useState("");
  const [resname, setresname] = useState("");
  const [resloc, setresloc] = useState("");
  const [dfee, setdfee] = useState("");
  const [price, setprice] = useState("");
  const [priceth, setpriceth] = useState("");
  const [amount, setamount] = useState("");
  const [time, settime] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");

  const fetchFoodDetails = () => {
 
    const data = new FormData();
    data.append("apptoken", "T9H1E6KUYM");
    data.append("oid", oid);

    axios
      .post(`https://test.api.eclipse.com.ng/v1/get-food-order-detail`, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.data.success === false) {
          console.log(response.data);
        } else {
          settitle(response.data.food_title);
          // setoid(response.data.oid);
          // setid(response.data.fid);
          setdes(response.data.food_description);
          setresname(response.data.resname);
          setresloc(response.data.reslocation);
          setdfee(response.data.dfee);
          setpriceth(response.data.price_th);
          setprice(response.data.price);
          setamount(response.data.amount);
          settime(response.data.timeago);
          setphone(response.data.phone);
          setaddress(response.data.location);

          console.log(response.data);
        }
      });
    };
    useEffect(() => {
      fetchFoodDetails();
    }, 0);

  // // pay with wallet modal
  // const [showremove, setShowremove] = useState(false);
  // const handleCloseremove = () => setShowremove(false);
  // const handleShowremove = () => setShowremove(true);
  // // const [id, setid] = useState("");

  // function workModal(token) {
  //   // console.log(token)
  //   setid(token);
  //   handleShowremove();
  // }

  // // pay with paystack modal
  // const [showremove1, setShowremove1] = useState(false);
  // const handleCloseremove1 = () => setShowremove1(false);
  // const handleShowremove1 = () => setShowremove1(true);

  // function workModal1(token) {
  //   // console.log(token)
  //   setid(token);
  //   handleShowremove1();
  // }

  return (
    <>
      <UserNavbar />
      <div className="send-package">
        <div className="food-details">
          <div className="container">
            <h5> FOOD ORDER DETAILS </h5>
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
                  <h6>Created:
                    <span class="font-weight-bold">  {time} </span></h6>
                
                    <hr />
                  <h6>Order ID:
                      <span class="font-weight-bold"> Order {oid} </span> </h6>
                    <hr />
                    <h6>Food:
                      <span class="font-weight-bold"> {title} </span> </h6>
                    <hr />
                    <h6>Description:
                       <span class="font-weight-bold"> {des} </span>  </h6>
                    <hr />
                    <h6>Price: 
                     <span class="font-weight-bold"> ₦ {priceth} </span> </h6>
                    <hr />
                    {/* <h6>Restaurant:
                    <span class="font-weight-bold">
                      {resname} </span> </h6>
                    <hr />
                    <h6>Location:
                    <span class="font-weight-bold">  {resloc} </span></h6>
                    <hr />
                    <h6>Delivery Fee:<span class="font-weight-bold"> {dfee} </span></h6>
                    <hr /> */}
                  </div>
                </div>
              </div>
              {/* Details */}

              <h5 className="mt-4"> DELIVERY DETAILS </h5>

              {/* Delivery Details */}

              <div className="col-md-12 curve mb-4">
                <div className="card h-100">
                  <div class="container mt-4 details">
                    {/* <h6>Name:
                      <span class="font-weight-bold"> {title} </span> </h6>
                    <hr /> */}
                    <h6>Location:
                       <span class="font-weight-bold"> {address} </span>  </h6>
                    <hr />
                    <h6>Phone Number: 
                     <span class="font-weight-bold"> {phone} </span> </h6>
                    <hr />
                    <h6>Amount Paid: <span class="font-weight-bold"> 
                     ₦ {priceth} </span> </h6>
                    <hr />
                   
                  </div>
                </div>
              </div>
              {/* Delivery Details */}

            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default FoodInvoice;
