import React from "react";
import Tracking from "./Tracking"; 

const HomeShowcase = () => {
  return (
    <>
      <section class="showcase ">
        <div class="container ">
          <div class="showcase-content ">
            <div class=" animated fadeInUp content col-md-8 ml-auto mr-auto ">
              <h1 class="text-center ">
                {" "}
                SEND GOODS TO ANY PLACE IN THE COUNTRY
              </h1>
            </div>

          </div>
          <Tracking/>

        </div>
      </section>
    </>
  );
};

export default HomeShowcase;
