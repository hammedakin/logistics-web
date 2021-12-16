import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Spinner } from "reactstrap";
// import AdminDeleteProps from "./AdminDeleteProps";

const AdminAllFood = () => {
  const [apptoken, setapptoken] = useState(process.env.REACT_APP_APPTOKEN);
  const [endpoint, setendpoint] = useState(process.env.REACT_APP_ENDPOINT);

  const [count, setcount] = useState(0);
  const [load, setload] = useState(false);

  // For the Delete Button
  const [showremove, setShowremove] = useState(false);
  const handleCloseremove = () => setShowremove(false);
  const handleShowremove = () => setShowremove(true);
  const [foodtoken, setfoodtoken] = useState("");

  function workModal(token) {
    // body...
    console.log(token);
    setfoodtoken(token);
    handleShowremove();
  }


  const [allfood, setallfood] = useState([]);

  const fetchfood = () => {
    setload(true);
    const data = {
      apptoken: apptoken,
    };
    axios
      .get(`${endpoint}/v1/admin-list-food`, {
        params: data,
      })
      .then((response) => {
        if (response.data.success == false) {
          console.log(response.data);
          setload(false);
        } else {
          setallfood(response.data);
          console.log(response.data);
          setload(false);
        }
      })

      .catch((error) => {
        console.log(error.response);
        setload(false);
      });
  };
  useEffect(() => {
    fetchfood();
  }, [count]);

  const food = allfood.map((item, i) => {
    return (
      <tr>
        <td class="pt-3-half">{item.title}</td>
        <td class="pt-3-half">₦ {item.priceth}</td>
        <td class="pt-3-half">{item.resname}</td>
        <td class="pt-3-half">₦ {item.deliveryfee}</td>
        <td class="pt-3-half">₦ {item.amount}</td>
        <td class="pt-3-half">
          <span class="table-up">
            {/* <Link to={`/admin/food-details`}> */}
              <button
                type="button"
                class="btn btn-success btn-rounded btn-sm my-0"
              >
                Edit
              </button>
            {/* </Link>{" "} */}
          </span>
        </td>
        <td>
          <span class="table-remove">
            <button
              type="button"
              // onClick={(e) => workModal(item.propstoken)}
              class="btn btn-danger btn-rounded btn-sm my-0"
            >
              Remove
            </button>
          </span>
        </td>
      </tr>
    );
  });

  return (
    <>
      <div class="adminfood">
        <div class="mt-3">
          <div class="card">
            <h5 class="card-header text-center font-weight-bold text-uppercase py-4">
              ALL Foods
            </h5>
            <div class="card-body">
              <div id="table" class="table-editable">
                <span class="table-add float-right mb-3 mr-2">
                  <a href="#!" class="text-success">
                    <i class="fas fa-plus fa-2x" aria-hidden="true"></i>
                  </a>
                </span>
                <table class="table table-bordered table-responsive-md table-striped text-center">
                  <thead>
                    <tr>
                      <th class="text-center">Title</th>
                      <th class="text-center">Price</th>
                      <th class="text-center">Restaurant</th>
                      <th class="text-center">Delivery</th>
                      <th class="text-center">Amount</th>
                      <th class="text-center">Edit</th>
                      <th class="text-center">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {load ? (
                      <div className="my-5 justify-content-center">
                      <Spinner color="dark"/> Loading foods
                      </div>
                    ) : (
                      <>
{food}
                      </>
                    )}
                    </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* <AdminDeleteProps callback={fetchfood} show={showremove} onHide={handleCloseremove} animation={false} propstoken={foodtoken} /> */}
        </div>
      </div>
    </>
  );
};

export default AdminAllFood;
