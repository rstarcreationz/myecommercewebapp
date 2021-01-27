import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const User = () => {

    const [MyData, setData] = useState([]);
    const [Mode, setMode] = useState("online");

    useEffect(() => {
        let url = "http://localhost:3333/profile";
        fetch(url).then((resp) => {
            resp.json().then((result) => {
                console.warn("result", result);
                setData(result);
                localStorage.setItem("user",JSON.stringify(result))
            })
        }).catch(error=>{
            let storeData = localStorage.getItem("user")
            // alert("catch block");
            setData(JSON.parse(storeData))
            setMode("offline");
        })
    }, [])

    return (
        <div className="container mt-5">
           
                    <Link to="add_user" style={{float:"right", marginBottom:"20px"}}>
                        <button type="button" className="btn btn-outline-primary flaot-right"> Add More </button>
                    </Link>
           
        <div>
            {
                Mode === "offline"?
                <div style={{width:"250px",margin:"auto",padding:"15px",color:"#fff",background:"red", margin:"15px auto",textAlign:"center", borderRadius:"5px",boxShadow:"0px 0px 6px 0px #ccc" }}>
                    <strong>you are in offline mode</strong>
                </div>
                :null
            }
        </div>

            <table className="table shadow bordered">
                <thead className="thead-dark">
                    <th>s.no.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {
                        MyData.map((item)=>(
                            <tr>
                            <td>{item.id}</td>
                            <td>{item.fullname}</td>
                            <td>{item.email}</td>
                            <td>{item.address}</td>
                            <td> 
                                <Link to="/About"> <button type="btn" className="btn btn-success mr-2"> View </button> </Link>
                                <Link to="/Contact"> <button type="btn" className="btn btn-outline-primary mr-2"> Edit </button> </Link>
                                <span> <button type="btn" className="btn btn-danger"> Delete </button> </span>
                            </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    );
}
export default User;


                    // <tr>
                    //     <td>{item.id}</td>
                    //     <td>{item.fullname}</td>
                    //     <td>{item.email}</td>
                    //     <td>{item.address}</td>
                    // </tr>