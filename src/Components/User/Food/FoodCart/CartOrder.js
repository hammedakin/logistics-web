import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { Spinner, Alert } from "reactstrap";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import img from "./img/icons.png";

const CartOrders = () => {
    const [apptoken, setapptoken] = useState(process.env.REACT_APP_APPTOKEN);
    const [endpoint, setendpoint] = useState(process.env.REACT_APP_ENDPOINT);
  
    const [allcartfood, setallcartfood] = useState([]);
    const [usertoken, setusertoken] = useState(
      localStorage.getItem("eclusertoken")
    );
    const [count, setcount] = useState(0);
  
    const [isloading, setisloading] = useState(true);
  
    const [walletbalance_th, setwalletbalance_th] = useState("");
    const [walletbalance, setwalletbalance] = useState("");
  
    const [cartbal_th, setcartbal_th] = useState("");
    const [cartbal, setcartbal] = useState("");
    const [carttotal_th, setcarttotal_th] = useState("");
    const [carttotal, setcarttotal] = useState("");
    const [dfee, setdfee] = useState("");
  
    const [issending, setissending] = useState(false);
    const [showalert, setshowalert] = useState(false);
    const [alertt, setalertt] = useState("");


    const fetchcartfood = () => {
      const data = new FormData();
      data.append("apptoken", apptoken);
      data.append("usertoken", usertoken);
  
      axios
        .post(`${endpoint}/v1/get-cart-list`, data, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((response) => {
          if (response.data.success === false) {
            console.log(response.data);
            //   console.log(usertoken);
            setisloading(false);
          } else {
            setallcartfood(response.data);
            setisloading(false);
  
            console.log(response.data);
          }
        })
  
        .catch((error) => {
          console.log(error.response);
          setisloading(false);
        });
    };
    useEffect(() => {
      fetchcartfood();
    }, [count]);
  
    const cartfood = allcartfood.map((item, i) => {
      return (
        <>
          <div className="first mt-3 black-text" key={item.id}>
            <div className="row ">
              <div className="col-8 text-left ">
                <p className="">{item.title}</p>
              </div>
              <div className="col-4 ml-auto">
                <p className="bold-text" className="float-right">
                  ₦ {item.priceth}
                </p>
              </div>
            </div>
            {/* <div className="row mt-0">
              <div className="col-8 mr-auto">
                <div className="row mt-0 float-left">
                  <div className="col-12 mr-auto">
                    <p className="grey-text">
                      Order ID:
                      <span className="black-text"> {item.id} </span>
                    </p>
                  </div>
                </div>
              </div>
  
              <div className="col-4 ml-auto">
                  <p className="grey-text float-right">
                    <small>
                      <i> {item.timeago}</i>
                    </small>
                  </p>
                </div>
            </div> */}
          </div>
          <hr className="p-0 m-0" />
        </>
      );
    });
  
    //   Fetch Cart Balance
    const fetchCartBal = () => {
      const data = {
        apptoken: apptoken,
        usertoken: usertoken,
      };
      axios
        .get(`${endpoint}/v1/get-cart-total-amount`, {
          params: data,
        })
        .then((response) => {
          if (response.data.success === false) {
            console.log(response.data);
            setissending(false);
          } else {
            setcartbal_th(response.data.total_amount_th);
            setcartbal(response.data.total_amount);
            setcarttotal_th(response.data.grand_total_th);
            setcarttotal(response.data.grand_total);
            setdfee(response.data.deliveryfee);
            console.log(response.data);
            setissending(false);
          }
        })
        .catch((error) => {
          console.log(error.response);
          setissending(false);
        });
    };
    useEffect(() => {
      fetchCartBal();
    }, 0);
    //   Fetch Cart Balance
  
    
    return ( 
        <>
        
        </>
     );
}
 
export default CartOrders;