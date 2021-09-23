import React from 'react';


const Tracking = () => {
    return ( 
        <>
     
        <div className="col-md-8 tracking ml-auto mr-auto">
                <div className="">
                  <div className=" mt-5">

                    <div className="input-group white button">
                      <input
                        type="email"
                        className="form-control "
                        placeholder="Enter Tracking ID"
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
                            name="search-alt-2"
                            type="logo"
                          ></box-icon>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

        </>
     );
}
 
export default Tracking;