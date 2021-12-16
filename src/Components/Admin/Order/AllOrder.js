import React, { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import AdminNavbar from "../../Navbar/AdminNavbar";

const AllOrder = () => {
  const [apptoken, setapptoken] = useState(process.env.REACT_APP_APPTOKEN);
  const [endpoint, setendpoint] = useState(process.env.REACT_APP_ENDPOINT);

  const [allorder, setallorder] = useState([]);
  const [count, setcount] = useState(0);

  const [load, setload] = useState(true);

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
          setload(false);
        } else {
          setallorder(response.data);
          setload(false);

          console.log(response.data);
        }
      })

      .catch((error) => {
        console.log(error.response);
        setload(false);
      });
  };
  useEffect(() => {
    fetchorder();
  }, [count]);

  const order = allorder.map((item, i) => {
    return (
      <>
        <tr key={i}>
          <td class="pt-3-half">{item.trackid}</td>
          <td class="pt-3-half">{item.packagename}</td>
          <td class="pt-3-half">
            {" "}
            <small>{item.timestamp}</small>
          </td>
          <td class="pt-3-half">
            <span class="table-up">
              <Link to={`/admin/order/invoice/${item.trackid}`}>
                {" "}
                <span className="font-weight-bold">
                  {" "}
                  <button
                    type="button"
                    class="btn btn-success btn-rounded btn-sm my-0"
                  >
                    View
                  </button>{" "}
                </span>{" "}
              </Link>
            </span>
          </td>
        </tr>
      </>
    );
  });

  return (
    <>
      <AdminNavbar />
      <section className="orderlist">
        <div className="mt-3 container-fluid">
          <div className="card">
            <h5 className="card-header text-center font-weight-bold text-uppercase py-4">
              ALL Orders
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
                      <th className="text-center">Track ID</th>
                      <th className="text-center">Package Name</th>
                      <th className="text-center">Date Created</th>
                      <th className="text-center">View Order</th>
                    </tr>
                  </thead>
                  <tbody>
                    {load ? (
                      <div className="my-5 justify-content-center">
                        <Spinner color="dark" /> Loading Orders
                      </div>
                    ) : (
                      <>{order}</>
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

export default AllOrder;
