import { useEffect, useState } from "react";
import React from "react";
import {useParams } from "react-router-dom";
import axios from "axios";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



const ViewUser = () =>{

    const {id} = useParams();
    const [ViewUser, UpdateViewUser] = useState([]);

    const {fullname, email, address} = ViewUser

    useEffect(()=>{
        Loaduser();
    },[])

    const Loaduser = async () => {
        const result = await axios.get(`http://localhost:3333/profile/${id}`)
        UpdateViewUser (result.data);
    }

    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="pt-5 text-center">
                        <p>
                        <span>Full Name :</span> &nbsp; <span><strong>{fullname}</strong></span>
                        </p>
                        <p>
                        <span>Email :</span> &nbsp; <span><strong>{email}</strong></span>
                        </p>
                        <p>
                        <span>Address :</span> &nbsp; <span><strong>{address}</strong></span>
                        </p>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
        </>
    );
}

export default ViewUser;