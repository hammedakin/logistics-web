import React from 'react';
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer';
import HomeShowcase from '../Components/HomePage/HomeShowcase';
import WhatWeDo from '../Components/HomePage/WhatWeDo';
import HowToSend from '../Components/HomePage/HowToSend'
import HowItWorks from '../Components/HomePage/HowItWorks'
import GetQuote from '../Components/HomePage/GetQuote';

const Homepage = () => {
    return ( 
        <>
        <Navbar/>
        <HomeShowcase />
        <WhatWeDo/>
        <HowToSend/>
        <GetQuote/>
        <HowItWorks/>


        
        <Footer/>
        </>
     );
}
 
export default Homepage;