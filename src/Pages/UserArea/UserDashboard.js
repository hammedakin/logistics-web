import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "../../Components/Navbar/UserNavbar";
import DashboardHeader from "../../Components/User/Dashboard/DashboardHeader";
import TransHistory from "../../Components/User/Dashboard/TransHistory";
import UserFooter from "../../Components/Footer/UserFooter";
import FundWallet from "../../Components/User/Dashboard/FundWallet";
import Invoice from "../../Components/User/Invoice";

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
                <Route exact path="/dashboard/fund-account" component={FundWallet} />

                <Route exact path="/dashboard" component={TransHistory} />

               </Switch>


            </div>

        </main>
        <UserFooter />
      </BrowserRouter>
    </>
  );
};

export default UserDashboard;
