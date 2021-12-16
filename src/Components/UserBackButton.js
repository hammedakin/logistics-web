import React from 'react';
import {useHistory} from "react-router-dom";

const UserBackButton = () => {
    const history = useHistory();

    function gooBack() {
        history.goBack();
      }
    return ( 
        <>

        <div class="userback">
            <a class="" onClick={gooBack} > <box-icon name='chevron-left' size="2.5rem" ></box-icon> </a>
        </div>

        </>
     );
}
 
export default UserBackButton;