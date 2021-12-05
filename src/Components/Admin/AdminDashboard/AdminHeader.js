import React, { useState, useEffect } from "react";
import { Spinner } from "reactstrap";
import axios from "axios";

const AdminHeader = () => {
  const [name, setname] = useState(localStorage.getItem("ecladminname"));
  const [walletbalance_th, setwalletbalance_th] = useState("");
  const [issending, setissending] = useState(true);

  const fetchBal = () => {
    const data = {
      apptoken: "T9H1E6KUYM",
    };
    axios
      .get(`https://test.api.eclipse.com.ng/v1/admin-system-balance`, {
        params: data,
      })
      .then((response) => {
        if (response.data.success === false) {
          console.log(response.data);
          setissending(false);
        } else {
          setwalletbalance_th(response.data.walletbalance_thousand);
          console.log(response.data);
          setissending(false);
        }
      })
      .catch((error) => {
        console.log(error.response);
        setissending(false);
        alert(error.message);
      });
  };
  useEffect(() => {
    fetchBal();
  }, 0);

  return (
    <>
      <div className="welcome-admin">
        <div className=" text-left">
          <h6>
            {" "}
            Welcome back, <span> {name} </span> 😃{" "}
          </h6>
        </div>

        <div className="text-center first">
          <h6> Total Wallet Balance: </h6>
          {issending ? (
            <Spinner color="light" className="spin" />
          ) : (
            <>
              <h1> ₦ {walletbalance_th} </h1>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminHeader;
