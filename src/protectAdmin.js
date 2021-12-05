import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const ProtectAdmin =({component:Component, ...rest}) =>{
 

    
    return(
        <Route
            {...rest}
            render={
            (props)=>{
                if(localStorage.getItem('ecladmintoken')){
                   return <Component {...props}/>
                }
                else{
                    alert("Unauthorized Admin Access, Please Login or Sign up")
                   return <Redirect to={
                       {
                           pathname:"/admin-login"
                       }
                    }/>

                }
            }
        }/>
    )
}

export default ProtectAdmin;
