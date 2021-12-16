import React, {useState} from "react";
import AdminNavbar from '../../Components/Navbar/AdminNavbar'
import AdCreateLocal from "../../Components/Admin/Order/AdminCreateOrder/AdCreateLocal";
import AdCreateInt from "../../Components/Admin/Order/AdminCreateOrder/AdCreateInt";

const AdCreateOrder = () => {
 

  return (
    <>
          <AdminNavbar/>
      <section className="">
        <div className="send-package admin-create-order">
          <ul
            class="nav nav-tabs justify-content-center "
            id="myTab"
            role="tablist"
          >
            <li class="nav-item">
              <a
                class="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#local"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Local
              </a>

            </li>
            
            <li class="nav-item">
              <a
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
              <AdCreateLocal />
            </div>
            <div
              class="tab-pane fade"
              id="int"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <AdCreateInt />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdCreateOrder;
