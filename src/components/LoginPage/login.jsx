import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {Link} from "react-router-dom";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from "../../Header";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

const Login = () => {

    let history = useHistory();

    useEffect(()=>{
        if(localStorage.getItem("user-info"))
        {
            history.push("/");
        }
    },[])

    const [myLogin, setLogin] = useState({
        email: "",
        password: "",
        device_id:"jgdjgd",
        device_type:"android",
        fcm_token:"gkjgkdjgdklgjdgkjg"
    });

    
    const eventhandler = (event) => {
        setLogin({ ...myLogin, [event.target.name]: event.target.value })
        console.log(event.target.value);
    };

    async function submit () 
    { 
        let result = await fetch("https://balukibazaar.es/balukibazar/api/user/login",{
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
       <Header />
        <section className="Login">
            <div className="container">
               <div className="row">
                   <div className="col-md-4 offset-sm-4">
                   
                   <div className="LoginCard default-form">
                        <h5><AssignmentIndIcon/></h5>
                    <h5>LOGIN</h5>
                    
                    <div className="form-group">
                        <label htmlFor=""> <MailOutlineIcon/> Email</label>
                        <input type="email" className="form-control" required placeholder="Email"
                            name="email"
                            onChange={(event) => eventhandler(event)} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor=""> <LockOpenIcon/> Password</label>
                        <input type="password" className="form-control" required placeholder="Password"
                            name="password"
                            onChange={(event) => eventhandler(event)} 
                        />
                    </div>
                    <div className="form-group">
                        <button type="button" className="cardbutton" onClick={submit}> Login</button>
                    </div>

                    <div className="form-group text-center">
                        <p>Don't Have an Account ? <Link to="/Signup"> Sign Up </Link> </p>
                    </div>
                
                    </div>
                   
                   </div>
               </div>

            </div>
        </section>
       </>
    );
}

export default Login;