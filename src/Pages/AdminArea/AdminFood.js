import React from 'react';
import AdminAllFood from '../../Components/Admin/AdminFood/AdminAllFood';
import UploadFood from '../../Components/Admin/AdminFood/UploadFood';
import AdminNavbar from "../../Components/Navbar/AdminNavbar"


const AdminFood = () => {
    return ( 
        <>
        <AdminNavbar />
        <section className="adminfood">
            <div className="container-fluid">
                <UploadFood />
                <AdminAllFood/>
            </div>
        </section>

        </>
     );
}
 
export default AdminFood;