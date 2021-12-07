import React, { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import axios from "axios";
import img from "./img/icons.png";
import { Link } from "react-router-dom";

const FoodList = () => {
  const [apptoken, setapptoken] = useState(process.env.REACT_APP_APPTOKEN);
  const [endpoint, setendpoint] = useState(process.env.REACT_APP_ENDPOINT);

  const [allfood, setallfood] = useState([]);
  const [count, setcount] = useState(0);

  const [isloading, setisloading] = useState(true);

  const fetchfood = () => {
    const data = new FormData();
    data.append("apptoken", apptoken);

    axios
      .post(`${endpoint}/v1/get-foodlist`, data, {
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

  const food = allfood.map((item, i) => {
    return (
      <>
        <div className="col-md-3 col-6 mb-3" key={item.id}>
          <div className="card h-100">
            <div class="view overlay">
              <img
                src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80"
                alt={item.title}
                class="card-img-top img-fluid"
                width="100%"
              />
            </div>
            <div className="card-body text-center">
              <p> {item.title}</p>
              <p class="price ">₦ {item.priceth} </p>
            <Link to={`food/${item.id}`} >  <button className="btn"> BUY</button> </Link> 
            </div>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="food">
        <div className="container">
          <div className="text-center green-word mb-5">
            <h5> Latest Offers </h5>
          </div>

          <div className="">
            <div className="row justify-content-center">
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
                          Food list is empty ...
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
      </div>
    </>
  );
};

export default FoodList;
