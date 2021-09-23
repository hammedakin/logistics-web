import React from "react";
import img1 from "./img/Rectangle1.png";
import img2 from "./img/Rectangle2.png";
import img3 from "./img/Rectangle3.png";

const HowItWorks = () => {
  return (
    <>
      <section class="howitworks">
        <div class="container">
          <div class="text-center mb-5 ">
            {/* <h3>
              {" "}
              How <span class="abulesowo"> Abulesowo </span>{" "}
              <span class="works"> works</span>{" "}
            </h3> */}
            <h6 class="   ml-auto mr-auto ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempor magna dolor
            </h6>
          </div>

          {/* Card 1  */}

          <div class="card1">
            <div class="row">
              <div class="col-md-6 ">
                <img src={img1} alt="" class="shadow" width="100%" />
              </div>
              <div class="col-md-4 align-self-center ml-auto mr-auto text-center p-5 ">
                <h5>Lorem ipsum dolor</h5>
                <p class="my-5 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempor magna dolor
                </p>

                <div
                  class=""
                  style={{ backgroundColor: "#096b00", padding: "2px" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Card 1  */}

          {/* Card 2  */}

          <div class="card2">
            <div class="row">
              <div class="col-md-4 align-self-center ml-auto mr-auto text-center p-5 ">
                <h5>Consectetur adipiscing</h5>
                <p class="my-5 ">
                Cras sit amet urna diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <div
                  class=""
                  style={{ backgroundColor: "#096b00", padding: "2px" }}
                ></div>
              </div>
              <div class="col-md-6 ">
                <img src={img2} alt="" class="shadow" width="100%" />
              </div>
            </div>
          </div>

          {/* Card 2  */}


             {/* Card 3  */}

             <div class="card1">
            <div class="row">
              <div class="col-md-6 ">
                <img src={img3} alt="" class="shadow" width="100%" />
              </div>
              <div class="col-md-4 align-self-center ml-auto mr-auto text-center p-5 ">
                <h5>Curabitur </h5>
                <p class="my-5 ">
                Vestibulum feugiat lacus sed vehicula interdum. Pellentesque ornare eleifend dolor
                </p>

                <div
                  class=""
                  style={{ backgroundColor: "#096b00", padding: "2px" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Card 3  */}


        </div>
      </section>
    </>
  );
};

export default HowItWorks;
