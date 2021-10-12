import React, {useState} from "react";
import UserNavbar from '../../Components/Navbar/UserNavbar'

import SendPackageShowcase from "../../Components/User/SendPackage/SendPackageShowcase";
import SendPackageLocal from "../../Components/User/SendPackage/SendPackageLocal";
import SendPackageInt from "../../Components/User/SendPackage/SendPackageInt";

const SendPackage = () => {

  const [type, settype] = useState();


  // function typeOfOrder() {
  //   if (href="#local") {
  //     alert('Local');
  //   } else {
  //     alert('Int');

  //   }
  // }
  
  function LocalOrder() {
    localStorage.setItem("type", "local"); 
  }
  function IntOrder() {
    localStorage.setItem("type", "international"); 
}
 

  return (
    <>
      {/* <main className="dashboard"> */}
          <UserNavbar/>
        <div className="send-package">
          <SendPackageShowcase />
          <ul
            class="nav nav-tabs justify-content-center "
            id="myTab"
            role="tablist"
          >
            <li class="nav-item">
              <a
                onClick={LocalOrder}
                class="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#local"
                role="tab"
                aria-controls="home"
                aria-selected="true"
                // value="local" onClick={e => settype(e.target.value)}
              >
                Local
              </a>

            </li>
            
            <li class="nav-item">
              <a
                onClick={IntOrder}
                class="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#int"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                {" "}
                International{" "}
              </a>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="local"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <SendPackageLocal />
            </div>
            <div
              class="tab-pane fade"
              id="int"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <SendPackageInt />
            </div>
          </div>
        </div>
      {/* </main> */}
    </>
  );
};

export default SendPackage;
