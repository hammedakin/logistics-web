import React from 'react';
import Navbar from '../../Components/Navbar/UserNavbar';
import DashboardHeader from '../../Components/User/Dashboard/DashboardHeader';
import TransHistory from '../../Components/User/Dashboard/TransHistory';


const UserDashboard = () => {
    return ( 
        <>

        <Navbar/>
        <main className="dashboard">
            <div className="container">
                {/* <h4> DASHBOARD </h4> */}

                <DashboardHeader/>
                <TransHistory/>



            </div>
        </main>

        </>
     );
}
 
export default UserDashboard;