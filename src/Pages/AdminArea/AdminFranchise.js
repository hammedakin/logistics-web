import React from 'react';
import AddFranchise from '../../Components/Admin/Account/ManageFranchise/AddFranchise';
import AllFranchise from '../../Components/Admin/Account/ManageFranchise/AllFranchise';
import AdminNavbar from "../../Components/Navbar/AdminNavbar"


const AdminFranchise = () => {
    return ( 
        <>
        <AdminNavbar />
        <section className="adminfood">
            <div className="container-fluid">
                <AddFranchise />
                <AllFranchise />
            </div>
        </section>

        </>
     );
}
 
export default AdminFranchise;