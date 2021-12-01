import React, { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import axios from "axios";
import img from "./img/icons.png";
import { Link } from "react-router-dom";

const FoodHistory = () => {
  
  const [allfood, setallfood] = useState([]);
  const [usertoken, setusertoken] = useState(localStorage.getItem("usertoken"));
  const [count, setcount] = useState(0);

  const [isloading, setisloading] = useState(true);

  const fetchfood = () => {
    const data = new FormData();
    data.append("apptoken", "T9H1E6KUYM");
    data.append("usertoken", usertoken);

    axios
      .post(`https://test.api.eclipse.com.ng/v1/get-food-order-history`, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.data.success === false) {
          console.log(response.data);
          setisloading(false);
        } else {
          setallfood(response.data);
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
    fetchfood();
  }, [count]);

  const food = allfood
    .map((item, i) => {
      return (
        <>
 <a href={`https://test.eclipse.com.ng/food/invoice/${item.oid}`}>
   <div className="first mt-3 black-text" key={item.fid}>
            <div className="row ">
              <div className="col-7 mr-auto ">
                <p className="bold-text">{item.title}</p>
              </div>
              <div className="col-4 ml-auto">
                <p className="bold-text" className="float-right">
                  ₦ {item.price_th}
                </p>
              </div>
            </div>
            <div className="row mt-0">
              <div className="col-8 mr-auto">
                <div className="row mt-0 float-left">
                  <div className="col-12 mr-auto">
                    <p className="grey-text">Order ID: 
                      <span className="black-text"> {item.oid}  </span>
                    </p>
                  </div>
                  {/* <div className="col-7 mr-auto">
                    <p>
                      <small>
                        {item.paidstatus == "paid" ? (
                          <>
                        <i className="green-text"> - {item.paidstatus} -</i>
                          </>
                        ) : (
                          <>
                        <i className="blue-text"> - {item.paidstatus} -</i>
                          </>
                        )}
                      </small>
                    </p>
                  </div> */}
                </div>
              </div>

              <div className="col-4 ml-auto">
                <p className="grey-text float-right">
                  <small>
                    <i> {item.timeago}</i>
                  </small>
                </p>
              </div>
            </div>
          </div>
          <hr className="p-0 m-0" />
          </a>
        </>
      );
    });

  return (
    <>
      <div className="history">
        <div className=" row justify-content-center">
          <div className="col-md-10">
            

            {isloading ? (
              <div className="text-center my-5">
                <Spinner color="success" />
              </div>
            ) : (
              <>
                {food == "" ? (
                  <>
                    <div className="mt-5 text-center">
                      <img src={img} width="100px" />
                      <h5
                        class="mt-3 font-weight-normal mb-5"
                        style={{ color: "#CCCCCC" }}
                      >
                        Transaction is empty ...
                      </h5>
                    </div>
                  </>
                ) : (
                  <>{food}</>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodHistory;
