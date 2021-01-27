import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from "../../Header";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import {Link} from "react-router-dom";

const Register = () => {

    useEffect(()=>{
        if(localStorage.getItem("user-info"))
        {
            history.push("./Home");
        }
    },[])

    let history = useHistory();

    const [myLogin, setLogin] = useState({
        name:"",
        email: "",
        password: "",
        device_id:"jgdjgd",
        device_type:"android",
        fcm_token:"gkjgkdjgdklgjdgkjg"
    });


    const eventhandler = event => {
        setLogin({ ...myLogin, [event.target.name]: event.target.value })
    };

    async function submit () 
    {
    
        let result = await fetch("https://balukibazaar.es/balukibazar/api/user/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept": "application/json"
            },
            body:JSON.stringify(myLogin)
        });
        result= await result.json();
        console.warn("result",result);
        if(result.data)
        {
            localStorage.setItem("user-info", JSON.stringify(result))
            history.push("/");
        }
        else{
            alert("please Login or Signup !")
        }
    }


    return (
       <>
       <Header/>
        <section className="Login">
            <div className="container">
               <div className="row">
                   <div className="col-md-4 offset-sm-4">
                    <div className="LoginCard default-form">
                        <h5><PersonAddIcon/></h5>
                    <h5>SIGN UP</h5>
                    <form>
                    <div className="form-group">
                        <label htmlFor=""> <PersonOutlineIcon/> Full Name</label>
                        <input type="text" className="form-control" placeholder="Name"
                            name="name"
                            onChange={event => eventhandler(event)} required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor=""> <MailOutlineIcon/> Email</label>
                        <input type="email" className="form-control" placeholder="Email"
                            name="email"
                            onChange={event => eventhandler(event)} required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor=""> <LockOpenIcon/> Password</label>
                        <input type="text" className="form-control" placeholder="Password"
                            name="password"
                            onChange={event => eventhandler(event)} required
                        />
                    </div>
                    <div className="form-group">
                        <button type="button" className="cardbutton" onClick={submit}> Sign Up</button>
                    </div>
                    <div className="form-group text-center">
                        <p>Already Have an Account ? <Link to="/Login"> Login </Link> </p>
                    </div>
                </form>
                    </div>
                   </div>
               </div>

            </div>
        </section>
       </>
    );
}

export default Register;