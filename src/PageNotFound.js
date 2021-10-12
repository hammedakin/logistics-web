import React from 'react';
import { Link } from 'react-router-dom';
import gif from './pageNotFound.gif'

const PageNotFound = () => {
    return ( 

        <>
    <section class="pagenotfound">
        <div class="container">

            <div class="giffy mr-auto mb-5 ml-auto">
                <img src={gif} class="gif" width="50%" alt="pagenotfound" />
            </div>
            
            <div class=" text-center">
                <h4> Hii! This is a Broken Link, Page not Found. </h4>

<Link to="/">
<button class="btn"> Go back Home </button>

</Link>
            </div>
        </div>
    </section>


        </>
     );
}
 
export default PageNotFound;