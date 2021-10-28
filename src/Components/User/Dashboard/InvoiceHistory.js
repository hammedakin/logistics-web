import React, { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import axios from "axios";
import img from "./img/icons.png";
import { Link } from "react-router-dom";

const InvoiceHistory = () => {
  const [allinvoice, setallinvoice] = useState([]);
  const [usertoken, setusertoken] = useState("");
  const [count, setcount] = useState(0);

  const [isloading, setisloading] = useState(true);

  const fetchinvoice = () => {
    const data = new FormData();
    data.append("apptoken", "T9H1E6KUYM");
    data.append("usertoken", localStorage.getItem("usertoken"));

    axios
      .post(`https://test.api.eclipse.com.ng/v1/get-orders`, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.data.success === false) {
          console.log(response.data);
          setisloading(false);
        } else {
          setallinvoice(response.data);
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
    fetchinvoice();
  }, [count]);

  const invoice = allinvoice
    .map((item, i) => {
      return (
        <>
 <Link to={`/send-package/invoice/${item.trackid}`}>
   <div className="first mt-3 black-text">
            <div className="row ">
              <div className="col-7 mr-auto ">
                <p className="bold-text">{item.packagename}</p>
              </div>
              <div className="col-4 ml-auto">
                <p className="bold-text" className="float-right">
                  ₦ {item.price}
                </p>
              </div>
            </div>
            <div className="row mt-0">
              <div className="col-8 mr-auto">
                <div className="row mt-0 float-left">
                  <div className="col-5 mr-auto">
                    <p className="">
                      <small> {item.trackid}  </small>
                    </p>
                  </div>
                  <div className="col-7 mr-auto">
                    <p>
                      <small>
                        {item.paidstatus == "paid" ? (
                          <>
                        <i className="green-text"> - {item.paidstatus} -</i>
                          </>
                        ) : (
                          <>
                        <i className="blue-text"> - {item.paidstatus} -</i>
                          </>
                        )}
                      </small>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-4 ml-auto">
                <p className="grey-text float-right">
                  <small>
                    <i> {item.timestamp}</i>
                  </small>
                </p>
              </div>
            </div>
          </div>
          <hr className="p-0 m-0" />
          </Link>
        </>
      );
    });

  return (
    <>
      <div className="history">
        <div className=" row justify-content-center">
          <div className="col-md-10">
            

            {isloading ? (
              <div className="text-center my-5">
                <Spinner color="success" />
              </div>
            ) : (
              <>
                {invoice == "" ? (
                  <>
                    <div className="mt-5 text-center">
                      <img src={img} width="100px" />
                      <h5
                        class="mt-3 font-weight-normal mb-5"
                        style={{ color: "#CCCCCC" }}
                      >
                        Transaction is empty ...
                      </h5>
                    </div>
                  </>
                ) : (
                  <>{invoice}</>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceHistory;
