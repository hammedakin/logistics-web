import React from "react";
import Tracking from "../TrackOrder/Tracking";

const TrackShowcase = () => {
  return (
    <>
      <section class="sendshowcase showcase ">
        <div class="container ">
          <div class="showcase-content ">
            <div class=" animated fadeInUp content col-md-8 ml-auto mr-auto ">
              <h1 class="text-center ">
                {" "}
               TRACK SHIPMENT
              </h1>
            </div>

          </div>
          <Tracking/>

        </div>
      </section>
    </>
  );
};

export default TrackShowcase;
