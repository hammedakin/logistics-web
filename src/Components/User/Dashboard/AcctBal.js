import React, { useState, useEffect } from "react";
import { Spinner } from "reactstrap";
import axios from "axios";



const AcctBal = () => {
  const [apptoken, setapptoken] = useState(process.env.REACT_APP_APPTOKEN);
  const [endpoint, setendpoint] = useState(process.env.REACT_APP_ENDPOINT);


  const [usertoken, setusertoken] = useState("");
  const [walletbalance_th, setwalletbalance_th] = useState("");
  const [issending, setissending] = useState(true);
  console.log(endpoint)
  console.log(apptoken)
  const fetchBal = () => {
    const data = {
      apptoken: apptoken,
      usertoken: localStorage.getItem('eclusertoken'),
    };
    axios
    .get(`${endpoint}/v1/get-wallet-balance`, { params: data })
      .then((response) => {
        if (response.data.success === false) {
          console.log(response.data);
      setissending(false)
        } else {
            setwalletbalance_th(response.data.walletbalance_th);
            console.log(response.data);
      setissending(false)
        }
      })
      .catch((error) => {
        console.log(error.response);
        setissending(false);
        alert(error.message)
      });
  };
  useEffect(() => {
    fetchBal();
  }, 0);

    return ( 
        <>
        {issending ? (
            <Spinner color="light" className="spin" />
        ) : (
            <>
  <h1> ₦ {walletbalance_th} </h1>
            </>
        )}
        </>
     );
}
 
export default AcctBal;