import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Spinner } from "reactstrap";
import DelFranchise from "./DelFranchise";

const AllFranchise = () => {
  const [apptoken, setapptoken] = useState(process.env.REACT_APP_APPTOKEN);
  const [endpoint, setendpoint] = useState(process.env.REACT_APP_ENDPOINT);

  const [count, setcount] = useState(0);
  const [load, setload] = useState(false);

  // For the Delete Button
  const [showremove, setShowremove] = useState(false);
  const handleCloseremove = () => setShowremove(false);
  const handleShowremove = () => setShowremove(true);
  const [franchisetoken, setfranchisetoken] = useState("");

  function workModal(token) {
    // console.log(token);
    setfranchisetoken(token);
    handleShowremove();
  }

  const [allfranchise, setallfranchise] = useState([]);

  const fetchfranchise = () => {
    setload(true);
    const data = {
      apptoken: apptoken,
    };
    axios
      .get(`${endpoint}/v1/admin-list-franchise`, {
        params: data,
      })
      .then((response) => {
        if (response.data.success == false) {
          console.log(response.data);
          setload(false);
        } else {
          setallfranchise(response.data);
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
    fetchfranchise();
  }, [count]);

  const franchise = allfranchise.map((item, i) => {
    return (
      <tr key={i}>
        <td className="pt-3-half">{item.usertoken}</td>
        <td className="pt-3-half">{item.name}</td>
        <td className="pt-3-half">{item.mail}</td>
        <td className="pt-3-half">{item.phone}</td>
        <td>
          <span className="table-remove">
            <button
              type="button"
              onClick={(e) => workModal(item.usertoken)}
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
      <div className="adminfranchise">
        <div className="mt-3">
          <div className="card">
            <h5 className="card-header text-center font-weight-bold text-uppercase py-4">
              ALL franchise
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
                      <th className="text-center">Name</th>
                      <th className="text-center">Email</th>
                      <th className="text-center">Phone</th>
                      <th className="text-center">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {load ? (
                      <div className="my-5 justify-content-center">
                      <Spinner color="dark"/> Loading franchises
                      </div>
                    ) : (
                      <>
{franchise}
                      </>
                    )}
                    </tbody>
                </table>
              </div>
            </div>
          </div>
          <DelFranchise callback={fetchfranchise} show={showremove} onHide={handleCloseremove} animation={false} usertoken={franchisetoken} />
        </div>
      </div>
    </>
  );
};

export default AllFranchise;
