import React, { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import axios from "axios";
import img from "./img/icons.png";
import img2 from "./img/food.png";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const FoodList = () => {
  const [apptoken, setapptoken] = useState(process.env.REACT_APP_APPTOKEN);
  const [endpoint, setendpoint] = useState(process.env.REACT_APP_ENDPOINT);

  const [allfood, setallfood] = useState([]);
  const [count, setcount] = useState(0);

  const [isloading, setisloading] = useState(true);
  const [isadding, setisadding] = useState(false);

  const [usertoken, setusertoken] = useState(
    localStorage.getItem("eclusertoken")
  );

  // const [alert, setalert] = useState("Added");
  // const notify = () => toast(`${alert}`);

  const [showalert, setshowalert] = useState(false);

  const [notifyy, setnotifyy] = useState("Added");

  const notify = () => toast(`${notifyy}`);

  // Fetch Food
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
    // Add to Cart
    function AddCart(e) {
      if ((item.id, item.price, usertoken)) {
        setisadding(true);

        const data = new FormData();
        data.append("usertoken", usertoken);
        data.append("fid", item.id);
        data.append("price", item.price);
        data.append("apptoken", apptoken);

        axios
          .post(`${endpoint}/v1/add-to-cart`, data, {
            headers: {
              "content-type": "multipart/form-data",
            },
          })
          .then((res) => {
            console.log(res.data);

            if (res.data.success === true) {
              setshowalert(true);
              setnotifyy(res.data.message);
              setisadding(false);
              notify();
            } else {
              setshowalert(true);
              setnotifyy(res.data.message, "error");
              setisadding(false);
              notify();
            }
          })
          .catch((error) => {
            console.log(error.name);
            setshowalert(true);
            setnotifyy("Check your Network Connection!!!");
            setisadding(false);
            notify();
          });
      } else {
        setshowalert(true);
        setnotifyy("Select a Food!");
        setisadding(false);
        notify();
      }
      e.preventDefault();
    }
    // Add to Cart

    return (
      <>
        <div className="col-md-4 col-6 mb-3" key={item.id}>
          <div className="card h-100">
            <div class="view overlay">
              {item.imgurl === "0" ? (
                <>
                  <img
                    src={img2}
                    alt={item.title}
                    class="card-img-top img-fluid"
                    width="50%"
                  />
                </>
              ) : (
                <>
                  <img
                    src={item.imgurl}
                    alt={item.title}
                    class="card-img-top img-fluid"
                    width="100%"
                  />
                </>
              )}
            </div>
            <div className="card-body text-center">
              <p> {item.title}</p>
              <p class="price ">₦ {item.priceth} </p>
            </div>
            <div className="text-center">
              <Link to={`food/${item.id}`}>
                {" "}
                <button className="btn"> BUY</button>{" "}
              </Link>

              {isadding ? (
                <>
                  <button className="btn btn-cart" disabled>
                    {" "}
                    <Spinner color="success" size="sm" />{" "}
                  </button>
                </>
              ) : (
                <>
                  <button className="btn btn-cart" onClick={(e) => AddCart(e)}>
                    {" "}
                    <box-icon
                      type="solid"
                      name="cart-add"
                      size="1.5rem"
                      color="#096b00"
                      action="submit"
                    ></box-icon>{" "}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </>
    );
  });
  // Fetch Food

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
      <ToastContainer />
    </>
  );
};

export default FoodList;
