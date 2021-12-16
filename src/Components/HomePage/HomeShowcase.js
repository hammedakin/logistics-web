import React from "react";
import Tracking from "../User/TrackOrder/Tracking";

const HomeShowcase = () => {
  return (
    <>
      <section class="showcase ">
        <div class="container ">
          <div class="showcase-content ">
            <div class=" animated fadeInUp content col-md-8 ml-auto mr-auto ">
              <h1 class="text-center ">
                DELIVERY, SIMPLIFIED.
                {/* SIMPLIFYING DELIVERIES FOR AFRICAN MERCHANTS   */}
              </h1>
            </div>
          </div>
          <Tracking />
        </div>
      </section>
    </>
  );
};

export default HomeShowcase;
