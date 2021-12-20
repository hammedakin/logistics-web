import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { Spinner, Alert } from "reactstrap";

const DelFranchise = (props) => {
  const [apptoken, setapptoken] = useState(process.env.REACT_APP_APPTOKEN);
  const [endpoint, setendpoint] = useState(process.env.REACT_APP_ENDPOINT);

  const [load, setload] = useState(false);
  const [showalert, setshowalert] = useState(false);
  const [alert, setalert] = useState("");

  // useEffect(() => {
    // console.log(props.usertoken);
  // });

  const DelFran = () => {
    setload(true);
      const data = new FormData();
      data.append("usertoken", props.usertoken);
      data.append("apptoken", apptoken);

      axios
        .post(`${endpoint}/v1/admin-remove-franchise`, data, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
      .then((res) => {
        if (res.data.success == false) {
          console.log(res.data);
          setload(false);
          setshowalert(true);
          setalert(res.data.message);
        } else {
          // setusertoken(res.data.usertoken);
          console.log(res.data);
          setload(false);
          setshowalert(true);
          setalert(res.data.message, "error");
        }
      })
      .catch((error) => {
        console.log(error.response);
        setload(false);
        setshowalert(true);
        setalert("Check your Network Connection!!!");
      });
  };

    function reload() {
      window.location.reload();
    }


  return (
    <>
      <Modal
        show={props.show}
        onHide={props.onHide}
        backdrop="static"
        keyboard={false}
        centered
      >
      
        <Modal.Header closeButton onClick={reload}></Modal.Header>
        <Modal.Body style={{ backgroundColor: "transparent!important" }}>
          <section class=" ">
            <div class="container">
              <div class="text-center mb-5">
                <h4>
                  {" "}
                  Are you sure you want to delete this Franchise-{" "}
                  <span class=" h4 font-weight-bold red-text">
                    {" "}
                    {props.usertoken}{" "}
                  </span>
                </h4>
              </div>

              <div class="text-center h5">
             
                {showalert ? (
                  <>
                    <Alert color="danger">{alert}</Alert>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </section>
        </Modal.Body>
        <Modal.Footer>
          <div class="ml-auto mr-auto">
            {load ? (
              <>
                <button type="button" class="btn btn-danger  btn my-0" disabled>
                  Deleting <Spinner color="light" />
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  class="btn btn-danger  btn my-0"
                  onClick={(e) => DelFran(e)}
                >
                  Delete Franchise                </button>
              </>
            )}
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DelFranchise;
