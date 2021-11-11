import React from 'react';
import "./App.css";
import "./User.css";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Homepage from "./Pages/Homepage";
import GetQuote from './Components/HomePage/GetQuote';
import PageNotFound from './PageNotFound';


// User 
import ProtectUser from './protectUser';
import User from './Components/User/Dashboard/User';
import SendPackage from "./Pages/UserArea/SendPackage";
import UserDashboard from './Pages/UserArea/UserDashboard';
import UserLogin from './Components/User/UserLogin';
import UserRegister from './Components/User/UserRegister';
import UserAuth from './Components/User/UserAuth';
import FundWallet from './Components/User/Dashboard/FundWallet';
import Invoice from './Components/User/SendPackage/Invoice';
import TrackOrder from './Pages/UserArea/TrackOrder';
import Food from './Pages/UserArea/Food';
import FoodDetails from './Components/User/Food/FoodDetails'

// User 

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />

        <Switch>
          <Route exact path="/" component={Homepage} />

          <Route exact path="/home" component={Homepage} />

          <Route exact path="/get-quote" component={GetQuote} />
        
        {/* User Area  */}


        <ProtectUser path="/dashboard" component={UserDashboard} />

        {/* Log In, Sign Up and Auth */}

        <Route exact path="/register" component={UserRegister} />

        <Route exact path="/auth" component={UserAuth} />

        <Route exact path="/login" component={UserLogin} />

        {/* Log In, Sign Up and Auth */}

        {/* Send Package */}

        <ProtectUser exact path="/send-package" component={SendPackage} />

        <ProtectUser exact path="/send-package/invoice/:trackid" component={Invoice} />
                        
        <ProtectUser exact path="/send-package/invoice" component={Invoice} />

        {/* Send Package */}

        {/* Tracking */}
        <ProtectUser exact path="/track/:trackid" component={TrackOrder} />
        
        <ProtectUser exact path="/track/" component={TrackOrder} />

        {/* Tracking */}

        {/* Food */}
        
        <ProtectUser exact path="/food" component={Food} />
        
        <ProtectUser exact path="/food/:id" component={FoodDetails} />

        {/* Food */}


        <ProtectUser exact path="/dashboard" component={User} />             
        {/* User Area  */}


      <Route exact path="*" component={PageNotFound}/>

        
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
