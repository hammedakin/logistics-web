import React from 'react';
import AddCountries from '../../Components/Admin/Order/ManageCountries/AddCountries';
import AllCountries from '../../Components/Admin/Order/ManageCountries/AllCountries';

const AdminCountries = () => {
    return ( 
        <>
        <div className="adminfood">
            <div className="container-fluid">
              <AddCountries />
              <AllCountries />
            </div>
        </div>

        </>
     );
}
 
export default AdminCountries;