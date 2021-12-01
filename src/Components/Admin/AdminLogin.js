import React, { useState } from "react";
import axios from "axios";
import { Spinner, Alert } from "reactstrap";
import { useHistory } from "react-router";
// import img from "./img/bicycle.png";
import { Link } from "react-router-dom";

const AdminLogin = () => {

  const [mail, setmail] = useState("");
  const [pword, setpword] = useState("");
  // const [fullname, setfullname] = useState("");
  // const [admintoken, setadmintoken] = useState("");
  // const [email, setemail] = useState("");
  // const [phone, setphone] = useState("");


  const [issending, setissending] = useState(false);
  const [showalert, setshowalert] = useState(false);
  const [alert, setalert] = useState("");

  let history = useHistory() 

  function Login(e) {
    if(mail, pword){
      setissending(true)


      const data = new FormData();
      data.append("email", mail);
      data.append("password", pword);
      data.append("apptoken", "T9H1E6KUYM");

      axios
      .post(`https://test.api.eclipse.com.ng/v1/admin-login`, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(alert);
     
        if (res.data.success === true) {
          localStorage.setItem("admintoken", res.data.admintoken)
          localStorage.setItem("adminmail", res.data.email)
          localStorage.setItem("adminname", res.data.fullname)
          setshowalert(true);
          // setemail(res.data.email)
          // setfullname(res.data.fullname)
          // setadmintoken(res.data.admintoken)
          // setphone(res.data.phone)
          setalert("Email or Password not correct");
          setissending(false);
          history.push("/admin")
        } else {
          setshowalert(true);
          setalert(res.data.message, 'error');
          setissending(false);
        }
      })
      .catch((error) => {
        console.log(error.name);
        setshowalert(true);
        setalert("Check your Network Connection!!!");
        setissending(false);
      });
      
    }else{
       setshowalert(true)
       setalert('Empty fields, Check form again!')
       setissending(false)
     }
    e.preventDefault();
  }

function myInput() {
  var x = document.getElementById("security");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password"
  }
}
// function eyeChange() {
//   var x = document.getElementById("eye");
//   if (x.type === 'solid') {
//     x.type = '';
//   } else {
//     x.type = 'solid'
//   }
// }



  return (
    <>
      <main className="login animated fadeInRight">
        

          {/* Login Form  */}
            <div className="">
              <div className="col-md-6 ml-auto mr-auto mt-5">
                <div className="mb-4">
                <h6 className=""> Welcome to the Admin Arena  </h6>
                <h5 className=""> Login to your account</h5>
                </div>
              

                <div className="form">
                  <form>
                    <div className="row justify-content-center">
                      <div className="col-md-12 ">
                        <label> E-mail </label>

                        <div className="input-group">
                          <input
                            type="email"
                            className=" input-style"
                            placeholder="Enter e-mail"
                            onChange={(e) => setmail(e.target.value)}
                            value={mail}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-12 ">
                        <label> Password </label>

                        <div className="input-group">
                          <input
                            type="password"
                            className=" input-style"
                            id="security"
                            placeholder="Enter Password"
                            onChange={(e) => setpword(e.target.value)}
                        value={pword}
                            required
                          />
                            <a class="bi bi-eye-slash bi-eye toggle-eye" id="togglePassword" onClick={myInput}>
                            <box-icon type='solid' name='show' id="eye"></box-icon>
                            </a>
                          {/* <input type="checkbox" onClick={myInput} /> <p style={{fontSize: "smaller"}}> Show Password </p> */}
                        </div>
                      </div> 

                      <div class="col-md-12  mx-auto text-center">
                      {showalert ? (
                <>
                  <Alert color="success">{alert}</Alert>
                </>
              ) : (
                <></>
              )}
                        <div class="mb-4">
                                           
                {issending ? (
                      <>

                        <button
                            type="button"
                            class="btn shadow waves-effect"
                            action="submit"
                          >
                            {" "}
                            <strong>  Logging In <Spinner color="light" size="0.1rem" />  </strong>{" "}
                          </button>
                      </>
                    ) : (
                      <>
                             <button
                            type="button"
                            class="btn shadow waves-effect"
                            action="submit"
                          onClick={(e) => Login(e)}

                          >
                            {" "}
                            <strong> submit </strong>{" "}
                          </button>
                      </>
                    )}
                        </div>
                      </div>

                    
                    </div>
                  </form>

                  {/* <div className="text-center">
                        <h6> Dont have an account? <Link to="/register"> Join free today </Link>
                        </h6>
                     </div>
                     <hr/> */}

                     <div className="text-center">
                     <h6 class="ml-auto pr-3">Forget Password? <Link to=""> Click Here</Link> </h6>     
                     </div>
                </div>
              </div>
          {/* Login Form  */}

          {/* <div className="col-md-6 hide-on-small">
            <img src={img} width="100%" />
          </div> */}
        </div>
      </main>
    </>
  );
};

export default AdminLogin;
