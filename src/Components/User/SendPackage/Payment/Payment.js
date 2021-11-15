import React from 'react';
import NormalPay from './NormalPay';
import { useState } from 'react';
import ExpressPay from './ExpressPay';

const Payment = (props) => {

  return ( <>
  <div className="payment">
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
                href="#normal"
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
                href="#express"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                {" "}
                Express{" "}
              </a>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="normal"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              
              <NormalPay trackid={props.trackid} price={props.price} priceth={props.priceth} type={props.type} status={props.status} />
            </div>
            <div
              class="tab-pane fade"
              id="express"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <ExpressPay trackid={props.trackid} express={props.express} expressth={props.expressth} type={props.type} status={props.status}   />

            </div>
          </div>
          </div>
  </> );
}
 
export default Payment;