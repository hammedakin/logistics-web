import React from "react";
import AdminNavbar from '../../../Navbar/AdminNavbar'
import AdminCountries from "../../../../Pages/AdminArea/AdminCountries";
import AdminZones from "../../../../Pages/AdminArea/AdminZones";

const CountryAndZone = () => {
  return (
    <>
    <AdminNavbar />
      <div className="send-package first pt-5">
        <div className="mt-5 text-center">
          {/* <h5> Transaction History </h5> */}
        </div>
        <div className="trans-history">
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
              href="#country"
              role="tab"
              aria-controls="home"
              aria-selected="true"
         
            >
              Country
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="home-tab"
              data-toggle="tab"
              href="#zones"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Zone
            </a>
          </li>

        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="country"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <AdminCountries />
          </div>
          <div
            class="tab-pane fade"
            id="zones"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <AdminZones />
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default CountryAndZone;
