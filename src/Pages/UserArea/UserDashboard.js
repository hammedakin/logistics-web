import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "../../Components/Navbar/UserNavbar";
import DashboardHeader from "../../Components/User/Dashboard/DashboardHeader";
import TransHistory from "../../Components/User/Dashboard/TransHistory";
import UserFooter from "../../Components/Footer/UserFooter";
import FundWallet from "../../Components/User/Dashboard/FundWallet";
import ProtectUser from "../../protectUser";

const UserDashboard = () => {
  return (
    <>
        <Navbar />

      <BrowserRouter>
        <main className="dashboard">
          <div className="container">
            <DashboardHeader />
            </div>

            <div className="dash-body container">
              <Switch>
                <ProtectUser exact path="/dashboard/fund-account" component={FundWallet} />

                <ProtectUser exact path="/dashboard" component={TransHistory} />

               </Switch>


            </div>

        </main>
        <UserFooter />
      </BrowserRouter>
    </>
  );
};

export default UserDashboard;
