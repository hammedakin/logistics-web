import React, { useState } from "react";
import axios from "axios";
import { Spinner, Alert } from "reactstrap";
import { useHistory } from "react-router";

const Tracking = () => {
  const [trackid, settrackid] = useState("");
  const [results, setresults] = useState([]);


  const [issending, setissending] = useState(false);
  const [showalert, setshowalert] = useState(false);
  const [alert, setalert] = useState("");
  let history = useHistory();

  function Trackings(e) {
    if (trackid) {
      setissending(true);

      const data = new FormData();
      data.append("trackid", trackid);
      data.append("apptoken", "T9H1E6KUYM");

      axios
        .post(`https://test.api.eclipse.com.ng/v1/track-order`, data, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data);

          if (res.data.success === false) {
            setissending(false);
            setshowalert(true);
            setalert(res.data.message);
            console.log(res.data.message);
          
          } else {

            const result = JSON.stringify(res.data);
            localStorage.setItem("results", result);
            localStorage.setItem("trackid", trackid);
            console.log(res.data.message);
            setresults(res.data);

            setshowalert(false);
            setissending(false);
            history.push({
              pathname: `/track/${trackid}`,
              state: {results: res.data},
            });

          }
        })
        .catch((error) => {
          console.log(error.name);
          setshowalert(true);
          setalert("Check your Network Connection!!!");
          setissending(false);
        });
    } else {
      setshowalert(true);
      setalert("Empty fields, Check form again!");
      setissending(false);
    }
    e.preventDefault();
  }

  return (
    <>


      <div className="col-md-8 tracking ml-auto mr-auto">
        <div className="">
          <div className=" mt-5">
            <form>
              <div className="input-group white button">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Tracking ID"
                  onChange={(e) => settrackid(e.target.value)}
                  value={trackid}
                  required
                />

                {issending ? (
                  <>
                    <a 
                      type="button"
                      action="submit"
                    >
                        <Spinner color="success" 
                      className="mx-4 my-1"
                      />
                    </a>
                  </>
                ) : (
                  <>
                    <a
                      type="button"
                      action="submit"
                      onClick={(e) => Trackings(e)}
                    >
                      <span
                        className="input-group-text border-0"
                        id="search-addon"
                      >
                        {" "}
                        <box-icon
                          className="box-icon"
                          size="2rem"
                          color=" #096b00"
                          name="search-alt-2"
                          type="logo"
                        ></box-icon>
                      </span>
                    </a>
                  </>
                )}
              </div>
            </form>

            {showalert ? (
              <>
                <Alert color="success">{alert}</Alert>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tracking;
