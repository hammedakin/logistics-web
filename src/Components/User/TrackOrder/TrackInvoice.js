import React, { useEffect, useState } from "react";
import icon from "./img/icon.svg";
import img from "./img/icons1.png";

const TrackInvoice = () => {

  const [alltrackdetails, setalltrackdetails] = useState([]);
  const [trackid, settrackid] = useState(localStorage.getItem('trackid'));
  const [count, setcount] = useState(0);


  const fetchtrack = () => {

  if (localStorage.getItem('results') == null) {
    console.log("No Tracking Details Gotten");
  } else {
    setalltrackdetails(JSON.parse(localStorage.getItem('results')));
  };

};
useEffect(() => {
  fetchtrack();
}, [count]);


    const trackdetails = alltrackdetails.map((item) => {

        return (
            <li>
            <div className="eachorder">
              <img src={icon} width="70px" className="img" />
              <div className="first col-md-10">
                <h6 class="">
                {item.log}   </h6>
                <p class="grey-text smaller-text">{item.timestamp} </p>
              <hr className="p-0 m-0" />
              <p class="smaller-text">{item.sender} </p>

              </div>
            </div>
          </li>
    
        );
      }).reverse();
    


  return (
    <>

    
    {localStorage.getItem('results') == null  ?  (
        <>
        <div className="mt-5 text-center">
          <img src={img} width="100px" />
      <h5 class="mt-3 font-weight-normal" style={{color: "#CCCCCC"}}> Track ID is empty ...</h5>  
      </div>  
     </>
    ) : (
<>
        <div className="track">
        <div className="container">
          <div className="mb-4">
            <h6 className="ml-2">
             
              Tracking Number -
              <span className="h5 font-weight-bold"> 
             {trackid} </span>
         
            </h6>
          
          </div>

          <div className="">
            <ol>

                {trackdetails}

            </ol>
          </div>
        </div>
      </div>
      </>
    )}


    
    </>
  );
};

export default TrackInvoice;
