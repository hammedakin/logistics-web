import React from "react";
import InvoiceHistory from "./InvoiceHistory";
import WalletHistory from "./WalletHistory";

const TransHistory = () => {

  return (
    <>

<div className="send-package first">
<div className="mt-5 text-center">
              <h5> Transaction History </h5>
            </div>
          <ul
            class="nav nav-tabs justify-content-center "
            id="myTab"
            role="tablist"
          >
            <li class="nav-item">
              <a
                // onClick={LocalOrder}
                class="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#local"
                role="tab"
                aria-controls="home"
                aria-selected="true"
                // value="local" onClick={e => settype(e.target.value)}
              >
                Invoice
              </a>

            </li>
            
            <li class="nav-item">
              <a
                // onClick={IntOrder}
                class="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#int"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                {" "}
                Wallet{" "}
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
              <InvoiceHistory />
            </div>
            <div
              class="tab-pane fade"
              id="int"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <WalletHistory />
            </div>
          </div>
        </div>
    </>
  );
};

export default TransHistory;
