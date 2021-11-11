import React from 'react';
import UserNavbar from '../../Components/Navbar/UserNavbar';
import FoodList from '../../Components/User/Food/FoodList';
import FoodShowcase from '../../Components/User/Food/FoodShowcase';

const Food = () => {
    return ( 
        <>
        <UserNavbar />

        <div className="send-package">
        <FoodShowcase />
        <FoodList />
        
        
        </div>
        </>
     );
}
 
export default Food;