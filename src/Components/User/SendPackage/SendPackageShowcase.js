import React from "react";
import Tracking from "../TrackOrder/Tracking";

const SendPackageShowcase = () => {
  return (
    <>
      <section class="sendshowcase showcase ">
        <div class="container ">
          <div class="showcase-content ">
            <div class=" animated fadeInUp content col-md-8 ml-auto mr-auto ">
              <h1 class="text-center ">
                {" "}
               SHIP GOODS
              </h1>
            </div>

          </div>
          <Tracking/>

        </div>
      </section>
    </>
  );
};

export default SendPackageShowcase;
