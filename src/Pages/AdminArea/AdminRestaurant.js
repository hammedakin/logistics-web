import React from 'react';
import AdminAllRestaurant from '../../Components/Admin/AdminRestaurant/AdminAllRestaurant';
import UploadRestaurant from '../../Components/Admin/AdminRestaurant/UploadRestaurant';
import AdminNavbar from "../../Components/Navbar/AdminNavbar"


const AdminRestaurant = () => {
    return ( 
        <>
        <AdminNavbar />
        <section className="adminfood">
            <div className="container-fluid">
                <UploadRestaurant/>
                <AdminAllRestaurant/>
            </div>
        </section>

        </>
     );
}
 
export default AdminRestaurant;