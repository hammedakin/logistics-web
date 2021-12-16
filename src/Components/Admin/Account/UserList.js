import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Spinner } from "reactstrap";
import AdminNavbar from '../../Navbar/AdminNavbar';

const UserList = () => {
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
      .get(`${endpoint}/v1/admin-user-list`, {
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
        <td className="pt-3-half">{item.token}</td>
        <td className="pt-3-half">{item.timestamp}</td>
        <td className="pt-3-half">{item.userfullname}</td>
        <td className="pt-3-half">{item.phone}</td>
        <td className="pt-3-half">{item.mail}</td>
        <td className="pt-3-half">{item.state}</td>
        <td className="pt-3-half">{item.town}</td>
        <td className="pt-3-half">{item.state}</td>
      
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
              ALL users
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
                      <th className="text-center">Date Reg</th>
                      <th className="text-center">Name</th>
                      <th className="text-center">Phone</th>
                      <th className="text-center">Email</th>
                      <th className="text-center">State</th>
                      <th className="text-center">Town</th>
                      <th className="text-center">Area</th>
                    </tr>
                  </thead>
                  <tbody>
                    {load ? (
                      <div className="my-5 justify-content-center">
                      <Spinner color="dark"/> Loading users
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

export default UserList;
