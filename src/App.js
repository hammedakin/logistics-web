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


// User 

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />

        <Switch>
          <Route exact path="/" component={withRouter(Homepage)} />

          <Route exact path="/home" component={Homepage} />
        
        {/* User Area  */}
        <Route exact path="/send-package" component={SendPackage} />
         
        <Route exact path="/login" component={UserLogin} />
        
        <Route exact path="/register" component={UserRegister} />

        <Route exact path="/dashboard" component={UserDashboard} />
        


        {/* User Area  */}
        
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
