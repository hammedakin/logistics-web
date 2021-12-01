import React from "react";
import AdminHeader from "../../Components/Admin/AdminDashboard/AdminHeader";
import NavButton from "../../Components/Admin/AdminDashboard/NavButton";
import AdminNavbar from "../../Components/Navbar/AdminNavbar"

const AdminDashboard = () => {

  return (
    <>
    <AdminNavbar />
      <section className="admin-dashboard">
        <div className="container-fluid">
        <AdminHeader/>
        <NavButton/>
        </div>
      </section>
    </>
  );
};

export default AdminDashboard;
