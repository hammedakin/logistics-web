import React from 'react';


const BackButton = () => {

    function goBack() {
        window.history.back(true);
      }
    return ( 
        <>

        <div class="back">
            <button class="btn btn-black" onClick={goBack} > Back </button>
        </div>

        </>
     );
}
 
export default BackButton;