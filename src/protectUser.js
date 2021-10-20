import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const ProtectUser =({component:Component, ...rest}) =>{
 

    
    return(
        <Route
            {...rest}
            render={
            (props)=>{
                if(localStorage.getItem('usertoken')){
                   return <Component {...props}/>
                }
                else{
                    alert("Unauthorized access, please Login or Sign up")
                   return <Redirect to={
                       {
                           pathname:"/login"
                       }
                    }/>

                }
            }
        }/>
    )
}

export default ProtectUser;
