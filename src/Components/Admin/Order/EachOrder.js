import React from 'react';
import AdminNavbar from '../../Navbar/AdminNavbar'


const EachOrder = (props) => {
  console.log(props)
    return ( 
        <>
        <AdminNavbar />
      <section className="each-order">
      <div className="container">
      Each Other {props.id}
      </div>
      </section>

        </>
     );
}
 
export default EachOrder;