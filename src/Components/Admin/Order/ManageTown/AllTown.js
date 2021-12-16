import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Spinner } from "reactstrap";
// import AdminDeleteProps from "./AdminDeleteProps";

const AllTown = () => {
  const [apptoken, setapptoken] = useState(process.env.REACT_APP_APPTOKEN);
  const [endpoint, setendpoint] = useState(process.env.REACT_APP_ENDPOINT);

  const [count, setcount] = useState(0);
  const [load, setload] = useState(false);

  // For the Delete Button
  // const [showremove, setShowremove] = useState(false);
  // const handleCloseremove = () => setShowremove(false);
  // const handleShowremove = () => setShowremove(true);
  // const [towntoken, settowntoken] = useState("");

  // function workModal(token) {
  //   console.log(token);
  //   settowntoken(token);
  //   handleShowremove();
  // }

  const [alltown, setalltown] = useState([]);

  const fetchtown = () => {
    setload(true);
    const data = {
      apptoken: apptoken,
    };
    axios
      .get(`${endpoint}/v1/admin-list-town`, {
        params: data,
      })
      .then((response) => {
        if (response.data.success == false) {
          console.log(response.data);
          setload(false);
        } else {
          setalltown(response.data);
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
    fetchtown();
  }, [count]);

  const town = alltown.map((item, i) => {
    return (
      <tr key={i}>
        <td className="pt-3-half">{item.id}</td>
        <td className="pt-3-half">{item.town}</td>
        <td className="pt-3-half">
          <span className="table-up">
          <Link to={`/admin/edit-town/${item.id}`}>
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
      <div className="admintown">
        <div className="mt-3">
          <div className="card">
            <h5 className="card-header text-center font-weight-bold text-uppercase py-4">
              ALL Towns
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
                      <th className="text-center">Town</th>
                    
                      <th className="text-center">Edit</th>
                      <th className="text-center">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {load ? (
                      <div className="my-5 justify-content-center">
                      <Spinner color="dark"/> Loading towns
                      </div>
                    ) : (
                      <>
{town}
                      </>
                    )}
                    </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* <AdminDeleteProps callback={fetchtown} show={showremove} onHide={handleCloseremove} animation={false} propstoken={towntoken} /> */}
        </div>
      </div>
    </>
  );
};

export default AllTown;
