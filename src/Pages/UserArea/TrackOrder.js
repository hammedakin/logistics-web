import React, { useEffect, useState } from "react";
import UserNavbar from '../../Components/Navbar/UserNavbar'
import TrackInvoice from '../../Components/User/TrackOrder/TrackInvoice';
import TrackShowcase from "../../Components/User/TrackOrder/TrackShowcase";



const TrackOrder = () => {

const [count, setcount] = useState(0);

//    useEffect(() => {
//     window.location.reload();
//   }, [count]);

    return ( 
    <>
    
    <UserNavbar/>
        <div className="send-package">
        <TrackShowcase />

        <TrackInvoice />

        </div>
    
    </>
    
    );
}
 
export default TrackOrder;