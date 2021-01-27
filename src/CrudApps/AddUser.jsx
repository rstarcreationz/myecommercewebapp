import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const AddUser = () => {

    let history = useHistory();

    const [detail, setDetail] = useState({
        fullname: "",
        email: "",
        address: ""
    });

    const { fullname, email, address } = detail;

    const eventhandler = event => {
        setDetail({ ...detail, [event.target.name]: event.target.value })
    };

    const submit = async (event) => {
    
        await axios.post("http://localhost:3333/profile",detail);
        history.push("/Home")
        event.preventDefault();
        // alert("form submitted");
        console.log(detail)
    }


    return (
        <div className="mt-5 mb-5">
            <div className="container">
                <form>
                    <div className="form-group">
                        <label htmlFor="">Full Name</label>
                        <input type="text" className="form-control" placeholder="fullname"
                            name="fullname"
                            value={fullname}
                            onChange={event => eventhandler(event)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input type="email" className="form-control" placeholder="Email"
                            name="email"
                            value={email}
                            onChange={event => eventhandler(event)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Address</label>
                        <input type="text" className="form-control" placeholder="address"
                            name="address"
                            value={address}
                            onChange={event => eventhandler(event)}
                        />
                    </div>

                    <div className="form-group">
                        <button type="button" className="btn btn-success" onClick={event => submit(event)}>Submit</button>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default AddUser;