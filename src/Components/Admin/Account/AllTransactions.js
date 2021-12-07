import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "reactstrap";
import AdminNavbar from "../../Navbar/AdminNavbar";

const AllTransactions = () => {
  const [apptoken, setapptoken] = useState(process.env.REACT_APP_APPTOKEN);
  const [endpoint, setendpoint] = useState(process.env.REACT_APP_ENDPOINT);

  const [count, setcount] = useState(0);
  const [load, setload] = useState(false);

  useEffect(() => {
    fetchtransactions();
  }, [count]);

  const [alltransactions, setalltransactions] = useState([]);

  const fetchtransactions = () => {
    setload(true);
    const data = {
      apptoken: apptoken,
    };
    axios
      .get(`${endpoint}/v1/admin-transaction-log`, {
        params: data,
      })
      .then((response) => {
        if (response.data.success == false) {
          console.log(response.data);
          setload(false);
        } else {
          setalltransactions(response.data);
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
    fetchtransactions();
  }, [count]);

  const transactions = alltransactions.map((item, i) => {
    return (
      <tr key={i}>
        <td className="pt-3-half">{item.id}</td>
        <td className="pt-3-half">{item.timestamp}</td>
        <td className="pt-3-half">{item.userfullname}</td>
        <td className="pt-3-half">{item.type}</td>
        <td className="pt-3-half">
          {
            (item.type === "Debit" ? (
              <span className="font-weight-bold red-text">
                ₦ ( {item.amount} )
              </span>
            ) : (
              <span className="font-weight-bold green-text">
                ₦ ( {item.amount} )
              </span>
            ))
          }
        </td>
        <td className="pt-3-half">{item.log}</td>
      </tr>
    );
  });

  return (
    <>
      <AdminNavbar />
      <section className="transactionslist">
        <div className="mt-3 container-fluid">
          <div className="card">
            <h5 className="card-header text-center font-weight-bold text-uppercase py-4">
              ALL transactionss
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
                      <th className="text-center">Date</th>
                      <th className="text-center">User Name</th>
                      <th className="text-center">Type</th>
                      <th className="text-center">Amount</th>
                      <th className="text-center">Log</th>
                    </tr>
                  </thead>
                  <tbody>
                    {load ? (
                      <div className="my-5 justify-content-center">
                        <Spinner color="dark" /> Loading transactionss
                      </div>
                    ) : (
                      <>{transactions}</>
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

export default AllTransactions;
