import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Spinner } from "reactstrap";
import AdminNavbar from '../../Navbar/AdminNavbar';

const AllFoodOrder = () => {
  const [apptoken, setapptoken] = useState(process.env.REACT_APP_APPTOKEN);
  const [endpoint, setendpoint] = useState(process.env.REACT_APP_ENDPOINT);

  const [count, setcount] = useState(0);
  const [load, setload] = useState(false);

  useEffect(() => {
    fetchuser();
  }, [count]);

  const [alluser, setalluser] = useState([]);

  const fetchuser = () => {
    setload(true);
    const data = {
      apptoken: apptoken,
    };
    axios
      .get(`${endpoint}/v1/admin-food-orders`, {
        params: data,
      })
      .then((response) => {
        if (response.data.success == false) {
          console.log(response.data);
          setload(false);
        } else {
          setalluser(response.data);
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
    fetchuser();
  }, [count]);

  const user = alluser.map((item, i) => {
    return (
      <tr key={i}>
        <td className="pt-3-half">{item.id}</td>
        <td className="pt-3-half">{item.title}</td>
        <td className="pt-3-half">₦ {item.priceth}</td>
        <td className="pt-3-half">{item.username}</td>
        <td className="pt-3-half">{item.location}</td>
        <td className="pt-3-half">{item.phone}</td>
        <td className="pt-3-half">{item.timeago}</td>
      </tr>
    );
  });

  return (
    <>
    <AdminNavbar />
      <section className="userlist">
        <div className="mt-3 container-fluid">
          <div className="card">
            <h5 className="card-header text-center font-weight-bold text-uppercase py-4">
              ALL food orders
            </h5>
            <div className="card-body">
              <div id="table" className="table-editable">
                <span className="table-add float-right mb-3 mr-2">
                  <a href="#!" className="text-success">
                    <i className="fas fa-plus fa-2x" aria-hidden="true"></i>
                  </a>
                </span>
                <table className="table table-bordered table-responsive-sm table-striped text-center">
                  <thead>
                    <tr>
                      <th className="text-center">ID</th>
                      <th className="text-center">Food </th>
                      <th className="text-center">Price</th>
                      <th className="text-center">User Name</th>
                      <th className="text-center">Location</th>
                      <th className="text-center">Phone</th>
                      <th className="text-center">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {load ? (
                      <div className="my-5 justify-content-center">
                      <Spinner color="dark"/> Loading orders...
                      </div>
                    ) : (
                      <>
{user}
                      </>
                    )}
                    </tbody>
                </table>
              </div>
            </div>
          </div>
  
        </div>
      </section>
    </>
  );
};

export default AllFoodOrder;
