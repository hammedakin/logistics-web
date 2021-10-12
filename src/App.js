import React from 'react';
import "./App.css";
import "./User.css";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Homepage from "./Pages/Homepage";


// User 
import SendPackage from "./Pages/UserArea/SendPackage";
import UserDashboard from './Pages/UserArea/UserDashboard';
import UserLogin from './Components/User/UserLogin';
import UserRegister from './Components/User/UserRegister';
import UserAuth from './Components/User/UserAuth';
import PageNotFound from './PageNotFound';
import FundWallet from './Components/User/Dashboard/FundWallet';
import Invoice from './Components/User/Invoice';
import TrackOrder from './Pages/UserArea/TrackOrder';


// User 

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />

        <Switch>
          <Route exact path="/" component={Homepage} />

          <Route exact path="/home" component={Homepage} />
        
        {/* User Area  */}

        {/* Log In, Sign Up and Auth */}

        <Route exact path="/register" component={UserRegister} />

        <Route exact path="/auth" component={UserAuth} />

        <Route exact path="/login" component={UserLogin} />

        {/* Log In, Sign Up and Auth */}


        <Route exact path="/dashboard" component={UserDashboard} />

        {/* <Route path="/fund-account" component={FundWallet} /> */}

        
        <Route exact path="/send-package" component={SendPackage} />

        <Route exact path="/send-package/invoice/:trackid" component={Invoice} />
                        
        <Route exact path="/send-package/invoice" component={Invoice} />

        <Route exact path="/track/:trackid" component={TrackOrder} />
        <Route exact path="/track/" component={TrackOrder} />

             
        {/* User Area  */}


      <Route exact path="*" component={PageNotFound}/>

        
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
