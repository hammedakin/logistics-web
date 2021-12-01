import React from 'react';
import { Link } from "react-router-dom";


const Footer = () => {
    return ( 
        <>
 <section class="footer">
        <footer class="page-footer font-small">
          <div class="container text-center text-md-left mb-5 pt-5">
            <div class="row">
             
            <div class="col mx-auto">
                <h6 class="font-weight-bold mt-3 mb-4">Contact Us</h6>

                <ul class="list-unstyled">
                  <li>
                    <a href="#!">
                      <span class="mr-2">
                        {" "}
                        <box-icon
                          class="box-icon"
                          size="12px"
                          color=" #fff"
                          name="location-plus"
                          type="solid"
                        ></box-icon>
                      </span>
                      No 5 Beside Commodore Guest House, Elebu, Oluyole Extension, Ibadan.                    </a>
                  </li>
                  <li>
                    <a href="tel:+2348187154281">
                      <span class="mr-2">
                        {" "}
                        <box-icon
                          class="box-icon"
                          size="12px"
                          color=" #fff"
                          name="phone"
                          type="solid"
                        ></box-icon>
                      </span>
                      +234 818 7154 281
                    </a>
                  </li>

                  <li>
                    <a href="mailto:info@eclipse.ng">
                      <span class="mr-2">
                        {" "}
                        <box-icon
                          class="box-icon"
                          size="12px"
                          color=" #fff"
                          name="envelope"
                          type="solid"
                        ></box-icon>
                      </span>
                      info@eclipse.ng{" "}
                    </a>
                  </li>
                </ul>
              </div>

            

              <hr class="clearfix w-100 d-md-none" />


              <div class="col-md-2 mx-auto">
                <h6 class="font-weight-bold mt-3 mb-4">Links</h6>

                <ul class="list-unstyled">
                  <li>
                    <Link to="/track">Track Order</Link>
                  </li>
                  <li>
                    <Link to="/send-package">Request Shipment</Link>
                  </li>
                  <li>
                    <Link to="/food">Buy Food</Link>
                  </li>
                  <li>
                    <Link to="/register">Sign Up</Link>
                  </li>
               
                </ul>
              </div>

              <hr class="clearfix w-100 d-md-none" />

              <div class="col mx-auto">
                <h6 class="font-weight-bold mt-3 mb-4">Newsletter</h6>

                <ul class="list-unstyled">
                <div className="col-md-12 tracking ml-auto mr-auto">
                <div className="">
                  <div className="">

                    <div className="input-group white button">
                      <input
                        type="email"
                        className="form-control "
                        placeholder="Enter E-mail Address"
                      />
                      <a type="button">
                        <span
                          className="input-group-text border-0"
                          id="search-addon"
                        >
                          {" "}
                          <box-icon
                            className="box-icon"
                            size="2rem"
                            color=" #096b00"
                            name="envelope"
                            type="solid"
                          ></box-icon>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

                
                </ul>
              </div>

            </div>

            <div class="ml-auto mr-auto">
                <h6 class="font-weight-bold white-text text-center mt-3 mb-4">
                  CONNECT WITH US
                </h6>
                <div class="text-center mb-3 boxicons">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <box-icon
                      class="box-icon"
                      size="1.5rem"
                      color=" #fff"
                      type="logo"
                      name="facebook"
                    ></box-icon>
                  </a>

                  <a href="https://instagram.com/">
                    <box-icon
                      class="box-icon"
                      size="1.5rem"
                      color=" #fff"
                      name="instagram"
                      type="logo"
                    ></box-icon>
                  </a>

                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <box-icon
                      class="box-icon"
                      size="1.5rem"
                      color=" #fff"
                      name="twitter"
                      type="logo"
                    ></box-icon>
                  </a>

                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <box-icon
                      class="box-icon"
                      size="1.5rem"
                      color=" #fff"
                      name="youtube"
                      type="logo"
                    ></box-icon>
                  </a>

                  <a
                    href="https://g.page/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <box-icon
                      class="box-icon"
                      size="1.5rem"
                      color=" #fff"
                      name="google-plus"
                      type="logo"
                    ></box-icon>
                  </a>
                </div>
              </div>
          </div>

          <div class="footer-copyright white black-text text-center py-3">
            Copyright © 2021{" "}
            <a href="https://eclipse.com.ng" class="green-text ">
              {" "}
              eclipse.com.ng{" "}
            </a>{" "}
            || All rights reserved

          <hr class="my-1 w-50"/>

          <div style={{fontSize: "smaller"}}>
            Developed by
            <a href="https://fireswitch.tech" class="green-text ">
              {" "}
              FireSwitch Technologies{" "}
            </a>
            </div>
          </div>
        </footer>
      </section>

        </>
     );
}
 
export default Footer;