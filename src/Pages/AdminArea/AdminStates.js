import React from 'react';
import AddStates from '../../Components/Admin/Order/ManageStates/AddStates';
import AllStates from '../../Components/Admin/Order/ManageStates/AllStates';
import AdminNavbar from "../../Components/Navbar/AdminNavbar"


const AdminStates = () => {
    return ( 
        <>
        <AdminNavbar />
        <section className="adminfood">
            <div className="container-fluid">
                <AddStates />
                <AllStates />
            </div>
        </section>

        </>
     );
}
 
export default AdminStates;