import React from 'react';
import { useRouteMatch, Switch, Route } from "react-router-dom";
import SendPackage from '../../../Pages/UserArea/SendPackage';
import TrackOrder from '../../../Pages/UserArea/TrackOrder';
import UserDashboard from '../../../Pages/UserArea/UserDashboard';
import Invoice from '../SendPackage/Invoice';
import FundWallet from './FundWallet';




const User = () => {
    const { url, path } = useRouteMatch();

    return ( 
        <>
<section>
<Switch>
                <Route path={`${path}/dashboard`}>
                    <UserDashboard />
                </Route>
                <Route path={`${path}/send-package`}>
                    <SendPackage />
                </Route>
                <Route path={`${path}/send-package/invoice/:trackid`}>
                    <Invoice />
                </Route>
                <Route path={`${path}/send-package/invoice`}>
                    <Invoice />
                </Route>
                <Route path={`${path}/track/:trackid`}>
                    <TrackOrder />
                </Route>
                <Route path={`${path}/track/`}>
                    <TrackOrder />
                </Route>
                <Route path={`${path}/dashboard/fund-account`}>
                    <FundWallet />
                </Route>
            </Switch>


</section>

        </>
     );
}
 
export default User;