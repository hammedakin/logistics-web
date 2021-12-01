import React from 'react';
import "./Styles/App.css";
import "./Styles/User.css";
import "./Styles/Admin.css"
import { BrowserRouter, Route, Switch} from "react-router-dom";
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
import FoodInvoice from './Components/User/Food/FoodInvoice';

// User 

// Admin
import ProtectAdmin from './protectAdmin';
import AdminLogin from './Components/Admin/AdminLogin';
import AdminDashboard from './Pages/AdminArea/AdminDashboard';
import NavButton from './Components/Admin/AdminDashboard/NavButton';
import AllOrder from './Components/Admin/Order/AllOrder';
import EachOrder from './Components/Admin/Order/EachOrder';
import UploadFood from './Components/Admin/AdminFood/UploadFood';
import AdminFood from './Pages/AdminArea/AdminFood';


// Admin



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

        <ProtectUser exact path="/food/invoice/:orderid" component={FoodInvoice} />


        {/* Food */}


        <ProtectUser exact path="/dashboard" component={User} />  

        {/* User Area  */}

        {/* Admin Area  */}
        {/* Log In*/}
        <Route exact path="/admin-login" component={AdminLogin} />
        {/* Log In*/}

        {/* Admin Dashboard */}
        <ProtectAdmin exact path="/admin" component={AdminDashboard} />

        {/* Admin Orders */}

        <ProtectAdmin exact path="/admin/order" component={AllOrder} />

        <ProtectAdmin exact path="/admin/order/package" component={EachOrder} />

        {/* Admin Orders */}

        {/* Admin Food */}
        <ProtectAdmin exact path="/admin/addfood" component={AdminFood} />


        {/* Admin Food */}

        {/* Admin Dashboard */}


        {/* Admin Area  */}



      <Route exact path="*" component={PageNotFound}/>

        
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
