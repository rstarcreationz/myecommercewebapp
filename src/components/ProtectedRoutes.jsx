import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";


const ProtectedRoutes = (props) => {
    const history = useHistory();
    let Cmp = props.Cmp
    useEffect(()=>{
        if(!localStorage.getItem("user-info")) {
            history.push('./login')
        }
    },[])
    return (
       <>
       <Cmp/>
       </>
    );
}

export default ProtectedRoutes;