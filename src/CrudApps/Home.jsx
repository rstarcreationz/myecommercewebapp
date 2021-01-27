import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Home = () => {

    const [Curdata, setData] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const result = await axios.get("http://localhost:3333/profile");
        console.log(result);
        setData(result.data);
    }

    const Deleteuser = async (id) =>{
        await axios.delete(`http://localhost:3333/profile/${id}`);
        loadData();
    }

    return (
        <div className="mt-5 mb-5">
            <div className="container">

                <Link to="/add_user"  className="btn btn-outline-primary float-right mb-3"> Add More 
                </Link>

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
                       
                                Curdata.map((item, index)=>(
                                <tr>
                                <td>{index + 1}</td>
                                <td>{item.fullname}</td>
                                <td>{item.email}</td>
                                <td>{item.address}</td>
                                <td> 
                                    <Link to={`/User/view_user/${item.id}`}> <button type="btn" className="btn btn-success mr-2"> View </button> </Link>
                                    <Link to={`/User/edit_user/${item.id}`}> <button type="btn" className="btn btn-outline-primary mr-2"> Edit </button> </Link>
                                    <span> <button onClick={() => Deleteuser(item.id)} type="btn" className="btn btn-danger"> Delete </button> </span>
                                </td>
                                </tr>
                            ))
                        }
                </tbody>
            </table>
               
            </div>
        </div>
    );
}

export default Home;


