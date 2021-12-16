import React from 'react';
import AddTown from '../../Components/Admin/Order/ManageTown/AddTown';
import AllTown from '../../Components/Admin/Order/ManageTown/AllTown';
import AdminNavbar from "../../Components/Navbar/AdminNavbar"


const AdminTown = () => {
    return ( 
        <>
        <AdminNavbar />
        <section className="adminfood">
            <div className="container-fluid">
                <AddTown />
                <AllTown />
            </div>
        </section>

        </>
     );
}
 
export default AdminTown;