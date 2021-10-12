import React from 'react';
import UserNavbar from '../../Components/Navbar/UserNavbar'
import TrackInvoice from '../../Components/User/TrackOrder/TrackInvoice';
import TrackShowcase from "../../Components/User/TrackOrder/TrackShowcase";




const TrackOrder = () => {
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