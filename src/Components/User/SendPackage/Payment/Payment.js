import React from 'react';
import NormalPay from './NormalPay';

const Payment = () => {
<>
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
                Normal
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
              <NormalPay/>
            </div>
            <div
              class="tab-pane fade"
              id="int"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
            </div>
          </div>


</>
};

export default Payment;