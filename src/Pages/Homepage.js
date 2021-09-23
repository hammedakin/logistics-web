import React from 'react';
import Footer from '../Components/Footer/Footer';
import HomeShowcase from '../Components/HomePage/HomeShowcase';
import WhatWeDo from '../Components/HomePage/WhatWeDo';
import HowToSend from '../Components/HomePage/HowToSend'
import HowItWorks from '../Components/HomePage/HowItWorks'

const Homepage = () => {
    return ( 
        <>
        <HomeShowcase />
        <WhatWeDo/>
        <HowToSend/>
        <HowItWorks/>


        
        <Footer/>
        </>
     );
}
 
export default Homepage;