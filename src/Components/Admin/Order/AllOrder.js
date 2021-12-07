import React, { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import axios from "axios";
import img from "./img/icons.png";
import { Link } from "react-router-dom";
import AdminNavbar from "../../Navbar/AdminNavbar";
import { Alert } from "reactstrap";

const AllOrder = () => {
  const [apptoken, setapptoken] = useState(process.env.REACT_APP_APPTOKEN);
  const [endpoint, setendpoint] = useState(process.env.REACT_APP_ENDPOINT);

  const [allorder, setallorder] = useState([]);
  const [count, setcount] = useState(0);

  const [isloading, setisloading] = useState(true);

  const fetchorder = () => {
    const data = new FormData();
    data.append("apptoken", apptoken);

    axios
      .post(`${endpoint}/v1/admin-get-orders`, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.data.success === false) {
          console.log(response.data);
          setisloading(false);
        } else {
          setallorder(response.data);
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
    fetchorder();
  }, [count]);

  const order = allorder.map((item, i) => {
    return (
      <>
        <div className="second" key={i}>
         {item.id} <Alert color="dark">
          <Link to={`/admin/order/invoice/${item.trackid}`}>  <span className="font-weight-bold" > {item.trackid} </span> </Link> -
            {item.packagename}
            <br />
            <span className=""> {item.timestamp}</span>
          </Alert>
        </div>
      </>
    );
  });

  return (
    <>
      <AdminNavbar />
      <section class="all-order admin">
        <div className="container">
          <div className="text-center">
            <h5> ORDERS </h5>
          </div>
          <hr />

          <div className="justify-content-center">
            {isloading ? (
              <div className="text-center my-5">
                <Spinner color="dark" /> loading orders
              </div>
            ) : (
              <>
                {order == "" ? (
                  <>
                    <div className="mt-5 text-center">
                      <img src={img} width="100px" />
                      <h5
                        class="mt-3 font-weight-normal mb-5"
                        style={{ color: "#CCCCCC" }}
                      >
                        Order list is empty ...
                      </h5>
                    </div>
                  </>
                ) : (
                  <>{order}</>
                )}
              </>
            )}
          </div>
          <div className="first"></div>
        </div>
      </section>
    </>
  );
};

export default AllOrder;
