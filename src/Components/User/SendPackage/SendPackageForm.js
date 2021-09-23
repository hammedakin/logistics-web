import React from "react";

const SendPackageForm = () => {
  return (
    <>
      <section className="send">
        <div className="container">
          <h5 className="text-center"> SEND PACKAGE </h5>

          <div className="form">
            <form>
              <div className="row">
                {/* Sender Details  */}
                {/* Sender Details  */}

                <div className="col-md-6">
                  <h5 className="text-center"> Sender's Details </h5>

                  <div className="row justify-content-center">
                    <div className="col-md-10 ">
                      <select
                        name="network"
                        id="coin_network"
                        className="input-style "
                        required=""
                      >
                        <option value="" selected="">
                          Select Country *
                        </option>
                        <option value="Nigeria"> Nigeria</option>
                      </select>
                    </div>

                    <div className="col-md-10 ">
                      <select
                        name="network"
                        id="coin_network"
                        className="input-style"
                        required=""
                      >
                        <option value="" selected="">
                          Select State *
                        </option>
                        <option value="Oyo"> Oyo State</option>
                        <option value="Osun"> Osun State</option>
                      </select>
                    </div>

                    <div className="col-md-10 ">
                      {/* <label> City </label> */}

                      <div className="input-group">
                        <input
                          type="text"
                          className=" input-style"
                          placeholder="Enter City *"
                        />
                      </div>
                    </div>

                    <div className="col-md-10 ">
                      {/* <label> Address </label> */}

                      <div className="input-group">
                        <input
                          type="text"
                          className=" input-style"
                          placeholder="Enter Address *"
                        />
                      </div>
                    </div>

                    <div className="col-md-10 ">
                      {/* <label> Phone Number </label> */}

                      <div className="input-group">
                        <input
                          type="number"
                          className=" input-style"
                          placeholder="Phone Number *"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sender Details  */}
                {/* Sender Details  */}

                {/* Receiver Details  */}
                {/* Receiver Details  */}

                <div className="col-md-6">
                  <h5 className="text-center"> Receiver's Details </h5>

                  <div className="row justify-content-center">
                    <div className="col-md-10 ">
                      <select
                        name="network"
                        id="coin_network"
                        className="input-style "
                        required=""
                      >
                        <option value="" selected="">
                          Select Country *
                        </option>
                        <option value="Nigeria"> Nigeria</option>
                      </select>
                    </div>

                    <div className="col-md-10 ">
                      <select
                        name="network"
                        id="coin_network"
                        className="input-style"
                        required=""
                      >
                        <option value="" selected="">
                          Select State *
                        </option>
                        <option value="Oyo"> Oyo State</option>
                        <option value="Osun"> Osun State</option>
                      </select>
                    </div>

                    <div className="col-md-10 ">
                      {/* <label> City </label> */}

                      <div className="input-group">
                        <input
                          type="text"
                          className=" input-style"
                          placeholder="Enter City *"
                        />
                      </div>
                    </div>

                    <div className="col-md-10 ">
                      {/* <label> Address </label> */}

                      <div className="input-group">
                        <input
                          type="text"
                          className=" input-style"
                          placeholder="Enter Address *"
                        />
                      </div>
                    </div>

                    <div className="col-md-10 ">
                      {/* <label> Phone Number </label> */}

                      <div className="input-group">
                        <input
                          type="number"
                          className=" input-style"
                          placeholder="Phone Number *"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Receiver Details  */}
                {/* Receiver Details  */}

                {/* Item Details  */}
                {/* Item Details  */}

                <div className="col-md-6">
                  <h5 className="text-center"> Item Info </h5>

                  <div className="row justify-content-center">
                    <div className="col-md-10 ">
                      <div className="input-group">
                        <input
                          type="text"
                          className=" input-style"
                          placeholder="Title of Order *"
                        />
                      </div>
                    </div>

                    <div className="col-md-10 ">
                      <div className="input-group">
                        <input
                          type="number"
                          className=" input-style"
                          placeholder="Enter Weight (kg) *"
                        />
                      </div>
                    </div>

                    <div className="col-md-10 ">
                      <div className="input-group">
                        <input
                          type="number"
                          className=" input-style"
                          placeholder="Enter Value of Item (₦) *"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item Details  */}
                {/* Item Details  */}

                {/* Means Details  */}
                {/* Means Details  */}

                <div className="col-md-6">
                  <h5 className="text-center"> Means Info </h5>

                  <div className="row justify-content-center">
                    <div className="col-md-10 ">
                      <div className="input-group">
                        <textarea
                          type="text"
                          className="input-style textarea-style"
                          placeholder="Enter Detailed Address *"
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-md-10 ">
                      <div className="input-group">
                        <textarea
                          type="text"
                          className="input-style textarea-style"
                          placeholder="Enter Detailed Address *"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Means Details  */}
                {/* Means Details  */}

                <div class="col-md-12  mx-auto text-center">
                  <div class=" mb-4 ">
                    <button
                      type="button"
                      class="btn shadow waves-effect"
                      action="submit"
                    >
                      {" "}
                      <strong> Send </strong>{" "}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SendPackageForm;
