import React, { useState } from "react";


const AdminHeader = () => {
const [name, setname] = useState(localStorage.getItem('adminname'));

  return (
    <>
      <div className="welcome text-left">
        <h6>
          {" "}
          Welcome back, <span> {name} </span> 😃{" "}
        </h6>
      </div>

      <div className="green">

      </div>
    </>
  );
};

export default AdminHeader;
