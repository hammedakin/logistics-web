import React from 'react';
import AddZones from '../../Components/Admin/Order/ManageCountries/AddZones';
import AllZones from '../../Components/Admin/Order/ManageCountries/AllZones';

const AdminZones = () => {
    return ( 
        <>
        <div className="adminfood">
            <div className="container-fluid">
              <AddZones />
              <AllZones />
            </div>
        </div>

        </>
     );
}
 
export default AdminZones;