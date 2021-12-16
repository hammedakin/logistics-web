import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Spinner } from "reactstrap";
// import AdminDeleteProps from "./AdminDeleteProps";

const AllStates = () => {
  const [apptoken, setapptoken] = useState(process.env.REACT_APP_APPTOKEN);
  const [endpoint, setendpoint] = useState(process.env.REACT_APP_ENDPOINT);

  const [count, setcount] = useState(0);
  const [load, setload] = useState(false);

  // For the Delete Button
  // const [showremove, setShowremove] = useState(false);
  // const handleCloseremove = () => setShowremove(false);
  // const handleShowremove = () => setShowremove(true);
  // const [statestoken, setstatestoken] = useState("");

  // function workModal(token) {
  //   console.log(token);
  //   setstatestoken(token);
  //   handleShowremove();
  // }

  const [allstates, setallstates] = useState([]);

  const fetchstates = () => {
    setload(true);
    const data = {
      apptoken: apptoken,
    };
    axios
      .get(`${endpoint}/v1/admin-list-states`, {
        params: data,
      })
      .then((response) => {
        if (response.data.success == false) {
          console.log(response.data);
          setload(false);
        } else {
          setallstates(response.data);
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
    fetchstates();
  }, [count]);

  const states = allstates.map((item, i) => {
    return (
      <tr key={i}>
        <td className="pt-3-half">{item.id}</td>
        <td className="pt-3-half">{item.state}</td>
        <td className="pt-3-half">{item.price}</td>
        <td className="pt-3-half">{item.price_kg}</td>
        <td className="pt-3-half">{item.price_express}</td>
        <td className="pt-3-half">
          <span className="table-up">
            <Link to={`/admin/edit-states/${item.id}`}>
              <button
                type="button"
                className="btn btn-success btn-rounded btn-sm my-0"
              >
                Edit
              </button>
            </Link>{" "}
          </span>
        </td>
        <td>
          <span className="table-remove">
            <button
              type="button"
              // onClick={(e) => workModal(item.propstoken)}
              className="btn btn-danger btn-rounded btn-sm my-0"
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
      <div className="adminstates">
        <div className="mt-3">
          <div className="card">
            <h5 className="card-header text-center font-weight-bold text-uppercase py-4">
              ALL states
            </h5>
            <div className="card-body">
              <div id="table" className="table-editable">
                <span className="table-add float-right mb-3 mr-2">
                  <a href="#!" className="text-success">
                    <i className="fas fa-plus fa-2x" aria-hidden="true"></i>
                  </a>
                </span>
                <table className="table table-bordered table-responsive-md table-striped text-center">
                  <thead>
                    <tr>
                      <th className="text-center">ID</th>
                      <th className="text-center">States</th>
                      <th className="text-center">Price (2kg and less)</th>
                      <th className="text-center">Price (per kg above 2kg)</th>
                      <th className="text-center">Price (express delivery)</th>
                      <th className="text-center">Edit</th>
                      <th className="text-center">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {load ? (
                      <div className="my-5 justify-content-center">
                      <Spinner color="dark"/> Loading statess
                      </div>
                    ) : (
                      <>
{states}
                      </>
                    )}
                    </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* <AdminDeleteProps callback={fetchstates} show={showremove} onHide={handleCloseremove} animation={false} propstoken={statestoken} /> */}
        </div>
      </div>
    </>
  );
};

export default AllStates;
